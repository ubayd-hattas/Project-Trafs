# Trafalgar High School — Website Redesign
## Architecture & Planning Document

**Prepared by:** Ubayd Hattas (Head Boy, Class of 2025)
**Prepared for:** Trafalgar High School — proposal for consideration by the Principal and School Governing Body
**Status:** Independent prototype proposal, not commissioned
**Stack:** Next.js, TypeScript, Tailwind CSS

---

## 1. Overall Vision

Trafalgar High School is one of South Africa's oldest schools for people of colour, founded in 1912 out of a campaign led by Dr Abdurahman and first led by Harold Cressy — the first person of colour to earn a BA from UCT. That history is a genuine institutional asset, but the current website does not communicate it, and the site as a whole undersells the school's present-day achievements.

The redesign should reposition trafalgarhighschool.co.za from a static notice board into a **living digital front door** for the school — one that:

- Immediately communicates who Trafalgar is (a historic, high-achieving, values-driven school) within the first screen.
- Makes it effortless for parents, prospective families, learners, teachers, and alumni to find what they need in under three clicks.
- Treats the school's history and student achievement as headline content, not a buried paragraph.
- Is fast, accessible, mobile-first, and maintainable by non-technical staff going forward.
- Looks and feels like an institution that takes itself seriously in 2026 — not a site frozen in 2021.

The guiding sentence for every design decision: **"Would this make an alum proud, a parent confident, and a prospective family excited to apply?"**

---

## 2. Core Design Principles

1. **Heritage as identity, not decoration.** The 1912 founding story, the motto ("Per Angusta, Ad Augusta"), and the Cressy/Abdurahman history should be woven throughout the site, not confined to one "About" paragraph.
2. **Achievement-forward.** Matric results, subject distinctions, sporting and cultural wins, and alumni success should be visible on the homepage, not just mentioned once a year.
3. **Clarity over volume.** Every page answers one primary question. Long paragraphs are broken into scannable sections, cards, and lists.
4. **Mobile-first, parent-first.** Most visitors — especially parents checking notices — will be on a phone. Design for a 375px screen first, then scale up.
5. **Evergreen by design.** The information architecture should make it obvious what needs updating each term, so the site never again drifts three years out of date.
6. **Accessible to everyone.** WCAG 2.1 AA as a baseline, not an afterthought — this is a public school serving a diverse community, including older parents and users on low-end devices/data.
7. **Fast on low bandwidth.** Many families will access the site on mobile data. Performance budgets matter as much as aesthetics.
8. **Quiet, confident design.** Understated, professional, editorial — not flashy. A school website should feel trustworthy, not like a marketing landing page.

---

## 3. Primary User Groups and Their Goals

| User Group | Top Goals | Current Pain Points |
|---|---|---|
| **Prospective parents / Grade 8 applicants** | Understand the school's identity, admissions process, fees, deadlines, catchment | Hard to find admissions info; no clear "why choose Trafalgar" narrative |
| **Current parents** | Find notices, term dates, school hours, contact details, uniform/stationery lists, fee info | Notices buried in old blog-style posts; no calendar view |
| **Current learners** | Find past papers, timetables, extramural info, results | Past papers exist but poorly organised; no clear learner portal/section |
| **Teaching staff / SGB** | Present a professional public face; publish notices easily | Content clearly hasn't been updated in years — implies no easy CMS workflow |
| **Alumni** | Reconnect, see school news, find alumni association info, feel proud | Alumni Association is mentioned but has no real presence, stories, or way to engage |
| **Prospective donors / partners** | Understand the school's impact and how to contribute | No clear giving/partnership pathway beyond a single line |
| **Media / researchers / public** | Learn about the school's historical significance | History is understated given its national significance |

---

## 4. Complete Site Map

