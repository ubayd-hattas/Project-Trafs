const { chromium } = require("playwright");
const { default: AxeBuilder } = require("@axe-core/playwright");
const fs = require("node:fs/promises");
const path = require("node:path");
const assert = require("node:assert/strict");
const origin = process.env.QA_URL || "http://localhost:3000";
const routes = [
  "/",
  "/about",
  "/admissions",
  "/academics",
  "/student-life",
  "/news-events",
  "/contact",
  "/alumni",
  "/gallery",
  "/parents-portal",
  "/policies",
  "/privacy-policy",
  "/site-credits",
  "/sitemap-page",
];
(async () => {
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.QA_BROWSER_PATH
      ? { executablePath: process.env.QA_BROWSER_PATH }
      : {}),
  });
  const page = await browser.newPage();
  const issues = [];
  let expected404 = false;
  const pages = [];
  const pageMap = {};
  page.on("pageerror", (e) => issues.push({ runtime: e.message }));
  page.on("console", (m) => {
    if (m.type() === "error" && !expected404) issues.push({ console: m.text() });
  });
  for (const width of [375, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      const response = await page.goto(origin + route, {
        waitUntil: "networkidle",
      });
      assert.equal(response.status(), 200, route);
      await page.evaluate(async () => {
        await document.fonts.ready;
        for (let y = 0; y < document.body.scrollHeight; y += 650) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 40));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForFunction(() =>
        [...document.images].every((i) => i.complete),
      );
      const state = await page.evaluate(() => ({
        title: document.title,
        description: document.querySelector('meta[name="description"]')
          ?.content,
        h1: document.querySelectorAll("h1").length,
        overflow: document.documentElement.scrollWidth > innerWidth,
        brokenImages: [...document.images]
          .filter((i) => !i.naturalWidth)
          .map((i) => i.src),
        ids: [...document.querySelectorAll("[id]")].map((i) => i.id),
        links: [...document.querySelectorAll("a[href]")].map((a) =>
          a.getAttribute("href"),
        ),
        residue: /placeholder|lorem ipsum|under construction|20XX/i.test(
          document.body.innerText,
        ),
      }));
      if (
        state.overflow ||
        state.brokenImages.length ||
        state.h1 !== 1 ||
        state.residue ||
        !state.description
      )
        issues.push({ width, route, ...state });
      pages.push({
        width,
        route,
        title: state.title,
        overflow: state.overflow,
        brokenImages: state.brokenImages.length,
      });
      pageMap[route] = state;
      if ([375, 1440].includes(width)) {
        const a11y = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        if (a11y.violations.length)
          issues.push({
            width,
            route,
            a11y: a11y.violations.map((v) => ({
              id: v.id,
              impact: v.impact,
              nodes: v.nodes.map((n) => ({
                target: n.target,
                summary: n.failureSummary,
              })),
            })),
          });
      }
      if (
        [
          "/",
          "/about",
          "/admissions",
          "/academics",
          "/student-life",
          "/contact",
        ].includes(route)
      )
        await page.screenshot({
          path: path.join(
            "qa",
            (route === "/" ? "home" : route.slice(1)) + "-" + width + ".png",
          ),
          fullPage: true,
        });
    }
    console.log("Checked viewport " + width);
  }
  for (const [route, state] of Object.entries(pageMap)) {
    for (const href of state.links) {
      if (!href.startsWith("/") && !href.startsWith("#")) continue;
      const url = new URL(href, origin + route);
      const target = pageMap[url.pathname];
      if (
        target &&
        url.hash &&
        !target.ids.includes(decodeURIComponent(url.hash.slice(1)))
      )
        issues.push({ route, brokenAnchor: href });
      if (!target) {
        const r = await page.request.get(url.href);
        if (r.status() >= 400)
          issues.push({ route, brokenLink: href, status: r.status() });
      }
    }
  }
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(origin);
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  assert(
    await page.getByRole("dialog", { name: "School navigation" }).isVisible(),
  );
  assert.equal(
    await page.evaluate(() =>
      document.activeElement.getAttribute("aria-label"),
    ),
    "Close navigation menu",
  );
  await page.keyboard.press("Shift+Tab");
  assert.equal(
    await page.evaluate(() => document.activeElement.getAttribute("href")),
    "tel:+27214652969",
  );
  await page.keyboard.press("Tab");
  assert.equal(
    await page.evaluate(() =>
      document.activeElement.getAttribute("aria-label"),
    ),
    "Close navigation menu",
  );
  const menuAxe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  if (menuAxe.violations.length)
    issues.push({ menuA11y: menuAxe.violations.map((v) => v.id) });
  await page.screenshot({ path: "qa/mobile-menu.png" });
  await page.keyboard.press("Escape");
  assert.equal(
    await page.evaluate(() => document.activeElement.id),
    "mobile-menu-button",
  );
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await page
    .getByRole("navigation", { name: "Mobile primary" })
    .getByRole("link", { name: "Admissions" })
    .click();
  await page.waitForURL("**/admissions");
  assert.equal(await page.getByRole("dialog").count(), 0);
  const faq = page.getByRole("button", { name: "Can I visit the school?" });
  await faq.click();
  assert.equal(await faq.getAttribute("aria-expanded"), "true");
  await faq.click();
  assert.equal(await faq.getAttribute("aria-expanded"), "false");
  await page.goto(origin + "/gallery");
  await page.getByRole("button", { name: "Sport", exact: true }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "Sport", exact: true })
      .getAttribute("aria-pressed"),
    "true",
  );
  await page.getByRole("button", { name: /Athletics · 2025/ }).click();
  assert(await page.getByRole("dialog").isVisible());
  await page.getByRole("button", { name: "Next image" }).click();
  await page.keyboard.press("Escape");
  assert.equal(await page.getByRole("dialog").count(), 0);
  await page.getByRole("button", { name: "All", exact: true }).click();
  await page
    .getByRole("button", { name: /The historic school building/ })
    .click();
  await page.keyboard.press("ArrowRight");
  assert(
    await page.getByRole("dialog").getByText("Athletics · 2025").isVisible(),
  );
  await page.getByRole("button", { name: "Close image viewer" }).click();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(origin);
  assert.equal(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
    "auto",
  );
  expected404 = true;
  const missing = await page.goto(origin + "/this-page-does-not-exist");
  assert.equal(missing.status(), 404);
  expected404 = false;
  for (const p of [
    "/icon.png",
    "/apple-icon.png",
    "/sitemap.xml",
    "/robots.txt",
    "/images/social-preview.jpg",
  ])
    assert.equal((await page.request.get(origin + p)).status(), 200, p);
  for (const [p, hash] of [
    ["/achievements", "#matric-results"],
    ["/achievements/academic", "#matric-results"],
    ["/achievements/sport-culture", "#sport"],
    ["/achievements/alumni-success", "#stories"],
    ["/giving", "#give-back"],
    ["/giving/donate", "#give-back"],
    ["/giving/partnerships-sponsorship", "#give-back"],
    ["/academics/matric-results", "#matric-results"],
  ]) {
    await page.goto(origin + p);
    assert.equal(new URL(page.url()).hash, hash, p);
    assert(await page.locator(hash).count(), p);
  }
  await fs.writeFile(
    "qa/results.json",
    JSON.stringify(
      {
        checkedAt: new Date().toISOString(),
        pages,
        issues,
        interactions: "passed",
      },
      null,
      2,
    ),
  );
  console.log(JSON.stringify({ pages: pages.length, issues }, null, 2));
  await browser.close();
  if (issues.length) process.exitCode = 1;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
