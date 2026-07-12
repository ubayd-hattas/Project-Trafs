$content = @'
# Trafalgar High School — Implementation Plan

> **Prepared by:** Lead Frontend Engineer (Antigravity)
> **Date:** 12 July 2026
> **Based on:** `current-state.md` audit (12 July 2026) + direct code review
> **Audience:** Implementing engineer (Gemini)

---

## 1. Executive Summary

The Trafalgar High School website is in a strong pre-production state. Seven master pages (Home, About, Admissions, Academics, Student Life, Alumni, News & Events) are fully implemented with consistent component usage, a well-defined design token system (navy/brass/parchment), and real verified school data throughout.

What remains is a focused finishing sprint — not architectural change. The site has four categories of open work:

1. **Critical bugs** — mobile drawer animation regression, broken internal links causing 404s, nested `<main>` landmarks in all stub pages, and button hover colour inconsistencies.
2. **Stub pages** — Contact and Gallery are partially built but need proper layouts; Achievements, Giving, and Policies require a deliberate decision (Section 2) before any implementation work begins.
3. **UI consistency gaps** — four inconsistent section-nav components, missing active-route indicator in the header, inconsistent hero overlay values, inconsistent scroll-margin tokens.
4. **Production hygiene** — missing metadata on stubs, fake `metadataBase`, missing `favicon.ico`, non-functional forms, missing `not-found.tsx`/`error.tsx`, legacy scripts polluting the project root.

The design system is sound. No redesign is required. All remaining work is polish, completion, and correctness.

---

## 2. Implementation Philosophy

### Strategic Decision — Stub Pages

Before Phase 2 begins, the following question must be answered by the project owner:

> **What should happen to `/achievements`, `/giving`, `/policies`, and the footer-linked routes `/parents-portal`, `/privacy-policy`, `/sitemap`, `/site-credits` at the client presentation?**

| Option | Description | Effort |
|---|---|---|
| **A — Remove from navigation** | Remove links from Header, Footer, CTASection. Zero dev time. | None |
| **B — Redirect to parent sections** | `/achievements` → `/academics#results`. `/giving` → `/alumni#give-back`. | 30 min |
| **C — Minimal presentable pages** | PageHero + Breadcrumbs + "coming soon" body. Metadata fixed. | 1–2 hr each |
| **D — Fully implement** | Build complete pages. Not recommended before first presentation. | 2–4 days |

**Recommendation:** Option B for Achievements and Giving. Option C for Policies, Parents Portal, Privacy Policy, Sitemap, and Site Credits.

**This decision must be confirmed before Phase 2 begins.**

### Implementation Order

```
Phase 1 — Critical bugs        → correct baseline for all UI review
Phase 2 — Stub page resolution → eliminates all 404s before UI testing
Phase 3 — UI consistency       → visual polish requires stable structure
Phase 4 — Accessibility        → depends on correct semantics from 1-2
Phase 5 — Responsive testing   → depends on correct layout from 1-3
Phase 6 — SEO & metadata       → depends on all pages being stable
Phase 7 — Placeholder content  → content pass, independent of structure
Phase 8 — Production readiness → final hygiene, build, deployment
```

---

## 3. Implementation Phases

### Phase 1 — Critical Bugs

#### 1.1 Mobile Navigation Drawer

**Priority:** P0 — Blocker | **Complexity:** Medium (3–4 hours) | **Dependencies:** None

**Why it matters:** Mobile drawer is the primary nav path for <1024px users.

**Files affected:** `components/layout/MobileNavDrawer.tsx`, `components/layout/Header.tsx`, `app/globals.css`

**Issues and fixes:**

**Issue 1 — Conditional render prevents close animation.**
`if (!open) return null` destroys the element before the transition plays. Fix: always render the drawer; use CSS transform to show/hide:

