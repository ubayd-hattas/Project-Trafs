export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavSection = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const primaryNav: NavSection[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Admissions",
    href: "/admissions",
  },
  {
    // Academics was consolidated from four separate routes (Curriculum,
    // Matric Results, Past Papers, Academic Support) into one long-form
    // page on 3 July 2026. In-page navigation between those topics is now
    // handled by <AcademicsSectionNav> on the page itself, so this no
    // longer needs a mega-menu dropdown — see architecture-plan.md decision
    // note added alongside this change.
    label: "Academics",
    href: "/academics",
  },
  {
    // Student Life was consolidated from five separate routes (Sport,
    // Culture & Arts, Clubs & Societies, Leadership, Code of Conduct) into
    // one long-form page on 5 July 2026. In-page navigation between those
    // topics is now handled by <StudentLifeSectionNav> on the page itself,
    // so this no longer needs a mega-menu dropdown — see architecture-plan.md
    // decision note added alongside this change (same pattern as Academics).
    label: "Student Life",
    href: "/student-life",
  },
  {
    // News, Events and Newsletters were consolidated from three separate
    // routes into one long-form communications-hub page on 5 July 2026
    // (replacing the old "What's Happening" yearly photo archive concept
    // entirely). In-page anchors (#latest-news, #newsletter-archive) are
    // used for deep links instead of a mega-menu dropdown — same pattern
    // as Academics and Student Life.
    label: "News & Events",
    href: "/news-events",
  },
  {
    // Alumni was consolidated from four separate routes (Association,
    // Stories, Reunions & Events, Give Back) into one long-form page on
    // 5 July 2026 — the real site had almost no alumni content beyond
    // banking details, so four mostly-empty routes added friction without
    // adding substance. In-page navigation is handled by
    // <AlumniSectionNav> on the page itself, same pattern as Academics
    // and Student Life. Alumni Stories is seeded as a section (not a
    // route) with a placeholder "View All Alumni Stories" affordance —
    // it's the one part of this page expected to outgrow a single
    // section once real profiles exist, similar to how Matric Results
    // was seeded inside Academics.
    label: "Alumni",
    href: "/alumni",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const achievementsNav: NavItem[] = [
  { label: "Academic Achievements", href: "/achievements/academic" },
  { label: "Sport & Culture", href: "/achievements/sport-culture" },
  { label: "Alumni Success", href: "/achievements/alumni-success" },
];

export const footerColumns: { title: string; links: NavItem[] }[] = [
  {
    title: "Quick Links",
    links: [
      { label: "About", href: "/about" },
      { label: "Admissions", href: "/admissions" },
      { label: "Academics", href: "/academics" },
      { label: "Student Life", href: "/student-life" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "News & Events", href: "/news-events#latest-news" },
      { label: "Past Papers", href: "/academics#past-papers" },
      { label: "Newsletters", href: "/news-events#newsletter-archive" },
      { label: "Policies", href: "/policies" },
      { label: "Sitemap", href: "/sitemap-page" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Alumni Association", href: "/alumni#association" },
      { label: "Give Back / Donate", href: "/giving/donate" },
      { label: "Partnerships & Sponsorship", href: "/giving/partnerships-sponsorship" },
      { label: "Gallery", href: "/gallery" },
      { label: "Parents' Portal", href: "/parents-portal" },
    ],
  },
];
