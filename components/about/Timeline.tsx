import type { Milestone } from '@/data/timeline';

export function Timeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <ol className="relative border-l border-navy-800/15 pl-6 sm:pl-8">
      {milestones.map((m, i) => (
        <li key={`${m.year}-${i}`} className="mb-10 last:mb-0">
          <span
            aria-hidden
            className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-brass-500 bg-parchment-100"
          />
          <p className="eyebrow text-brass-700">{m.year}</p>
          <h3 className="mt-1 font-display text-xl text-navy-900">{m.title}</h3>
          <p className="prose-body mt-2 max-w-2xl">{m.description}</p>
        </li>
      ))}
    </ol>
  );
}