```tsx
<div
  className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
  role="dialog" aria-modal="true" aria-label="Site navigation menu"
>
  <div
    className={`absolute inset-0 bg-navy-900/60 backdrop-blur-sm transition-opacity duration-300 ${
      open ? "opacity-100" : "opacity-0"
    }`}
    onClick={onClose} aria-hidden="true"
  />
  <div
    className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-parchment-100 shadow-cardHover transition-transform duration-300 ease-in-out ${
      open ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {/* drawer content */}
  </div>
</div>
```

**Issue 2 — Body scroll lock breaks on iOS Safari.**
Replace `document.body.style.overflow` with position-fixed approach:
```tsx
useEffect(() => {
  if (open) {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
  } else {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
}, [open]);
```

**Issue 3 — No focus trap.** Enumerate focusable elements in the drawer panel; cycle Tab within them only; return focus to hamburger on close.

**Issue 4 — No Escape key support.**
```tsx
useEffect(() => {
  if (!open) return;
  const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
  document.addEventListener("keydown", handleKey);
  return () => document.removeEventListener("keydown", handleKey);
}, [open, onClose]);
```

**Issue 5 — Reduced motion.** Apply `motion-safe:duration-300 motion-reduce:duration-0` to transition classes.

**Acceptance Criteria:**
- ✔ Drawer slides in from right on open; slides out on close (no abrupt pop)
- ✔ Background page does not scroll while drawer is open on iOS Safari
- ✔ `Escape` key closes the drawer
- ✔ Clicking the backdrop closes the drawer
- ✔ Tab cycles only within drawer items when open
- ✔ Focus returns to hamburger button when drawer closes
- ✔ `prefers-reduced-motion` disables animation
- ✔ Tested at 320px, 375px, 390px, 768px
- ✔ Drawer not visible at 1024px+

---

#### 1.2 Broken Internal Links (404s)

**Priority:** P0 — Blocker | **Complexity:** Low (1–2 hours) | **Dependencies:** Phase 2 stub decisions

**Files affected:** `components/home/HomeHero.tsx`, `components/layout/Header.tsx`, `components/layout/MobileNavDrawer.tsx`, `components/news-events/NewsCard.tsx`, `app/page.tsx`, `components/layout/Footer.tsx`

| Broken `href` | Found in | Fix |
|---|---|---|
| `/admissions/how-to-apply` | HomeHero, Header, MobileNavDrawer | → `/admissions#application-process` |
| `/about/our-history` | HomeHero, app/page.tsx | → `/about#history` |
| `/alumni/stories` | app/page.tsx | → `/alumni#stories` |
| `/alumni/association` | app/page.tsx CTASection | → `/alumni#association` |
| `/academics/curriculum` | app/page.tsx | → `/academics#curriculum` |
| `/news-events/news` | app/page.tsx | → `/news-events#latest-news` |
| `/news-events/events` | app/page.tsx | → `/news-events#events` |
| `/parents-portal` | Footer.tsx | Create stub in Phase 2.6 |
| `/privacy-policy` | Footer.tsx | Create stub in Phase 2.6 |
| `/sitemap` | Footer.tsx | Create stub at `/sitemap-page`; update Footer link |
| `/site-credits` | Footer.tsx | Create stub in Phase 2.6 |

**NewsCard:** Remove the `<Link>` wrapper and render as non-interactive card. Add `// TODO: restore link when /news-events/news/[slug] is implemented`.

**Acceptance Criteria:**
- ✔ Every link in Header, Footer, HomeHero, app/page.tsx resolves to a real page or anchor
- ✔ No broken internal links remain on any reachable page
- ✔ NewsCard does not link to a 404

---

#### 1.3 Nested `<main>` Landmark

**Priority:** P0 — Blocker | **Complexity:** Low (30 min) | **Dependencies:** None

**Files affected:** All 10 stub pages (`contact`, `gallery`, `achievements/*`, `giving/*`, `policies`)

In every stub page: replace outer `<main>` with `<>` (React Fragment). Replace `container mx-auto px-4` with `container-page`.

**Acceptance Criteria:**
- ✔ No page has nested `<main>` elements
- ✔ All stub pages use `container-page`

---

#### 1.4 Button Colour Inconsistencies

**Priority:** P1 — High | **Complexity:** Low–Medium (1–2 hours) | **Dependencies:** None

