import { ArrowUpRight } from "lucide-react";

export type ExternalResource = {
  name: string;
  description: string;
  href: string;
};

/**
 * Card for linking out to a trusted third-party resource (e.g. past-paper
 * sites). Always opens in a new tab with rel="noopener noreferrer", and
 * never renders any content scraped/copied from the destination — name +
 * short original description only, matching the "convenient links, not
 * copied content" instruction for the Past Papers section.
 */
export function ResourceLinkCard({ resource }: { resource: ExternalResource }) {
  return (
    <a
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-4 rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card transition-shadow hover:shadow-cardHover"
    >
      <div>
        <h3 className="font-display text-lg text-navy-800">{resource.name}</h3>
        <p className="prose-body mt-2 text-sm">{resource.description}</p>
        <span className="sr-only"> (opens in a new tab)</span>
      </div>
      <ArrowUpRight
        className="mt-1 h-5 w-5 shrink-0 text-brass-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </a>
  );
}