```
/ (Home)
├── /about
│   ├── /about/our-history            (1912 founding, Cressy, Abdurahman, timeline)
│   ├── /about/mission-vision
│   ├── /about/principal-message
│   ├── /about/staff                  (leadership, HODs, teaching staff directory)
│   ├── /about/school-governing-body
│   └── /about/facilities
├── /admissions
│   ├── /admissions/how-to-apply
│   ├── /admissions/requirements
│   ├── /admissions/fees
│   ├── /admissions/key-dates
│   └── /admissions/faq
├── /academics
│   ├── /academics/curriculum          (subjects offered per phase/stream)
│   ├── /academics/matric-results      (yearly results, distinctions, top achievers)
│   ├── /academics/past-papers
│   └── /academics/academic-support
├── /student-life
│   ├── /student-life/sport
│   ├── /student-life/culture-arts
│   ├── /student-life/clubs-societies
│   ├── /student-life/leadership       (Head Boy/Girl, Prefects, RCL)
│   └── /student-life/code-of-conduct
├── /news-events
│   ├── /news-events/news              (filterable news feed)
│   ├── /news-events/events            (calendar view)
│   └── /news-events/newsletters       (downloadable term newsletters)
├── /achievements
│   ├── /achievements/academic
│   ├── /achievements/sport-culture
│   └── /achievements/alumni-success   (alumni spotlight stories)
├── /alumni
│   ├── /alumni/association
│   ├── /alumni/stories
│   ├── /alumni/reunions-events
│   └── /alumni/give-back
├── /giving
│   ├── /giving/donate
│   └── /giving/partnerships-sponsorship
├── /gallery
├── /contact
├── /parents-portal (external link or resource hub: forms, policies, uniform list)
└── /policies (POPIA, admissions policy, code of conduct downloads)
```

**Utility pages:** 404, Search results, Privacy Policy (POPIA-aligned), Sitemap.

---

## 5. Recommended Navigation Structure

**Primary nav (desktop, max 6–7 top-level items to avoid overload):**

```
Home | About | Admissions | Academics | Student Life | News & Events | Alumni | Contact
```

- "Achievements" is not a separate top-level nav item — instead it is surfaced contextually: recent achievements live on the Home page, full archives live under Academics (academic) and Student Life (sport/culture), cross-linked from a homepage "Achievements" section.
- "Giving/Donate" appears as a persistent secondary call-to-action button in the header (not a full nav item), e.g. a pill button "Support Trafalgar" — keeps fundraising visible without cluttering primary nav.

**Header behaviour:**
- Sticky header on scroll (shrinks slightly), always shows logo, primary nav, and a search icon.
- Mobile: hamburger menu opening a full-screen overlay with accordion-style sub-navigation, plus a persistent "Call Us" and "Support Trafalgar" quick action at the top of the mobile menu.

**Footer nav:** mirrors primary nav with the addition of Policies, Sitemap, and Alumni Giving — full detail in Section 16.

**Breadcrumbs:** used on all pages two levels deep or more (e.g. Home / About / Our History) — aids orientation and SEO.

---

## 6. Homepage — Section by Section

1. **Hero section**
   - Full-width image/video of the school (real, current, mask-free photography) with overlay.
   - School crest, name, and motto ("Per Angusta, Ad Augusta").
   - One-line identity statement, e.g. "Cape Town's historic school for excellence since 1912."
   - Primary CTAs: "Apply Now" and "Discover Our Story."

2. **Quick stats strip**
   - Founded 1912 · Matric pass rate (latest year) · Years of heritage · Notable alumni count — small animated counters, builds instant credibility.

3. **Welcome message (condensed)**
   - 2–3 sentence excerpt from Principal's message, "Read more" link to full About page. Not the full paragraph dump currently on the homepage.

4. **Latest news carousel/grid**
   - 3–4 most recent news cards (image, title, date, excerpt), "View All News" CTA. Pulled from CMS, auto-sorted by date, so it never goes stale.

5. **Achievements spotlight**
   - Rotating showcase: recent matric top achievers, sporting wins, cultural achievements, olympiad/competition results. Visual, badge-style, celebratory.

6. **Our history teaser**
   - Short, powerful narrative block on the 1912 founding, Cressy and Abdurahman, with a timeline preview graphic and "Explore Our History" CTA.

7. **Academics & admissions strip**
   - Two/three-column cards: "Why Trafalgar" / "How to Apply" / "Curriculum" — direct people into deeper journeys.

8. **Student life gallery**
   - Visual grid: sport, culture, clubs — real, recent, diverse photography.

9. **Alumni spotlight**
   - Rotating feature of 1–2 alumni success stories with photo, name, grad year, current pursuit/achievement. Links to full Alumni Stories page.

10. **Upcoming events**
    - Compact calendar-style widget of the next 3–5 events with dates, replacing the current plain text list.

11. **Community / giving CTA**
    - "Giving is Receiving" reframed as a proper call-to-action band: join the Alumni Association, donate, volunteer.