**Files affected:** `components/ui/Button.tsx` + all pages using `<Button className="...">` overrides

Run `grep -rn "className.*blue-" app/ components/ --include="*.tsx"` to find Tailwind default blue. Replace all with navy/brass.

Canonical variants (already defined in `Button.tsx` — enforce at call sites):

| Variant | Background | Text | Hover |
|---|---|---|---|
| `primary` | `bg-brass-500` | `text-navy-900` | `hover:bg-brass-400` |
| `secondary` | `bg-navy-800` | `text-parchment-100` | `hover:bg-navy-700` |
| `ghost` | transparent | `text-navy-800` | `hover:bg-navy-800/5` |

**HomeHero dark-background ghost override is intentional** — retain it; add comment `{/* Dark background ghost — intentional */}`.

**Acceptance Criteria:**
- ✔ No `blue-` colour classes anywhere in TSX files
- ✔ All three variants correct and consistent
- ✔ HomeHero override retained with comment
- ✔ All button text passes WCAG AA contrast

---

### Phase 2 — Stub Page Resolution

#### 2.1 Contact Page

**Priority:** P1 — High | **Complexity:** Medium (2–3 hours) | **Dependencies:** Phase 1.3

**Files affected:** `app/contact/page.tsx`

1. Remove nested `<main>`. Add metadata (title: "Contact Us").
2. Fix image: `assembly.jpg` → `assembly.webp`
3. Add Breadcrumbs: `trail={[{ label: "Contact Us" }]}`
4. Two-column layout: left = contact details from `siteConfig` + Google Maps iframe; right = `<ContactForm />`
5. Prototype notice above form: _"This form is a prototype. For urgent enquiries, call 021 465 2969."_
6. `<CTASection>` at bottom pointing to `/admissions`

**Acceptance Criteria:**
- ✔ Metadata present; no nested `<main>`; uses `container-page`
- ✔ All contact details from `siteConfig`; no hardcoded strings
- ✔ Breadcrumbs correct; form renders; prototype notice visible

---

#### 2.2 Gallery Page

**Priority:** P1 — High | **Complexity:** Low (1 hour) | **Dependencies:** Phase 1.3

**Files affected:** `app/gallery/page.tsx`, `data/gallery.ts`

1. Remove nested `<main>`, fix container, add metadata (title: "Gallery").
2. Fix image: `gallery-1.jpg` → `assembly.webp`
3. Add Breadcrumbs: `trail={[{ label: "Gallery" }]}`
4. Add intro paragraph above gallery.
5. Update `data/gallery.ts`: map historic `.webp` files to History items (`classof60s.webp`, `classof64.webp`, `classof69.webp`, `historic-2.webp`, `old_generation.webp`).

**Acceptance Criteria:**
- ✔ Metadata present; no nested `<main>`
- ✔ Historic `.webp` files visible in History filter
- ✔ Gallery filter and lightbox work

---

#### 2.3 Achievements (Redirects)

**Priority:** P1 — High | **Complexity:** Low (30 min) | **Dependencies:** Phase 1.2

Replace each achievements stub with `redirect()`:
- `/achievements` and `/achievements/academic` → `/academics#results`
- `/achievements/sport-culture` → `/student-life#achievements`
- `/achievements/alumni-success` → `/alumni#spotlight`

Update `app/page.tsx` "View all achievements" button to `/academics#results`.

---

#### 2.4 Giving (Redirects)

**Priority:** P1 — Medium | **Complexity:** Low (20 min) | **Dependencies:** Phase 1.2

Redirect all giving routes to `/alumni#give-back`. Update home CTASection primary from `/giving/donate` to `/alumni#give-back`.

---

#### 2.5 Policies (Minimal page)

**Priority:** P2 — Medium | **Complexity:** Low (1 hour) | **Dependencies:** Phase 1.3

