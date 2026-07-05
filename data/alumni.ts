// Placeholder alumni content — see PLACEHOLDERS.md.

export type AlumniStory = {
  slug: string;
  name: string;
  gradYear: number;
  currentRole: string;
  excerpt: string;
  body: string;
  image: string;
};

export const alumniStories: AlumniStory[] = [
  {
    slug: "alumni-story-1",
    name: "Placeholder Name",
    gradYear: 2010,
    currentRole: "Placeholder current role / achievement",
    excerpt: "Placeholder — replace with a real, consented alumni success story.",
    body: "Placeholder body copy — replace with the full interview or profile once supplied.",
    image: "/placeholders/students-collaborating.svg",
  },
  {
    slug: "alumni-story-2",
    name: "Placeholder Name",
    gradYear: 2005,
    currentRole: "Placeholder current role / achievement",
    excerpt: "Placeholder — replace with a real, consented alumni success story.",
    body: "Placeholder body copy — replace with the full interview or profile once supplied.",
    image: "/placeholders/students-collaborating.svg",
  },
];
