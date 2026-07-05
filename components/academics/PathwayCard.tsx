import type { LucideIcon } from "lucide-react";

export type Pathway = {
  name: string;
  icon: LucideIcon;
  description: string;
  subjects: string[];
  /** Optional caveat, e.g. flagging offerings that still need confirmation. */
  note?: string;
};

/**
 * Card used on the Academics page to present FET subject choices as grouped
 * "pathways" (STEM / Commerce / Humanities / Creative & Practical) rather
 * than a flat subject list. Reuses the existing card visual language
 * (rounded-xs border, parchment fill, card shadow) already established by
 * the site's shared components — see PageHero / Badge for the same tokens.
 */
export function PathwayCard({ pathway }: { pathway: Pathway }) {
  const Icon = pathway.icon;

  return (
    <div className="flex h-full flex-col rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card transition-shadow hover:shadow-cardHover">
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-800/5 text-brass-600"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="font-display mt-4 text-lg text-navy-800">{pathway.name}</h3>
      <p className="prose-body mt-2 text-sm">{pathway.description}</p>

      <ul className="prose-body mt-4 space-y-1.5 text-sm">
        {pathway.subjects.map((subject) => (
          <li key={subject} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass-600" aria-hidden="true" />
            <span>{subject}</span>
          </li>
        ))}
      </ul>

      {pathway.note ? (
        <p className="prose-body mt-4 text-xs italic text-ink-muted">{pathway.note}</p>
      ) : null}
    </div>
  );
}
