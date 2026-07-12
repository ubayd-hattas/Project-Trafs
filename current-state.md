# Trafalgar High School — Current State Audit

> **Audit Date:** 12 July 2026
> **Auditor:** Lead Software Architect / Senior Frontend Engineer
> **Project Version:** v1.0 (pre-production prototype)

---

## 1. Architecture Overview

### Framework & Toolchain

| Item | Value |
|---|---|
| Framework | Next.js 14.2.32 (App Router) |
| Language | TypeScript 5.5 |
| Styling | Tailwind CSS 3.4.4 |
| Icons | Lucide React 0.400 |
| Fonts | Fraunces (display) + IBM Plex Sans (body) via next/font/google |
| React | 18.3.1 |
| Package Manager | npm |
| Linting | ESLint with eslint-config-next |

The project uses **Next.js App Router** exclusively. There are no API routes, server actions, or middleware files. All data is sourced from static TypeScript files inside `/data`. The application is a **static, server-rendered site** using React Server Components by default, with `"use client"` used sparingly and correctly only where browser APIs or state are required.

### Design Philosophy

The site operates on a **consolidated long-form page** model. Instead of many small pages each with their own route, related content has been merged into comprehensive master pages with sticky in-page section navigation. This reduces navigation friction and allows visitors to consume all information about a topic without leaving the page.

---

## 2. Folder Structure

```
trafalgar/
├── app/
│   ├── layout.tsx                # Root layout (Header, Footer, fonts, metadata)
│   ├── globals.css               # Global CSS (Tailwind base, component utilities)
│   ├── page.tsx                  # Home page (251 lines, fully built)
│   ├── about/page.tsx            # About master page (457 lines, fully built)
│   ├── academics/page.tsx        # Academics master page (446 lines, fully built)
│   ├── admissions/page.tsx       # Admissions master page (436 lines, fully built)
│   ├── alumni/page.tsx           # Alumni master page (414 lines, fully built)
│   ├── student-life/page.tsx     # Student Life master page (344 lines, fully built)
│   ├── news-events/page.tsx      # News & Events master page (299 lines, fully built)
│   ├── contact/page.tsx          # Contact page — STUB (18 lines)
│   ├── gallery/page.tsx          # Gallery page — STUB (17 lines)
│   ├── achievements/
│   │   ├── page.tsx              # Achievements hub — STUB
│   │   ├── academic/page.tsx     # Academic achievements — STUB
│   │   ├── sport-culture/page.tsx
│   │   └── alumni-success/page.tsx
│   ├── giving/
│   │   ├── page.tsx              # Giving hub — STUB
│   │   ├── donate/page.tsx
│   │   └── partnerships-sponsorship/page.tsx
│   └── policies/page.tsx         # Policies page — STUB
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNavDrawer.tsx
│   ├── shared/
│   │   ├── PageHero.tsx
│   │   ├── Breadcrumbs.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── CTASection.tsx
│   │   ├── PlaceholderImage.tsx
│   │   ├── QuoteBlock.tsx
│   │   ├── IconCard.tsx
│   │   ├── ResourceLinkCard.tsx
│   │   └── DocumentListItem.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Accordion.tsx
│   │   └── StatCounter.tsx
│   ├── home/
│   │   ├── HomeHero.tsx
│   │   └── AchievementBadgeCard.tsx
│   ├── about/
│   │   ├── AboutSectionNav.tsx
│   │   ├── StaffCard.tsx
│   │   └── Timeline.tsx
│   ├── academics/
│   │   ├── AcademicsSectionNav.tsx
│   │   └── PathwayCard.tsx
│   ├── admissions/
│   │   └── AdmissionsEnquiryForm.tsx
│   ├── alumni/
│   │   ├── AlumniSectionNav.tsx
│   │   └── AlumniStoryCard.tsx
│   ├── contact/
│   │   └── ContactForm.tsx
│   ├── gallery/
│   │   └── PhotoGallery.tsx
│   ├── news-events/
│   │   ├── NewsCard.tsx
│   │   └── EventCard.tsx
│   └── student-life/
│       └── StudentLifeSectionNav.tsx
│
├── data/
│   ├── siteConfig.ts
│   ├── navigation.ts
│   ├── news.ts
│   ├── events.ts
│   ├── alumni.ts
│   ├── achievements.ts
│   ├── gallery.ts
│   ├── staff.ts
│   ├── studentLife.ts
│   ├── timeline.ts
│   ├── faq.ts
│   └── documents.ts
│
├── public/
│   └── placeholders/
│       ├── hero.webp             # REAL — school campus
│       ├── principal.webp        # REAL — principal portrait
│       ├── assembly.webp         # REAL — assembly hall
│       ├── icon.png              # REAL — school crest
│       ├── school-song.mp3       # REAL — school song recording
│       ├── classof60s.webp       # REAL — historic class photo
│       ├── classof64.webp        # REAL — historic class photo
│       ├── classof69.webp        # REAL — historic class photo
│       ├── historic-2.webp       # REAL — Harold Cressy era
│       ├── old_generation.webp   # REAL — historic photo
│       └── hero-video.mp4        # REAL — video (unused in code)
│
├── tailwind.config.ts
├── next.config.mjs
├── package.json
├── tsconfig.json
├── PLACEHOLDERS.md
├── TODO.md
├── generate-pages.js             # Legacy scaffold script (not needed)
├── fix-imports.js                # Legacy fix script (not needed)
├── fix-all-imports.js            # Legacy fix script (not needed)
├── fix-generated-pages.js        # Legacy fix script (not needed)
├── restructure.js                # Legacy restructure script (not needed)
└── create-placeholders.js        # Legacy placeholder script (not needed)
```

