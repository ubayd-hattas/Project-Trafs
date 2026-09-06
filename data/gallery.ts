export type GalleryItem = {
  id: string;
  title: string;
  category: "Sport" | "Culture" | "Campus" | "Community" | "History";
  image: string;
};
// Actual school images. Dates reflect archive collection, not current programmes.
export const galleryItems: GalleryItem[] = [
  {
    id: "campus",
    title: "The historic school building",
    category: "Campus",
    image: "/images/campus.webp",
  },
  {
    id: "athletics",
    title: "Athletics · 2025",
    category: "Sport",
    image: "/images/athletics-2025.webp",
  },
  {
    id: "hall",
    title: "In the school hall · 2025",
    category: "Culture",
    image: "/images/school-hall-2025.webp",
  },
  {
    id: "grade8",
    title: "Grade 8 courtyard gathering · 2025",
    category: "Community",
    image: "/images/grade-8-2025.webp",
  },
  {
    id: "entrance",
    title: "Our school in Zonnebloem",
    category: "Campus",
    image: "/images/entrance.webp",
  },
  {
    id: "class69",
    title: "Class of 1969 · Archive",
    category: "History",
    image: "/images/class-of-1969.webp",
  },
];
