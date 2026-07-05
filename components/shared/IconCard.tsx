import type { LucideIcon } from "lucide-react";

export type IconCardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/**
 * Generic icon/title/description card. Introduced for the Alumni "Ways to
 * Give Back" grid, but intentionally generic (not alumni-specific) so it
 * can be reused for similar card grids elsewhere on the site (e.g. Giving,
 * Student Life) rather than spawning another one-off card component.
 */
export function IconCard({ item }: { item: IconCardItem }) {
  const Icon = item.icon;
  return (
    <div className="flex h-full flex-col rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card transition-shadow hover:shadow-cardHover">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-800/5 text-brass-600">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-lg text-navy-800">{item.title}</h3>
      <p className="prose-body mt-2 text-sm">{item.description}</p>
    </div>
  );
}