---

## 3. Routing Map

### Primary Routes (fully built)

| Route | Status |
|---|---|
| `/` | Complete |
| `/about` | Complete |
| `/admissions` | Complete |
| `/academics` | Complete |
| `/student-life` | Complete |
| `/alumni` | Complete |
| `/news-events` | Complete |
| `/contact` | Stub only |
| `/gallery` | Stub only |

### Secondary Routes (stub state)

| Route | Status |
|---|---|
| `/achievements` | Stub |
| `/achievements/academic` | Stub |
| `/achievements/sport-culture` | Stub |
| `/achievements/alumni-success` | Stub |
| `/giving` | Stub |
| `/giving/donate` | Stub |
| `/giving/partnerships-sponsorship` | Stub |
| `/policies` | Stub |

### Routes Referenced But Missing (404s)

| Route | Referenced From |
|---|---|
| `/admissions/how-to-apply` | Header Apply Now CTA, HomeHero |
| `/about/our-history` | HomeHero, Home page history section |
| `/alumni/association` | Home CTA secondary button |
| `/alumni/stories` | Home alumni spotlight section |
| `/academics/curriculum` | Home Get Started cards |
| `/news-events/news/{slug}` | NewsCard component |
| `/parents-portal` | Footer |
| `/privacy-policy` | Footer |
| `/sitemap` | Footer |
| `/site-credits` | Footer byline |

---

## 4. Page Hierarchy

```
Home (/)
  Hero, Stats, Principal teaser, News, Achievements, History, Get Started,
  Student Life gallery, Alumni, Events, Community CTA, Contact strip

About (/about)  — 13 sections
  Welcome, Mission, Vision, Core Values, History, Timeline, School Song,
  Principals Message, Leadership, Staff Directory, Governing Body, Facilities, CTA

Admissions (/admissions)  — 14 sections
  Overview, Why Trafalgar, Application Process, Requirements, Documents,
  Fees, Fee Exemption, Banking Details, Important Dates, FAQ, Downloads,
  Contact Admissions, CTA

Academics (/academics)  — 8 sections
  Overview, Curriculum, Subject Pathways, Academic Support, Matric Results,
  Past Papers, Learning Resources, Downloads

Student Life (/student-life)  — 10 sections
  Overview, Sport, Culture & Arts, Clubs & Societies, Leadership,
  Student Experience, Code of Conduct, Achievements, Gallery, FAQs

News & Events (/news-events)
  Hero, Latest News, Announcements, Events, Newsletter Archive, Social Media

Alumni (/alumni)  — 9 sections
  Welcome, Association, Alumni Stories, Reunions & Events, Give Back,
  Spotlight, Gallery, FAQ, Contact

Gallery (/gallery)  — Stub
Contact (/contact)  — Stub
Achievements, Giving, Policies  — All stubs
```

