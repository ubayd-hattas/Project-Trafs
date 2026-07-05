// Placeholder achievements content — see PLACEHOLDERS.md.

export type Achievement = {
  id: string;
  name: string;
  category: "Academic" | "Sport" | "Culture";
  year: number;
  description: string;
};

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    name: "Top achiever, Class of 2024",
    category: "Academic",
    year: 2024,
    description: "Placeholder — replace with the real top achiever's name and distinction count.",
  },
  {
    id: "ach-2",
    name: "First XV Rugby — Regional Champions",
    category: "Sport",
    year: 2025,
    description: "Placeholder — replace with the real competition name and result.",
  },
  {
    id: "ach-3",
    name: "Debating Team — Provincial Finalists",
    category: "Culture",
    year: 2025,
    description: "Placeholder — replace with the real competition name and result.",
  },
];
