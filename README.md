# Trafalgar High School — Website Redesign (Prototype)

> **One-line summary:** An independent, unpaid redesign prototype of trafalgarhighschool.co.za, built in Next.js/TypeScript/Tailwind by an alumnus (Head Boy, Class of 2025), to be presented to the school's principal as a proposal — not a live production site, and not a commissioned client project.

This README is written so that **any human or AI picking up this repository cold** — with no prior conversation history — can understand what the project is, why it exists, what state it's in, and what to do next.

---

## 1. Project Context (read this first)

This is **not** a freelance or agency project. It is a personal initiative by **Ubayd Hattas**, a former Head Boy (Class of 2025) of Trafalgar High School, one of South Africa's oldest and most historically significant public schools (founded 1912, Zonnebloem, Cape Town).

The real, live school website (https://trafalgarhighschool.co.za/) is outdated: content dating back to ~2021, photos still showing learners in COVID masks, no showcasing of recent matric results or alumni success, weak navigation, dated visual design, and no favicon/browser branding.

**The plan:** independently design and build a complete, working prototype of a modernised website, then personally present it to the principal (with whom the author has an existing relationship). If the school likes it, they can choose to adopt it — there is no obligation, no contract, and no payment involved on either side.

This repo is the **implementation** of that plan. The **planning document that this entire build is based on** is `architecture-plan.md` at the project root — it contains the full UX/IA rationale, sitemap, design principles, and phased roadmap. **Read `architecture-plan.md` before making structural changes to this codebase** — it is the source of truth for *why* the site is organised the way it is.

### Key facts about the author (relevant for tone/credibility decisions in copy)
- Head Boy, Trafalgar High School, Class of 2025
- Top achiever in Mathematics and Physics
- Currently studying BSc Computer Science, Statistics & Data Science at UCT
- Only student from his graduating class accepted into a top South African university (UCT)
- Also built [SA Data Hub](https://sadatahub.tech) (South African public statistics platform) and a personal site, [ubayd.me](https://ubayd.me)
- Has an existing relationship with several teachers and the principal; father is also a Trafalgar alumnus

### What this project is *not*
- It is **not** the live school website — nothing here is deployed to `trafalgarhighschool.co.za`.
- It is **not** commissioned or paid work.
- It is **not** guaranteed to be adopted — treat this as a pitch/demo, not a production handover, until the school explicitly signs off.

---

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 14** (App Router, `app/` directory) |
| Language | **TypeScript** (strict mode) |
| Styling | **Tailwind CSS** (custom design tokens — see §6) |
| Icons | `lucide-react` |
| Fonts | Google Fonts via `next/font` — **Fraunces** (display/serif, heritage feel) + **IBM Plex Sans** (body, accessibility-focused) |
| Data layer | Static TypeScript mock data in `data/*.ts` (no CMS/database yet — see §7 and §9) |
| Hosting (planned) | Vercel (not yet deployed) |

No backend, database, or CMS is wired up yet. All content is hardcoded TypeScript data, by design, until real content is sourced from the school (see Placeholder Policy, §8).

---

## 3. Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:
```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

**Note:** `node_modules` is not included in the handed-off copy of this project — run `npm install` first. There is a `package-lock.json` committed, so installs should be reproducible.

---

## 4. Project Structure

```
app/                    Next.js App Router — one folder per route, matches the sitemap in architecture-plan.md
  page.tsx              Homepage
  about/                About, Our History, Mission & Vision, Principal's Message, Staff, SGB, Facilities
  admissions/            How to Apply, Requirements, Fees, Key Dates, FAQ
  academics/             Curriculum, Matric Results, Past Papers, Academic Support
  student-life/           Sport, Culture & Arts, Clubs & Societies, Leadership, Code of Conduct
  news-events/            News, Events, Newsletters
  achievements/           Academic, Sport & Culture, Alumni Success
  alumni/                 Association, Stories, Reunions & Events, Give Back
  giving/                 Donate, Partnerships & Sponsorship
  gallery/                Photo gallery
  contact/                Contact page + form
  policies/               Policy documents page
  layout.tsx             Root layout — fonts, global <Header>/<Footer>, metadata defaults
  globals.css             Tailwind base + global styles

components/
  ui/                    Atomic components — Button, Badge, Accordion, StatCounter
  layout/                Header, Footer, MobileNavDrawer
  shared/                Cross-page building blocks — PageHero, SectionHeading, Breadcrumbs, CTASection, QuoteBlock, DocumentListItem, PlaceholderImage
  home/                  Homepage-only — HomeHero, AchievementBadgeCard
  about/                 StaffCard, Timeline (used on Our History page)
  admissions/            AdmissionsEnquiryForm
  alumni/                AlumniStoryCard
  contact/               ContactForm
  gallery/               PhotoGallery
  news-events/           NewsCard, EventCard

data/                    All mock/seed content lives here as typed TS exports (see §7)
  siteConfig.ts          Core school facts: name, motto, address, phone, pass rate, etc.
  navigation.ts          Primary nav, footer nav, achievements sub-nav — single source of truth for site nav
  timeline.ts / staff.ts / news.ts / events.ts / achievements.ts / alumni.ts / gallery.ts / faq.ts / documents.ts / studentLife.ts

public/placeholders/     All placeholder imagery + one placeholder video (see §8)

architecture-plan.md     The full UX/IA/design planning document this build implements — READ THIS FIRST for rationale
PLACEHOLDERS.md          Inventory of every placeholder asset/content item and how to replace it
TODO.md                  Running task list (completed / needs review / remaining / future)
```

There is **no `lib/` directory** in the current codebase — despite being mentioned in earlier notes, it doesn't exist yet. If utility functions are added later, that's the natural place for them.

---

## 5. Content & Data Model

All content is currently static TypeScript, not a CMS. Each file in `data/` exports typed constants/arrays consumed directly by page components — this mirrors the eventual CMS collections described in `architecture-plan.md` §8 (Information Architecture), so migrating to a real headless CMS later should mostly mean swapping the data-fetching layer, not rewriting the components.

`data/siteConfig.ts` is the most important file to understand: every fact in it is explicitly commented as either `// verified` (pulled from the real, live trafalgarhighschool.co.za site on 2 July 2026) or `// placeholder` (invented/needs confirmation with the school). **Always preserve this verified/placeholder distinction when editing** — it's what stops fabricated facts from silently becoming "real" content.

Known verified facts currently in the codebase:
- Founded 1912 (verified)
- Motto: *Per Angusta, Ad Augusta* ("Through difficulties, to honours")
- Address: 35 Kuiper Street, Zonnebloem, Cape Town (street & suburb verified; postal code is a placeholder)
- Phone: 021 465 2969 (verified)
- Hours: Monday–Friday, 8:00–15:00 (verified)
- Class of 2024 matric pass rate: 96.4% (verified)
- Founding history: Dr Abdurahman's campaign and Harold Cressy as first principal (verified, condensed from the live site)

Placeholders still needing confirmation from the school: official email inbox, social media URLs, postal code, virtually all staff/news/events/alumni/gallery entries, and all photography.

---

## 6. Design System

Defined in `tailwind.config.ts`:

- **Colour palette:** `navy` (primary brand colour, deep heritage navy), `parchment` (warm off-white background), `brass` (gold/brass accent for highlights and CTAs), `ink` (text colours — default, light, muted variants).
- **Typography:** `font-display` (Fraunces, serif — headings, evokes heritage) and `font-body` (IBM Plex Sans — body copy, optimised for legibility/accessibility).
- **Custom shadows:** `card` / `cardHover` for consistent elevation on interactive cards.
- **Animation:** a single `fadeUp` keyframe/utility for scroll-in reveals — intentionally restrained, per the "subtle, professional" animation principle in `architecture-plan.md` §15.

This palette and type system were chosen deliberately to read as "established institution," not "startup." See `architecture-plan.md` §13 for the full rationale.

---

## 7. Current Build Status

- ✅ Full Next.js App Router structure in place, matching the complete sitemap from `architecture-plan.md`.
- ✅ Reusable component library built (layout, UI, and domain-specific components — see §4).
- ✅ Placeholder content and asset system in place across all pages, so every route renders end-to-end.
- ✅ TypeScript strict mode — codebase was at 0 type errors as of the last recorded state.
- ⬜ No SEO metadata exports (`generateMetadata` / per-page `metadata`) beyond the root layout defaults yet.
- ⬜ No CMS/backend integration — all content is static.
- ⬜ No real photography — every image is a placeholder (see §8).
- ⬜ No animations beyond the base `fadeUp` utility (framer-motion not yet integrated).
- ⬜ Not yet deployed anywhere (no live preview URL).

See `TODO.md` for the maintained, granular task list.

---

## 8. Placeholder Policy

Because real content and final photography haven't been sourced from the school yet, **every piece of dynamic or unconfirmed content is deliberately placeholder-flagged** rather than invented and presented as fact. Full inventory and replacement instructions live in `PLACEHOLDERS.md`. In short:

- **Images:** all in `public/placeholders/` (hero, history, principal, students, science-lab, sports, choir, assembly, gallery-1/2/3, and one placeholder hero video). Replace by overwriting the file in place — no code changes needed.
- **Content:** hardcoded mock data in `data/news.ts`, `data/events.ts`, `data/alumni.ts`, `data/achievements.ts`, `data/gallery.ts`, `data/staff.ts`, etc. Replace by editing the exported arrays/objects directly.

**Rule for anyone (human or AI) editing this project:** never quietly convert a placeholder into something that reads as a confirmed fact about the real school. If you don't have a verified source, keep it clearly marked as a placeholder or invented example, consistent with the pattern already established in `siteConfig.ts`.

---

## 9. Known Technical History (for context, not action)

A number of one-off Node scripts exist at the project root — `generate-pages.js`, `restructure.js`, `fix-imports.js`, `fix-all-imports.js`, `fix-generated-pages.js`, `create-placeholders.js`. These were **one-time migration/build-fixing utilities** used earlier in development (e.g. reorganising a flat dump of component files into the current `components/ui|layout|shared|...` structure, fixing import paths after that move, and generating placeholder asset files). They are **not part of the normal dev workflow** (`npm install && npm run dev` is all that's needed day-to-day) and are safe to ignore or delete once the project structure is confirmed stable. They're left in place purely as a record of how the structure came to be, in case similar bulk-refactoring is needed again.

---

## 10. What To Do Next

Roughly in priority order (full detail in `architecture-plan.md` §18, "Phased Implementation Roadmap"):

1. **Content audit with the school** — confirm/replace every placeholder in `siteConfig.ts` and `data/*.ts` (real staff names, real news, real achievements, real alumni stories).
2. **Real photography** — commission or gather a current photo/video set (no COVID-era imagery), replacing everything in `public/placeholders/`.
3. **SEO pass** — add `metadata`/`generateMetadata` exports per route, JSON-LD structured data (`EducationalOrganization`, `NewsArticle`, `Event`, `BreadcrumbList`), sitemap.xml, robots.txt, and a full favicon set (currently missing on the live site — a specifically flagged gap).
4. **Accessibility audit** — automated (axe/Lighthouse) + manual screen-reader pass against WCAG 2.1 AA, per `architecture-plan.md` §11.
5. **CMS decision** — decide whether to wire up a headless CMS (Sanity/Payload, per `architecture-plan.md` §17) before handover, so the school can self-manage content without a developer.
6. **Deploy a preview** (Vercel) so the prototype can be reviewed on a real URL before the principal presentation.
7. **Prepare the pitch** — the presentation to the principal is a separate deliverable from this codebase; see `architecture-plan.md` §19 for the discussion on whether/how to include a footer developer credit if the school adopts the site.

---

## 11. Guidance for AI Assistants Picking This Up

If you are an AI assistant being handed this repository without prior conversation context:

- Treat `architecture-plan.md` as the **spec** and this README as the **map of what's already built against that spec**.
- Do not invent facts about the real Trafalgar High School. Check `siteConfig.ts` comments (`// verified` vs `// placeholder`) before stating anything as fact, and preserve that labelling convention in any new content you add.
- This is a **prototype for a pitch**, not a live production system — there's no urgency around uptime/security hardening yet, but there *is* an urgency around it looking convincingly professional and complete for a principal demo.
- The author (Ubayd) is both the developer and a genuine stakeholder (alumnus) — tone and framing choices should respect that this is going to a real school community, not a generic demo client.