12. **Contact & location strip**
    - Address, phone, embedded map, school hours — always accessible without hunting.

13. **Footer** (see Section 16).

---

## 7. Recommended Pages (Full List with Purpose)

| Page | Purpose |
|---|---|
| Home | Identity, credibility, navigation hub |
| About / Our History | Full founding story, timeline (1912–present), notable historical figures |
| About / Mission & Vision | Values, motto explained, ethos |
| About / Principal's Message | Full welcome letter |
| About / Staff Directory | Photos, names, subjects/roles for leadership + HODs (with care re: privacy for junior staff) |
| About / School Governing Body | SGB members, meeting minutes/AGM notices if applicable |
| About / Facilities | Campus, labs, library, sports facilities with photography |
| Admissions / How to Apply | Step-by-step process, downloadable forms |
| Admissions / Requirements | Entry criteria, catchment/feeder info |
| Admissions / Fees | Fee structure, payment options, financial aid info |
| Admissions / Key Dates | Application windows, open days |
| Admissions / FAQ | Common questions answered |
| Academics / Curriculum | Subjects per grade/stream, CAPS alignment |
| Academics / Matric Results | Year-by-year pass rates, distinctions, top achievers — archived by year |
| Academics / Past Papers | Organised by grade/subject, searchable/filterable |
| Academics / Academic Support | Tutoring, extra classes, learner support services |
| Student Life / Sport | Codes offered, fixtures, results, coaches |
| Student Life / Culture & Arts | Choir, drama, debate, music etc. |
| Student Life / Clubs & Societies | Full list with descriptions |
| Student Life / Leadership | Head Boy/Girl, Prefects, RCL structure and current holders |
| Student Life / Code of Conduct | Downloadable policy |
| News & Events / News | Filterable/searchable news feed with categories |
| News & Events / Events Calendar | Full term calendar, downloadable/exportable |
| News & Events / Newsletters | Archive of term newsletters (PDF) |
| Achievements / Academic | Olympiad results, subject awards, top achievers archive |
| Achievements / Sport & Culture | Trophies, provincial/national representation |
| Achievements / Alumni Success | Notable alumni across generations |
| Alumni / Association | What it is, how to join, committee |
| Alumni / Stories | Full profiles/interviews |
| Alumni / Reunions & Events | Upcoming alumni gatherings |
| Alumni / Give Back | Mentorship, donations, guest speaking opportunities |
| Giving / Donate | Clear giving pathways, banking details, impact statement |
| Giving / Partnerships & Sponsorship | For businesses/organisations |
| Gallery | Categorised photo/video galleries |
| Contact | Form, map, phone, email, office hours |
| Policies | POPIA, admissions policy, code of conduct, downloadable PDFs |

---

## 8. Information Architecture

**Model:** Hybrid — topic-based primary structure (About / Admissions / Academics / etc.) with a cross-cutting **tag and date system** for News, Achievements, and Events, so content can surface in multiple contexts without duplication.

**Content types (CMS collections):**
- `NewsPost` — title, date, category, excerpt, body, cover image, tags
- `Event` — title, date/time, location, category, recurring flag
- `Achievement` — learner/team name, category (academic/sport/culture), year, description, image
- `AlumniStory` — name, grad year, current role, story body, photo
- `StaffMember` — name, role, subject/department, photo, bio (optional)
- `Document` — title, category (policy/newsletter/past paper), file, grade/subject tags, year

**Taxonomy:**
- Category: Academic / Sport / Culture / Community / Alumni / Admin Notice
- Grade level tags (8–12) for past papers and academic content
- Year tags for archiving (results, achievements, newsletters)

**URL structure:** clean, hierarchical, human-readable — e.g. `/academics/matric-results/2025`, `/news-events/news/matric-class-of-2025-results`.

**Search:** site-wide search (indexing news, documents, staff, pages) — critical given how much content (past papers, policies) is document-based.

---

## 9. Content Strategy

