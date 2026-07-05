// Placeholder events content — see PLACEHOLDERS.md.

export type SchoolEvent = {
  id: string;
  title: string;
  date: string; // ISO date
  time?: string;
  location?: string;
  category: "Academic" | "Sport" | "Culture" | "Community" | "Admin Notice";
};

export const events: SchoolEvent[] = [
  { id: "evt-1", title: "Grade 8 Open Day", date: "2026-03-14", time: "09:00", location: "Main Hall", category: "Admin Notice" },
  { id: "evt-2", title: "Inter-house Athletics", date: "2026-03-20", time: "08:00", location: "Sports Field", category: "Sport" },
  { id: "evt-3", title: "Cultural Evening", date: "2026-03-27", time: "18:00", location: "Auditorium", category: "Culture" },
  { id: "evt-4", title: "SGB Quarterly Meeting", date: "2026-04-02", time: "17:30", location: "Boardroom", category: "Community" },
  { id: "evt-5", title: "Term 1 ends", date: "2026-04-03", category: "Academic" },
];