---

## 5. Component Structure

### Layout
- `Header` — sticky, scroll-aware, phone number, Apply Now CTA, hamburger
- `Footer` — dark navy, 5-column grid, contact info, social icons, compliance links
- `MobileNavDrawer` — full-screen drawer with "Call Us" + "Apply Now"

### Shared (cross-page)
| Component | Purpose |
|---|---|
| `PageHero` | Standard inner-page hero with image, eyebrow, h1, description |
| `Breadcrumbs` | Trail navigation |
| `SectionHeading` | Eyebrow + h2 + optional description, left or centre aligned |
| `CTASection` | Brass-tinted call-to-action band |
| `PlaceholderImage` | next/image wrapper — all images go through this |
| `QuoteBlock` | Blockquote with brass border, light/dark variants |
| `IconCard` | Icon + title + body card |
| `ResourceLinkCard` | External link card (opens new tab) |
| `DocumentListItem` | Downloadable document row |

### UI Primitives
| Component | Variants |
|---|---|
| `Button` | primary / secondary / ghost |
| `Badge` | navy / brass / parchment |
| `Accordion` | — |
| `StatCounter` | — |

### Page-Specific
| Component | Page | Notes |
|---|---|---|
| `HomeHero` | Home | Full-bleed gradient overlay |
| `AchievementBadgeCard` | Home | Achievement spotlight |
| `AboutSectionNav` | About | IntersectionObserver active state |
| `StaffCard` | About | Photo + name + role |
| `Timeline` | About, Home | Vertical milestone list |
| `AcademicsSectionNav` | Academics | No active state |
| `PathwayCard` | Academics | Subject pathway |
| `AdmissionsEnquiryForm` | (unused) | Non-functional, component exists but not rendered |
| `AlumniSectionNav` | Alumni | Border-pill style, no active state |
| `AlumniStoryCard` | Alumni, Home | Story card |
| `StudentLifeSectionNav` | Student Life | IntersectionObserver active state |
| `PhotoGallery` | Gallery | Filter + lightbox |
| `NewsCard` | Home, News & Events | News card |
| `EventCard` | Home | Event calendar block |
| `ContactForm` | Contact | Non-functional |

---

## 6. Placeholder Policy

The project distinguishes verified data (annotated `// verified`) from placeholder data (annotated `// placeholder`).

**Verified (do not remove):** school name, motto, founded year (1912), address, phone, office hours, matric pass rate (96.4%), banking details, fee structure, mission statement, history narrative, school song, principal name (Salwa Southgate), principal's message, historic photographs.

**Must replace before launch:** HOD/staff names, SGB member names, alumni stories, news posts, events, sporting code details, club names, student leadership names, code of conduct, admissions email, social media URLs, postal code (confirm 7925), gallery image files.

**Missing image files:** Most gallery items, news posts, and alumni cards reference `.svg` and `.jpg` filenames that do not exist in the filesystem.

---

## 7. Design System

