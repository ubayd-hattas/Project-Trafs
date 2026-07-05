import { PlaceholderImage } from "@/components/shared/PlaceholderImage";

export type AlumniStory = {
  id: string;
  name: string;
  gradYear: string;
  profession: string;
  excerpt: string;
  image: string;
};

/**
 * Featured alumni story card. Full story detail pages are planned once real
 * alumni profiles are sourced from the school community.
 */
export function AlumniStoryCard({ story }: { story: AlumniStory }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xs border border-navy-800/10 bg-parchment-100 shadow-card transition-shadow hover:shadow-cardHover">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <PlaceholderImage
          src={story.image}
          alt={`${story.name} — Class of ${story.gradYear}`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg text-navy-800">{story.name}</h3>
        <p className="mt-1 text-sm font-semibold text-brass-600">
          Class of {story.gradYear} &middot; {story.profession}
        </p>
        <p className="prose-body mt-3 flex-1 text-sm">{story.excerpt}</p>
      </div>
    </div>
  );
}

