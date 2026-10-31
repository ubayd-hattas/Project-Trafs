export type NavItem = {
  label: string;
  href: string;
};

// Each section is one long page with in-page jump links (see SectionNav),
// so the menu has no dropdowns.
export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "Student life", href: "/student-life" },
  { label: "News & dates", href: "/news-events" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

// Shown in the mobile menu and footer, not the desktop bar.
export const secondaryNav: NavItem[] = [
  { label: "For parents", href: "/parents-portal" },
  { label: "Photo gallery", href: "/gallery" },
  { label: "Policies and documents", href: "/policies" },
];

export const footerColumns: { title: string; links: NavItem[] }[] = [
  {
    title: "The school",
    links: [
      { label: "About and history", href: "/about" },
      { label: "Admissions", href: "/admissions" },
      { label: "Academics", href: "/academics" },
      { label: "Student life", href: "/student-life" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "News and term dates", href: "/news-events" },
      { label: "For parents", href: "/parents-portal" },
      { label: "Alumni", href: "/alumni" },
      { label: "Photo gallery", href: "/gallery" },
    ],
  },
];
