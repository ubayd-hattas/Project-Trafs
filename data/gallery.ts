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
  { id: "g7", title: "Class of the 60s", category: "History", image: "/placeholders/classof60s.webp" },
  { id: "g8", title: "Class of 64", category: "History", image: "/placeholders/classof64.webp" },
  { id: "g9", title: "Class of 69", category: "History", image: "/placeholders/classof69.webp" },
  { id: "g10", title: "Historic School Photograph", category: "History", image: "/placeholders/historic-2.webp" },
  { id: "g11", title: "Old Generation", category: "History", image: "/placeholders/old_generation.webp" },
];