1. Remove nested `<main>`, fix container, add metadata.
2. Fix image: `principal.jpg` → `principal.webp`
3. Add Breadcrumbs. Add POPIA notice. Use `<ResourceLinkCard>` for external policy links:
   - Admissions Policy: `https://trafalgarhighschool.co.za/admission-policy/`
   - Admissions Procedure: `https://trafalgarhighschool.co.za/admission-procedure/`
   - WCED Portal: `https://wcedonline.westerncape.gov.za/admissions-202122`

---

#### 2.6 Footer Stub Pages

**Priority:** P2 — Medium | **Complexity:** Low (1 hour total) | **Dependencies:** Phase 1.3

Create: `app/parents-portal/page.tsx`, `app/privacy-policy/page.tsx`, `app/sitemap-page/page.tsx`, `app/site-credits/page.tsx`

Update Footer link from `/sitemap` to `/sitemap-page` (since `app/sitemap.ts` is reserved for XML generation).

Each page: metadata, PageHero, Breadcrumbs, brief content body using `container-page`.

---

#### 2.7 Custom 404 Page

**Priority:** P1 — High | **Complexity:** Low (20 min) | **Dependencies:** None

Create `app/not-found.tsx` with branded navy/brass styling, "Go home" and "Contact us" buttons.

---

### Phase 3 — UI Consistency

#### 3.1 Section Nav Unification

**Priority:** P1 — High | **Complexity:** Medium (2–3 hours) | **Dependencies:** None

**Current inconsistencies:**

| Component | Active state | Radius | Sticky |
|---|---|---|---|
| AboutSectionNav | IntersectionObserver | `rounded-xs` | Yes |
| StudentLifeSectionNav | IntersectionObserver | `rounded-xs` | Yes |
| AcademicsSectionNav | **None** | `rounded-full` | Yes |
| AlumniSectionNav | **None** | `rounded-full` + border | **No** |

**Files affected:** Create `components/shared/SectionNav.tsx`. Delete all four page-specific nav files. Update all four master pages to import from shared.

**Unified spec:**
- `"use client"` with IntersectionObserver active state
- `sticky top-16 z-20 border-b border-navy-800/10 bg-parchment-100/95 backdrop-blur`
- Items: `rounded-xs`, active: `bg-navy-800 text-parchment-100`, inactive: `text-ink-muted hover:bg-navy-800/5 hover:text-navy-800`
- Scrollbar hidden: `[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`
- Props: `items: { id: string; label: string }[]`, `ariaLabel: string`

**Acceptance Criteria:**
- ✔ All four master pages use `<SectionNav>`
- ✔ Active section highlights as user scrolls on all four pages
- ✔ Visual style identical; scrollbar hidden; component sticky

---

#### 3.2 Hero Overlay Audit

**Priority:** P1 — High | **Complexity:** Low (1 hour) | **Dependencies:** None

**Files affected:** `components/shared/PageHero.tsx`

| Component | Current | Problem |
|---|---|---|
| PageHero | `opacity-40` image + `bg-navy-800/60` | ~16% photography visible — too dark |
| HomeHero | `opacity-60` + directional gradient | ~30-45% visible — correct, do not change |

**Fix for PageHero:**
- `opacity-40` → `opacity-55`
- `bg-navy-800/60` → `bg-navy-800/50`

Add optional `overlayStrength?: "light" | "medium" | "dark"` prop.
- `"light"`: `bg-navy-800/35` + `opacity-65`
- `"medium"` (default): `bg-navy-800/50` + `opacity-55`
- `"dark"`: `bg-navy-800/65` + `opacity-45`

Add comment to HomeHero: `{/* Gradient overlay — intentional. Do not normalise to PageHero. */}`

**Acceptance Criteria:**
- ✔ PageHero photography perceptibly visible
- ✔ White heading text remains legible
- ✔ HomeHero unchanged

---

#### 3.3 Header Active Route Indicator

**Priority:** P2 — Medium | **Complexity:** Low (30 min) | **Dependencies:** None

**Files affected:** `components/layout/Header.tsx`

Add `usePathname()` (Header is already `"use client"`):
```tsx
const pathname = usePathname();
const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
// className: isActive ? "text-brass-600" : "text-navy-800 hover:text-brass-600"
```