1. **Editorial calendar tied to the school term.** Every term: update term dates, at least 2 news posts, refresh homepage achievements. Prevents the "last updated 2021" problem recurring.
2. **Photography refresh.** Full new photography set — no COVID-era masks, current uniforms, current facilities, candid and posed shots, diverse representation of learners and staff. This alone will make the biggest visible impact.
3. **Achievement pipeline.** Simple internal process: HODs/coaches submit achievements via a short form → added to Achievements collection → auto-surfaces on homepage and relevant subpages. Removes bottleneck of one webmaster.
4. **History as flagship content.** Commission (or Ubayd co-develop) a proper "Our History" long-form page — timeline component, archive photos if available, quotes from Cressy/Abdurahman era, links to matric class reunions.
5. **Alumni story pipeline.** Start with 5–6 profiles (this can include the author's own journey as a template) and grow quarterly. Strong SEO value and community-building value.
6. **Governance/compliance content.** POPIA-compliant privacy policy, downloadable policies — currently entirely absent, a real institutional risk gap for a modern site handling parent/learner data via forms.
7. **Content ownership.** Recommend a designated content editor (could rotate between admin staff, marketing-inclined teacher, or RCL/Head Boy-Girl involvement) with a simple CMS (see Section 17) so updates don't require a developer.

---

## 10. Mobile-First UX Recommendations

- Design and build breakpoints in this order: 375px → 768px → 1024px → 1440px.
- **Thumb-friendly navigation:** hamburger menu with large tap targets (min 44×44px), sticky "Call School" and "Apply Now" quick actions accessible without scrolling.
- **Progressive disclosure:** long content (e.g. history, policies) uses expandable sections/accordions on mobile rather than long scroll walls.
- **Image optimisation:** responsive images (Next.js `<Image>`), served in modern formats (AVIF/WebP), lazy-loaded below the fold.
- **Forms:** single-column, large inputs, native mobile input types (tel, email) for admissions/contact forms.
- **Document access:** past papers/newsletters open in-browser PDF viewer with a clear "Download" button, not forced downloads.
- **Offline resilience:** consider a lightweight service worker/PWA manifest so core info (contact, term dates) is available even on poor connectivity — relevant given the community context.
- **Data-conscious design:** avoid autoplay video/heavy carousels on mobile; use static hero image with optional video on desktop only.

---

## 11. Accessibility Recommendations

- Target **WCAG 2.1 AA** minimum across the site.
- Full keyboard navigability; visible focus states on all interactive elements.
- Semantic HTML structure (proper heading hierarchy, `<nav>`, `<main>`, `<footer>`, landmark regions) for screen reader users.
- Alt text required for all images at CMS level (mandatory field, not optional).
- Colour contrast ratio minimum 4.5:1 for body text, 3:1 for large text — verify school brand colours pass this before finalising palette.
- Do not rely on colour alone to convey meaning (e.g. category tags should have icons/text, not just colour).
- Captions/transcripts for any video content (e.g. principal's welcome video if added).
- Skip-to-content link for keyboard/screen reader users.
- Forms: proper `<label>` associations, clear error messaging, no placeholder-only labels.
- Respect `prefers-reduced-motion` for all animations (see Section 15).
- Downloadable documents (PDFs) should be screen-reader accessible where feasible (tagged PDFs for key policy documents).

---

## 12. SEO Recommendations

- **Technical foundation:** Next.js App Router with server-side rendering/static generation for all content pages — fast, crawlable, no client-side-only rendering of important content.
- **Metadata:** unique, descriptive `<title>` and meta description per page; Open Graph + Twitter card tags for social sharing (news posts, achievements especially).
- **Structured data (JSON-LD):**
  - `EducationalOrganization` schema on homepage (name, founding date 1912, address, logo, sameAs social links).
  - `Event` schema for events calendar.
  - `NewsArticle` schema for news posts.
  - `BreadcrumbList` schema site-wide.
- **XML sitemap** auto-generated and submitted to Google Search Console.
- **robots.txt** properly configured.
- **Favicon and full browser branding** — currently missing; add full favicon set (including apple-touch-icon, manifest icons for PWA).
- **Local SEO:** Google Business Profile alignment (address, hours, phone matching site exactly), embedded map with proper markup.
- **Historical/heritage SEO angle:** the "oldest school for people of colour in South Africa" narrative is a genuinely unique, high-value SEO asset — a dedicated, well-optimised History page can rank for heritage/education-history searches, not just "schools in Zonnebloem/Cape Town."
- **Performance as SEO:** Core Web Vitals (LCP, CLS, INP) targeted in the green zone — directly impacts Google ranking.
- **Internal linking:** cross-link achievements ↔ academics ↔ alumni stories to strengthen topical authority.
- **Image SEO:** descriptive filenames and alt text (also serves accessibility).

---

## 13. Suggested Visual Style

- **Tone:** heritage-meets-modern — think "established institution," not "startup." Editorial, confident, restrained.
- **Colour palette:** rooted in the school's existing crest/uniform colours, refined into a primary palette (deep navy or maroon — verify against crest) + a neutral base (off-white, charcoal) + one accent colour for CTAs. Avoid introducing colours unrelated to existing school identity — continuity matters for an institution this old.
- **Typography:**
  - A serif or slab-serif display typeface for headings (evokes heritage, gravitas — e.g. a font in the spirit of Source Serif, Lora, or Fraunces).
  - A clean, highly legible sans-serif for body text (e.g. Inter, IBM Plex Sans) — optimised for accessibility and screen reading.
  - Clear type scale with generous line-height for readability.
- **Imagery:** authentic, current photography over stock imagery wherever possible. Documentary-style candid shots of learners and campus life, complemented by a small curated set of professionally shot "hero" images.
- **Spacing:** generous white space, consistent vertical rhythm (8px baseline grid), no cramped text blocks.
- **Iconography:** simple, consistent line-icon set (e.g. Lucide) for categories, contact info, navigation.
- **Crest & motto:** treated as a genuine brand mark — used consistently in header, footer, and as a subtle watermark/motif on key pages (e.g. History page).

---

## 14. Component Library

Reusable components to define upfront for consistent implementation:

**Layout & Navigation**
- `Header` (sticky, responsive, mega-menu-capable for Academics/Admissions)
- `MobileNavDrawer`
- `Breadcrumbs`
- `Footer`

**Content Display**
- `HeroSection` (image/video background, headline, CTA — configurable per page)
- `NewsCard` (image, category tag, date, title, excerpt)
- `EventCard` / `EventCalendar` widget
- `AchievementBadgeCard` (learner/team, achievement, year, category icon)
- `AlumniStoryCard` (photo, name, grad year, quote/excerpt)
- `StaffCard` (photo, name, role, department)
- `Timeline` component (for Our History — year markers, milestone descriptions, optional images)
- `StatCounter` (animated number, e.g. "113 Years")
- `DocumentListItem` (PDF icon, title, file size, download button — for past papers/policies)
- `Testimonial` / `QuoteBlock`
- `PhotoGallery` (categorised, lightbox-enabled)

**Interactive / Forms**
- `ContactForm`
- `AdmissionsEnquiryForm`
- `NewsletterSignupForm`
- `SearchBar` / `SearchResultsList`
- `FilterableGrid` (used for News, Past Papers, Achievements, Gallery — filter by category/year/grade)
- `Accordion` (FAQ, mobile content disclosure)
- `Tabs` (e.g. switching between grades on Curriculum page)

**Feedback/Utility**
- `Toast` / `Alert` (form success/error states)
- `Pagination`
- `Badge` / `Tag`
- `Button` (primary, secondary, ghost variants)
- `SkeletonLoader` (for perceived performance during data fetch)

All components built with Tailwind design tokens tied to the defined type scale and colour palette, ensuring visual consistency without one-off styling.

---

## 15. Suggested Animations & Interactions

Principle: **subtle, purposeful, professional** — animation should aid comprehension, never distract from a school's dignity.

- **Micro-interactions:** gentle hover states on cards (slight elevation/shadow shift), button hover colour transitions (150–200ms ease).
- **Scroll-triggered reveals:** homepage sections fade/slide in subtly on scroll (once, not repeatedly) — used sparingly, not on every element.
- **Animated stat counters:** numbers count up once when scrolled into view (founding year, pass rate, etc.).
- **Timeline interaction:** on the History page, timeline milestones can expand on click/tap with a smooth height transition.
- **Image carousels:** smooth crossfade or slide transitions for news/achievements carousels, with pause-on-hover and full manual controls (never trap the user in autoplay).
- **Page transitions:** minimal — a subtle fade between route changes is enough; avoid heavy route-transition animations that slow perceived performance.
- **Sticky header shrink:** header condenses slightly on scroll for more content real estate.
- **Reduced motion respect:** all animation wrapped to honour `prefers-reduced-motion: reduce` — disable non-essential motion for users who request it.
- **No gimmicks:** avoid parallax overuse, spinning elements, or anything that reads as "trying too hard" — the design should feel like a well-run institution, not a design portfolio piece.

---

## 16. Suggested Footer Structure

A four/five-column footer, consistent across all pages:

**Column 1 — Identity**
- School crest + name
- Motto
- Short one-line mission statement
- Physical address, phone, email

**Column 2 — Quick Links**
- About · Admissions · Academics · Student Life · Contact

**Column 3 — Resources**
- News & Events · Past Papers · Newsletters · Policies · Sitemap

**Column 4 — Community**
- Alumni Association · Give Back / Donate · Careers (if applicable) · Social media icons (Facebook/Instagram if active)

**Column 5 (optional, or merged into Column 1) — Compliance**
- Privacy Policy (POPIA) · Terms of Use

**Bottom bar:**
- Copyright line: `© [Year] Trafalgar High School. All rights reserved.`
- Optional small credit line (see Section 18 discussion below) — kept visually minimal, small font, muted colour, bottom-right or centered beneath copyright.

---

## 17. Long-Term Maintainability Recommendations

1. **Headless CMS integration.** Rather than hard-coding content, connect the Next.js frontend to a headless CMS (e.g. Sanity, Payload CMS, or even a well-structured Notion/Airtable-backed setup for a lower-budget option) so non-technical staff can update news, events, achievements, and staff listings without developer involvement.
2. **Role-based content workflow.** Designate a content owner (admin staff member or teacher) with a simple, documented process for posting news/events each term — remove single-point-of-failure risk.
3. **Version control & deployment pipeline.** Host on Vercel (natural fit for Next.js) with GitHub-based version control — enables safe rollbacks, preview deployments for review before publishing, and no dependency on one person's machine.
4. **Documented component library / style guide.** A living style guide (colours, type scale, components) so future contributors (developers or designers) maintain visual consistency even after the original builder moves on.
5. **Automated content archiving.** Matric results, newsletters, and achievements auto-archive by year (rather than being manually pruned or left to rot), keeping historical record intact and current content fresh.
6. **Scheduled content audits.** A termly checklist (update term dates, add achievements, publish newsletter, review "latest news" freshness) — a lightweight recurring task, not a redesign every 5 years.
7. **Backup & handover documentation.** Full technical handover document (hosting, domain, CMS credentials, how-to guides) so the school is never dependent on one developer indefinitely — protects the school's interests as much as it protects the author's credibility.
8. **Performance monitoring.** Lightweight analytics (e.g. Plausible or GA4) and Core Web Vitals monitoring via Vercel Analytics to catch regressions early.

---

## 18. Phased Implementation Roadmap

**Phase 0 — Discovery & Content Audit**
- Interview principal, admin staff, a few HODs/coaches for real requirements and available content (photos, historical archives, past papers, policies).
- Content inventory: what exists, what's missing, what needs rewriting.
- Finalise sitemap and IA with stakeholder input.

**Phase 1 — Foundations**
- Next.js + TypeScript + Tailwind project scaffold.
- Design tokens (colour, type, spacing) finalised.
- Core layout components: Header, Footer, Nav, base page templates.
- Homepage static structure built with placeholder content.

**Phase 2 — Core Content Pages**
- About section (History, Mission, Principal's Message, Staff).
- Admissions section (How to Apply, Fees, Key Dates, FAQ).
- Contact page with working form.

**Phase 3 — Dynamic Content Systems**
- CMS integration for News, Events, Achievements, Alumni Stories.
- Academics section incl. Matric Results archive and Past Papers library.
- Search functionality.

**Phase 4 — Community & Engagement**
- Student Life section (Sport, Culture, Clubs, Leadership).
- Alumni section (Association, Stories, Give Back).
- Gallery.

**Phase 5 — Polish & Compliance**
- Full accessibility audit (automated + manual screen reader testing).
- SEO implementation (structured data, sitemap, metadata pass).
- Performance optimisation (image pipeline, Core Web Vitals pass).
- Policies/POPIA privacy page finalised with school's input (legal review recommended).

**Phase 6 — Content Population & Photography**
- New photography shoot coordinated with the school (current learners, no COVID-era imagery).
- Populate real achievements, staff bios, alumni stories (seed with 5–6 to start).

**Phase 7 — Review & Handover Prep**
- Internal QA across devices/browsers.
- Present working prototype to principal/SGB for feedback.
- Prepare handover documentation and CMS training materials in parallel, so the school can move immediately if they choose to adopt it.

**Phase 8 — Launch (if adopted)**
- DNS/domain cutover, monitoring setup, staff CMS training session, 30-day post-launch support window.

---

## 19. On the Question of a Footer Credit

**The question:** Would it be appropriate to include a footer credit such as *"Website designed and developed by Ubayd Hattas (Head Boy of 2025)"* linking to a personal portfolio?

This deserves a genuinely balanced answer rather than a reflexive yes or no, because the right approach depends on your relationship with the school and what you're optimising for.

**Is it professional?**
A small, discreet developer credit is a completely normal convention in web development — many agencies and freelancers include a small "Built by X" line in the footer, and plenty of schools and NGOs allow it. It is not inherently unprofessional. What matters is *scale and placement*: a tiny, muted line in the footer bottom bar reads as professional courtesy; anything larger, bolded, or positioned prominently would read as self-promotion at the institution's expense, which would undercut the generosity of the gesture. Given this is presented as a gift/proposal rather than a paid engagement, restraint here actually strengthens your credibility — it signals you did this for the school, not for the credit.

**Do schools commonly allow this?**
It varies widely. Public schools, especially ones with a Governing Body and formal communications/branding oversight, may have policies (explicit or unspoken) about what appears on official school communications, since the site is effectively part of the school's public identity and, in some cases, government-linked branding. Many schools will happily allow a small credit, especially for a former Head Boy who did the work pro bono — but it is the school's call, not a default right. It should be *requested*, not assumed, and ideally agreed upon after they've seen and liked the prototype, not as a precondition.

**Would it benefit your portfolio?**
Yes, meaningfully — but the *link and case study matter more than the footer line itself*. A live link on a real, publicly reputable institution's site is a good trust signal, but the primary value for your portfolio will come from being able to say "I independently redesigned my old school's website, presented it to the principal, and it was adopted" as a case study on your own site (ubayd.me) and CV — with before/after screenshots, your process, and outcome. That story is portable and permanent, whereas a footer link is contingent on the school never redesigning the site again (which will eventually happen) and could be removed at any time.

**Does it help SEO?**
Modestly, and only if it's a genuine `<a>` link (not JS-only) and the school's domain has reasonable authority. In practice:
- The SEO value of one footer backlink from a single school website is small in absolute terms — it's one link, on a modest-authority education-sector domain.
- It's a legitimate, relevant, non-spammy backlink (real work for a real institution), which is a *positive* signal, but not a decisive one.
- It will not meaningfully move rankings on its own; treat it as a nice-to-have, not a strategy.

**Recommended approach (balanced):**
1. **Do not lead with the ask.** Present the redesign as a gift first. Let the work speak.
2. **If they love it and want to adopt it, then raise it** — frame it as standard practice for developer credit, not a condition of the gift.
3. **Keep it minimal and tasteful**, e.g. in the footer bottom bar, small and muted:
   `Website by Ubayd Hattas, Class of 2025` — linked, understated, no bold, no logo, positioned after the copyright line rather than before it.
4. **Avoid over-personalising the title** — "Head Boy of 2025" in a permanent footer credit can read as slightly self-congratulatory once you're no longer a learner there; "Class of 2025" or simply your name achieves the same alumni credibility more gracefully. Save "Head Boy, Top Achiever, first into UCT" framing for your own portfolio case study and for the in-person pitch to the principal — not for the live school site itself.
5. **Offer an opt-out-friendly alternative** if the school is hesitant: a dedicated but low-key **"Site Credits" or "Acknowledgements" page** (linked from the footer) that credits you, thanks any contributors/photographers, and can include a slightly longer, warmer note about the project — this satisfies the same need without occupying permanent real estate on every page, and schools are typically far more comfortable with this than a persistent homepage-visible credit.
6. **Build the portfolio case study regardless.** Whatever the school decides about the footer, document the full project (problem, process, prototype, outcome) on ubayd.me and/or GitHub — this is the asset that will actually do the most for you long-term, independent of what the school chooses to keep live.

**Bottom line:** A small, tasteful footer credit is reasonable to request and reasonably likely to be granted given your relationship with the school — but it should be offered as an optional, discreet courtesy after the work has won them over, not assumed upfront, and it should not be where most of the portfolio value is expected to come from. The stronger, more durable asset is the case study and story you build around the project yourself.

---

*End of document.*
