// Placeholder news content — see PLACEHOLDERS.md.
// In Phase 3 this becomes a CMS collection (NewsPost) per architecture-plan.md Section 8.

export type NewsPost = {
  slug: string;
  title: string;
  date: string; // ISO date
  category: "Academic" | "Sport" | "Culture" | "Community" | "Admin Notice";
  excerpt: string;
  body: string;
  image: string;
};

export const newsPosts: NewsPost[] = [
  {
    slug: "matric-class-2024-results",
    title: "Class of 2024 achieves a 96.4% matric pass rate",
    date: "2025-01-14",
    category: "Academic",
    excerpt: "Placeholder — replace with the real matric results announcement and top-achiever detail.",
    body: "Placeholder body copy — replace with the full announcement once supplied by the school.",
    image: "/placeholders/students.svg",
  },
  {
    slug: "open-day-2026",
    title: "Grade 8 Open Day announced",
    date: "2026-03-02",
    category: "Admin Notice",
    excerpt: "Placeholder — replace with real open day date, time and RSVP details.",
    body: "Placeholder body copy — replace with the full notice once supplied by the school.",
    image: "/placeholders/facilities.svg",
  },
  {
    slug: "cultural-evening-2026",
    title: "Annual Cultural Evening returns this term",
    date: "2026-02-18",
    category: "Culture",
    excerpt: "Placeholder — replace with real programme details and ticket information.",
    body: "Placeholder body copy — replace with the full notice once supplied by the school.",
    image: "/placeholders/assembly.svg",
  },
  {
    slug: "first-team-rugby-derby",
    title: "First team rugby wins the derby fixture",
    date: "2026-02-10",
    category: "Sport",
    excerpt: "Placeholder — replace with the real match report and scoreline.",
    body: "Placeholder body copy — replace with the full match report once supplied by the school.",
    image: "/placeholders/sports-field.svg",
  },
];