**Acceptance Criteria:**
- ✔ Current page link is brass-coloured in desktop nav
- ✔ Home `/` does not match all paths

---

#### 3.4 Scroll Margin Standardisation

**Priority:** P2 — Medium | **Complexity:** Low (30 min) | **Dependencies:** Phase 3.1

**Files affected:** `app/about/page.tsx`, `app/academics/page.tsx`, `app/student-life/page.tsx`, `app/alumni/page.tsx`

Standardise to `scroll-mt-36` on all section `id` targets. AcademicsSectionNav comment references `scroll-mt-24` — this is insufficient. Header (~56px) + SectionNav (~49px) = ~105px. `scroll-mt-36` = 144px gives 39px breathing room.

---

#### 3.5 Breadcrumb Consistency

**Priority:** P2 — Medium | **Complexity:** Low (20 min) | **Dependencies:** Phase 2

After Phase 2, grep for `trail={[]}` and replace with current page label. Every `<Breadcrumbs>` must show at minimum the current page.

---

#### 3.6 Icon Sizing Convention

**Priority:** P3 — Low | **Complexity:** Low (30 min) | **Dependencies:** None

Establish and enforce:
| Size | Classes | Usage |
|---|---|---|
| Small | `h-3.5 w-3.5` | Breadcrumb separators |
| Default | `h-4 w-4` | Inline text, nav, footer |
| Medium | `h-5 w-5` | Card icons, CTA arrows |
| Large | `h-6 w-6` | Hero decorative (reserved) |

---

### Phase 4 — Accessibility

#### 4.1 Focus Trap in Mobile Drawer

**Priority:** P1** — see Phase 1.1 (must include focus trap in that implementation).

---

#### 4.2 PhotoGallery Lightbox Keyboard Support

**Priority:** P1 — High | **Complexity:** Medium (2 hours) | **Dependencies:** Phase 2.2

**Files affected:** `components/gallery/PhotoGallery.tsx`

- `role="dialog"` `aria-modal="true"` `aria-label="Image lightbox"` on lightbox container
- Escape closes lightbox; ArrowLeft/ArrowRight navigate images
- Tab focus trap: cycles between close, prev, next buttons
- `aria-label="Previous image"` / `aria-label="Next image"` on nav buttons
- Lightbox image `alt` uses `GalleryItem.title`
- Focus to close button on open; return to clicked thumbnail on close

---

#### 4.3 Form Accessibility

**Priority:** P2 — Medium | **Complexity:** Low–Medium (1 hour) | **Dependencies:** Phase 2.1

**Files affected:** `components/contact/ContactForm.tsx`, `components/admissions/AdmissionsEnquiryForm.tsx`

Add to ContactForm: `aria-required="true"`, `aria-describedby` to error elements, visible error state (`border-red-500` + `aria-live="polite"` message), `noValidate` on form.

Add to AdmissionsEnquiryForm: comment `// NOTE: not yet rendered — awaiting backend decision`.

---

#### 4.4 School Song Audio Label

**Priority:** P2 — Medium | **Complexity:** Trivial (15 min)

**Files affected:** `app/about/page.tsx`

Add `aria-label="Trafalgar High School school song recording"` to the `<audio>` element. Add visible heading/figcaption above player.

---

#### 4.5 Document Language

**Priority:** P3 — Low | **Complexity:** Trivial (5 min)

**Files affected:** `app/layout.tsx`

Change `<html lang="en">` to `<html lang="en-ZA">`.

---

### Phase 5 — Responsive Improvements

#### 5.1 Responsive Testing Sweep

**Priority:** P2 — Medium | **Complexity:** Medium (2–3 hours) | **Dependencies:** Phases 1–3

Test at: **320px · 375px · 390px · 768px · 1024px · 1280px · 1440px**