### Colours
- **Navy** (primary brand): `navy-800` (#16253a), `navy-900` (#0d1726)
- **Parchment** (backgrounds): `parchment` (#faf7f0), `parchment-100` to `300`
- **Brass** (accent/gold): `brass-500` (#b8893a), `brass-600` (#96702e)
- **Ink** (body text): `ink` (#1c2430), `ink-light`, `ink-muted`

### Typography
- Display: Fraunces (serif) — headings, pull quotes, dates
- Body: IBM Plex Sans (sans-serif) — body copy, navigation, labels

### Layout Tokens
- Max width: `80rem` via `max-w-content`
- Container: `container-page` (`mx-auto max-w-content px-5 sm:px-8 lg:px-10`)
- Section padding: `py-16 sm:py-20`
- Scroll margin: `scroll-mt-36`
- Border radius: `rounded-xs` (0.375rem)
- Shadows: `shadow-card`, `shadow-cardHover`

### CSS Utilities (globals.css)
- `.container-page`, `.eyebrow`, `.section-heading`, `.prose-body`, `.skip-link`, `.card`, `.card-hover`

### Animations
- `animate-fadeUp` — HomeHero content block only
- `transition-shadow hover:shadow-cardHover` — cards
- `transition-transform group-hover:scale-105` — images
- `prefers-reduced-motion` respected

---

## 8. Navigation

### Desktop (1024px+)
- Sticky header, scroll-aware shadow
- Primary nav: About, Admissions, Academics, Student Life, News & Events, Alumni, Contact
- All items are flat links — no dropdowns (all removed after consolidation)
- Phone number visible at md+, "Apply Now" button visible at sm+
- **No active-route indicator on current page**

### Mobile
- Hamburger opens full-screen `MobileNavDrawer` from the right
- "Call Us" and "Apply Now" in quick-action bar at top of drawer
- All nav items are flat links (no sub-menus needed)
- Overlay backdrop closes drawer; body scroll locked

### In-Page Section Navigation (4 variants, inconsistent)
1. `AboutSectionNav` — IntersectionObserver active state, pill highlight
2. `StudentLifeSectionNav` — IntersectionObserver active state, pill highlight
3. `AcademicsSectionNav` — no active state, rounded-full link style
4. `AlumniSectionNav` — no active state, border-pill style

---

## 9. Strengths

1. Smart IA consolidation — 20+ small pages merged into 7 cohesive master pages
2. Strong design token system — navy/brass/parchment palette is coherent and premium
3. Typography pairing — Fraunces + IBM Plex Sans is distinctive and readable
4. Good semantic HTML and ARIA throughout master pages
5. Accessibility foundations — skip link, focus rings, reduced-motion, Accordion ARIA
6. Well-documented placeholder strategy with `// verified` annotations
7. Consistent use of shared components across all master pages
8. Data layer fully separated from components
9. Real, verified school data already embedded throughout
10. next/image universal usage, priority on above-fold images, RSC-first

---

## 10. Weaknesses

1. Four separate section nav components with different styles and active-state logic
2. Contact and Gallery are bare 17-18 line stubs with no metadata
3. Achievements, Giving, Policies stubs use wrong container class and render only a <p> tag
4. Multiple critical 404 links: /admissions/how-to-apply, /about/our-history, /alumni/stories
5. No active-route indicator in header
6. HomeHero "Apply Now" and "Discover Our Story" both link to non-existent routes
7. NewsCard links to /news-events/news/{slug} — dynamic route does not exist
8. Gallery data references image files that do not exist in the filesystem
9. news-events/page.tsx duplicates data already defined in data/news.ts and data/events.ts
10. `any` types in Header, Footer, MobileNavDrawer despite typed NavSection/NavItem available
11. PLACEHOLDERS.md references .jpg extensions; actual files are .webp and .png
12. Contact info hardcoded in admissions/page.tsx instead of using siteConfig
13. Contact, Gallery, and all stub pages wrap content in a nested `<main>` (root layout already has `<main>`)
14. No metadata on Contact, Gallery, or any stub page
15. metadataBase is a fake placeholder domain
16. Social media links point to facebook.com homepage, not school accounts
17. hero-video.mp4 exists but is unused
18. AdmissionsEnquiryForm component exists but is never rendered
19. scroll-mt-36 on About but scroll-mt-24 referenced in AcademicsSectionNav comment
20. 6 legacy generator/fix scripts in project root

---

## 11. Technical Debt

| Severity | Item | Location |
|---|---|---|
| Critical | Broken internal links (404s) | HomeHero, app/page.tsx, Footer |
| Critical | Nested `<main>` landmark | Contact, Gallery, all stubs |
| High | Four separate section nav components | components/*/SectionNav.tsx |
| High | Non-functional forms | ContactForm, AdmissionsEnquiryForm |
| High | metadataBase is fake domain | app/layout.tsx |
| High | Missing metadata on 8 pages | All stub pages |
| Medium | `any` types in layout components | Header.tsx, Footer.tsx, MobileNavDrawer.tsx |
| Medium | Duplicate data in news-events/page.tsx | app/news-events/page.tsx |
| Medium | AdmissionsEnquiryForm unused | components/admissions/ |
| Medium | Missing favicon.ico | /public/ |
| Low | Hardcoded contact info in Admissions | app/admissions/page.tsx |
| Low | Wrong container class in stubs | All stub pages |
| Low | Outdated PLACEHOLDERS.md | PLACEHOLDERS.md |
| Low | hero-video.mp4 unused | /public/placeholders/ |
| Low | 6 legacy JS scripts in root | project root |

---

## 12. Implementation Status

### Complete
- Root layout, Header, Footer, MobileNavDrawer
- Home, About, Admissions, Academics, Student Life, Alumni, News & Events
- All shared and UI components
- PhotoGallery (filter + lightbox)
- Data layer (12 files)

### Partial
- Contact (stub — form exists, layout incomplete)
- Gallery (stub — gallery component works, page layout incomplete)
- AdmissionsEnquiryForm (built but not rendered on Admissions page)

### Missing / Stub
- /achievements and all sub-routes
- /giving and all sub-routes
- /policies
- /news-events/news/[slug] dynamic route
- not-found.tsx, error.tsx
- sitemap.xml, robots.txt

---

## Project Assessment

| Dimension | Score | Notes |
|---|---|---|
| Architecture | 9.0/10 | Excellent App Router usage, clean data separation, smart IA consolidation |
| Code Organization | 8.5/10 | Domain-grouped; stubs and legacy scripts reduce score |
| Information Architecture | 9.5/10 | Consolidation model is outstanding; section nav pattern is smart |
| Component Reuse | 8.0/10 | Shared layer is strong; four section nav variants is the main gap |
| Accessibility | 7.5/10 | Strong foundations; nested main, missing lightbox keyboard trap |
| UI Consistency | 7.0/10 | Master pages excellent; stub pages break the pattern |
| Mobile Experience | 7.0/10 | Drawer works; stub pages unresponsive |
| Performance | 8.5/10 | next/image, font optimisation, RSC-first |
| SEO Readiness | 7.5/10 | Master pages good; stubs have zero metadata |
| Production Readiness | 6.5/10 | Core pages ready for content; broken links and stubs block launch |

---

## Requirements for Production Launch

- [ ] Fix all broken internal links
- [ ] Remove nested `<main>` from Contact, Gallery, all stubs
- [ ] Add metadata exports to Contact, Gallery, all stubs
- [ ] Update metadataBase to real school domain
- [ ] Connect forms to real backend (Formspree or school CMS)
- [ ] Build out Contact page fully
- [ ] Build out Gallery page fully
- [ ] Consolidate four section nav components into one SectionNav
- [ ] Add active-route indicator to desktop header
- [ ] Replace `any` types in Header, Footer, MobileNavDrawer
- [ ] Replace all placeholder content (staff, alumni, news, events)
- [ ] Replace icon.png with final official logo
- [ ] Add favicon.ico to /public/
- [ ] Update social media URLs to real accounts
- [ ] Confirm postal code (7925)
- [ ] Confirm admissions email address
- [ ] Replace .svg and missing image references in data files
- [ ] Add not-found.tsx
- [ ] Add sitemap.xml generation
- [ ] Implement /news-events/news/[slug] dynamic route
- [ ] Complete responsive testing (375px, 390px, 768px, 1024px, 1440px)
- [ ] Validate accessibility (keyboard, screen reader, contrast)
- [ ] Render AdmissionsEnquiryForm on Admissions page
- [ ] Remove legacy generator scripts from project root
- [ ] Update PLACEHOLDERS.md
- [ ] Final cross-browser testing
