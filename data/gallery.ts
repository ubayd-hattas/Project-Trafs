// Placeholder gallery content — see PLACEHOLDERS.md.

export type GalleryItem = {
  id: string;
  title: string;
  category: "Sport" | "Culture" | "Campus" | "Community" | "History";
  image: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "First team rugby", category: "Sport", image: "/placeholders/sports-field.svg" },
  { id: "g2", title: "Choir rehearsal", category: "Culture", image: "/placeholders/students-collaborating.svg" },
  { id: "g3", title: "Science laboratory", category: "Campus", image: "/placeholders/science-lab.svg" },
  { id: "g4", title: "Assembly hall", category: "Campus", image: "/placeholders/assembly.svg" },
  { id: "g5", title: "Open day", category: "Community", image: "/placeholders/students.svg" },
  { id: "g6", title: "Library reading corner", category: "Campus", image: "/placeholders/gallery-2.svg" },
  { id: "g7", title: "Historic school photograph", category: "History", image: "/placeholders/historic-1.svg" },
  { id: "g8", title: "Harold Cressy, first principal", category: "History", image: "/placeholders/historic-2.svg" },
];