Per-viewport checklist:
- ✔ No horizontal scroll
- ✔ Hamburger at <1024px; desktop nav at 1024px+
- ✔ Hero text readable
- ✔ Section nav scrolls without visible scrollbar
- ✔ Grids collapse (4→2→1 col)
- ✔ Footer stacks on mobile; 5-col doesn't overflow at 1024px
- ✔ Buttons ≥44×44px touch target
- ✔ Stats strip "1912" not truncated at 375px 2-col

---

#### 5.2 Image Path Corrections

**Priority:** P1 — Medium | **Complexity:** Low (30 min) | **Dependencies:** None

| File | Wrong | Correct |
|---|---|---|
| `app/contact/page.tsx` | `assembly.jpg` | `assembly.webp` |
| `app/gallery/page.tsx` | `gallery-1.jpg` | `assembly.webp` |
| `app/giving/page.tsx` | `assembly.jpg` | `assembly.webp` |
| `app/policies/page.tsx` | `principal.jpg` | `principal.webp` |
| `app/achievements/page.tsx` | `assembly.jpg` | `assembly.webp` |
| `data/staff.ts` | `principal.svg` | `icon.png` (crest placeholder) |

Verify `PlaceholderImage` has fallback for broken `src` (renders `bg-parchment-300` box, no broken icon).

---

### Phase 6 — SEO & Metadata

#### 6.1 Metadata Audit

After Phase 2, run: `grep -rn "export const metadata" app/ --include="*.tsx"`
Verify every page route has a metadata export. Redirect pages are exempt.

#### 6.2 Fix `metadataBase`

**Files affected:** `app/layout.tsx`

Change: `new URL("https://trafalgar-redesign-prototype.example")` → `new URL(siteConfig.url)`

#### 6.3 Logo / Favicon Audit

**Files affected:** `app/layout.tsx`, `components/layout/Header.tsx`, `components/layout/Footer.tsx`, `components/layout/MobileNavDrawer.tsx`, `components/home/HomeHero.tsx`

Migration:
1. Copy `/public/placeholders/icon.png` → `/public/icon.png`
2. Update all 5 references from `/placeholders/icon.png` → `/icon.png`

Next.js App Router auto-detects `/public/icon.png` as favicon.

**Acceptance Criteria:**
- ✔ Browser tab shows school crest as favicon
- ✔ All four logo usages reference `/icon.png`

#### 6.4 Conditional Social Media Icons

**Files affected:** `data/siteConfig.ts`, `components/layout/Footer.tsx`

Add `confirmed: false` flag to each social URL object. Only render social icons in Footer when `confirmed: true`. Prevents principal from clicking and landing on generic facebook.com.

#### 6.5 sitemap.xml and robots.txt

Create `app/sitemap.ts` and `app/robots.ts` using Next.js `MetadataRoute` API. Include all primary routes. Reference `siteConfig.url` for the base URL.

---

### Phase 7 — Placeholder Content

#### 7.1 Content That Can Be Replaced Now

| Location | Current | Replace with |
|---|---|---|
| `data/staff.ts` leadership[0].name | "Principal name placeholder" | `"Salwa Southgate"` (verified) |
| `data/staff.ts` leadership[0].image | `principal.svg` | `/placeholders/principal.webp` |
| `data/news.ts` matric results excerpt | Placeholder text | "The Class of 2024 achieved a 96.4% matric pass rate, continuing Trafalgar's strong record of academic achievement." |
| `data/news.ts` matric results body | Placeholder text | 2–3 sentence polished announcement |
| `app/about/page.tsx` facilities | — | Already polished — no change needed |

#### 7.2 Content That Must Remain Placeholder

| Item | Location | Reason |
|---|---|---|
| Deputy Principal names | `data/staff.ts` | Not verified |
| HOD names | `data/staff.ts` | Not verified |
| SGB member names | `data/staff.ts` | Not verified |
| Alumni names/roles/photos | `data/alumni.ts` | Require individual consent |
| News posts (except matric) | `data/news.ts` | School must supply |
| Event details | `data/events.ts` | School must confirm |
| Social media URLs | `data/siteConfig.ts` | School must confirm handles |
| Admissions email | `data/siteConfig.ts` | Must confirm with school |
| Postal code 7925 | `data/siteConfig.ts` | Must confirm with school |
| Staff photos (non-principal) | `data/staff.ts` | Not supplied |
| Gallery sport/culture/campus | `data/gallery.ts` | Not supplied |

#### 7.3 Update `PLACEHOLDERS.md`

Correct all `.jpg` references to `.webp`. Mark principal and matric results as replaced. Document all remaining placeholders with data file locations.

---

### Phase 8 — Production Readiness

#### 8.1 Fix TypeScript `any` Types

**Files:** `Header.tsx`, `Footer.tsx`, `MobileNavDrawer.tsx`, `app/page.tsx`

Import and use existing types: `NavSection`, `NavItem` from `data/navigation.ts`. For page data maps use: `NewsPost`, `SchoolEvent`, `AlumniStory`, `Achievement`, `GalleryItem`.

#### 8.2 Remove Duplicate Data

**Files:** `app/news-events/page.tsx`

Replace any inline data arrays duplicating `data/news.ts` or `data/events.ts` with imports.

#### 8.3 Delete Legacy Scripts

Files to delete (confirm not in package.json scripts first):
`generate-pages.js`, `fix-imports.js`, `fix-all-imports.js`, `fix-generated-pages.js`, `restructure.js`, `create-placeholders.js`

#### 8.4 Fix Hardcoded Contact Info

**Files:** `app/admissions/page.tsx`

Replace any hardcoded phone/email/address with `siteConfig` values.

#### 8.5 Add `error.tsx` Boundary

Create `app/error.tsx` as a `"use client"` component with branded 404-style layout and "Try again" / "Contact us" buttons.

#### 8.6 Build Validation

Run in order after each phase:
1. `npm run lint` — zero errors
2. `npx tsc --noEmit` — zero type errors
3. `npm run build` — successful
4. `npm run start` — smoke test at localhost

---

## Production Launch Checklist

### Phase 1 — Critical Bugs
- [ ] Mobile drawer: always-rendered + CSS transform (no conditional return)
- [ ] Mobile drawer: iOS Safari scroll lock (position-fixed + scrollY restore)
- [ ] Mobile drawer: focus trap (Tab cycle within drawer)
- [ ] Mobile drawer: Escape key closes drawer
- [ ] Mobile drawer: prefers-reduced-motion disables animation
- [ ] Fix all 9 confirmed broken internal links
- [ ] Fix NewsCard to not link to non-existent dynamic route
- [ ] Remove nested `<main>` from all 10 stub page files
- [ ] Replace `container mx-auto px-4` with `container-page` in stubs
- [ ] Grep for `blue-` classes; replace all with navy/brass
- [ ] Audit all `<Button className="...">` overrides against variant spec

### Phase 2 — Stub Pages
- [ ] Contact page: metadata, two-column layout (details + form), map embed, prototype notice
- [ ] Gallery page: metadata, layout, historic `.webp` photos mapped in gallery.ts
- [ ] Achievements: 4 server redirects to master page section anchors
- [ ] Giving: 3 server redirects to `/alumni#give-back`
- [ ] Policies: metadata, POPIA notice, external policy ResourceLinkCards
- [ ] Parents Portal: minimal presentable page
- [ ] Privacy Policy: minimal presentable page
- [ ] Sitemap page: route at `/sitemap-page`; update Footer link
- [ ] Site Credits: minimal presentable page
- [ ] `not-found.tsx`: branded custom 404

### Phase 3 — UI Consistency
- [ ] Create `components/shared/SectionNav.tsx` (unified, with IntersectionObserver)
- [ ] Update About page to use `<SectionNav>`
- [ ] Update Academics page to use `<SectionNav>`
- [ ] Update Student Life page to use `<SectionNav>`
- [ ] Update Alumni page to use `<SectionNav>`
- [ ] Delete 4 page-specific SectionNav files
- [ ] PageHero: image opacity 40%→55%, overlay /60→/50
- [ ] PageHero: add `overlayStrength` prop (light/medium/dark)
- [ ] HomeHero: add intentional comment (no changes)
- [ ] Header: add `usePathname` active route indicator in brass
- [ ] Standardise all section `scroll-mt` to `scroll-mt-36` across 4 master pages
- [ ] Replace all empty `trail={[]}` breadcrumbs with current page label
- [ ] Audit Lucide icon sizes; enforce 4-tier convention

### Phase 4 — Accessibility
- [ ] Focus trap confirmed in mobile drawer (Tab, Shift+Tab, return focus)
- [ ] Gallery lightbox: Escape, ArrowLeft/Right, role=dialog, focus trap
- [ ] ContactForm: aria-required, aria-describedby, visible error states
- [ ] School song `<audio>`: aria-label + visible figcaption
- [ ] Change `<html lang="en">` to `<html lang="en-ZA">`

### Phase 5 — Responsive Testing
- [ ] Test all 7 viewports (320, 375, 390, 768, 1024, 1280, 1440px)
- [ ] Fix all broken image paths (`.jpg` → `.webp`)
- [ ] Verify PlaceholderImage handles broken src gracefully
- [ ] Staff images: replace `principal.svg` with `icon.png` temporarily
- [ ] Footer 5-column layout confirmed at 1024px

### Phase 6 — SEO & Metadata
- [ ] Verify every page route has `metadata` export
- [ ] Fix `metadataBase` to `siteConfig.url`
- [ ] Copy icon.png to `/public/icon.png`; update 5 references
- [ ] Conditionally hide unconfirmed social media icons in Footer
- [ ] Create `app/sitemap.ts`
- [ ] Create `app/robots.ts`

### Phase 7 — Placeholder Content
- [ ] Replace principal name: "Salwa Southgate" in `data/staff.ts`
- [ ] Replace principal image: `principal.webp` in `data/staff.ts`
- [ ] Replace matric results news excerpt and body with polished copy
- [ ] Map 5 historic `.webp` files to History gallery items
- [ ] Update `PLACEHOLDERS.md` (extensions, confirmed items, file locations)

### Phase 8 — Production Readiness
- [ ] Replace all `any` types in Header, Footer, MobileNavDrawer, app/page.tsx
- [ ] Deduplicate inline data in `news-events/page.tsx`
- [ ] Delete 6 legacy `.js` scripts from project root
- [ ] Replace hardcoded contact info in admissions/page.tsx with `siteConfig`
- [ ] Create `app/error.tsx` boundary page
- [ ] `npm run lint` — zero errors
- [ ] `npx tsc --noEmit` — zero errors
- [ ] `npm run build` — successful production build
- [ ] Deploy preview to Vercel
- [ ] Smoke test all primary routes on Vercel preview
- [ ] Test on real iOS Safari device
- [ ] Test on Chrome Android device
- [ ] Confirm social media URLs with school (or remove icons)
- [ ] Confirm admissions email with school
- [ ] Confirm postal code (7925) with school
- [ ] Prepare principal demonstration script

---

## Open Questions

> [!IMPORTANT]
> These require a decision before Phase 2 begins. Gemini must not proceed with stub pages until confirmed.

1. **Stub page strategy:** Is Option B + C (redirects for Achievements/Giving; minimal pages for Policies and footer stubs) approved? Or must Achievements and Giving be fully built?

2. **`favicon.ico`:** Should `icon.png` be moved from `/public/placeholders/` to `/public/icon.png`? Recommended — Next.js App Router auto-detects this path.

3. **ContactForm backend:** Is the prototype disclaimer form acceptable for the first presentation, or must it be wired to a real endpoint?

4. **`AdmissionsEnquiryForm`:** Render on Admissions page, or leave unused pending backend decision?

5. **Social media:** Does the school have active Facebook/Instagram accounts? Provide URLs. Until confirmed, icons will be hidden.

6. **Deployment domain:** Vercel preview URL or real `trafalgarhighschool.co.za`? This affects `metadataBase`.
'@
$content | Out-File -FilePath "implementation-plan.md" -Encoding UTF8
Write-Host "Written successfully. Lines: $($content.Split("`n").Count)"