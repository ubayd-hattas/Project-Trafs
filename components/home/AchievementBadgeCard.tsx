import { Badge } from '@/components/ui/Badge';
import type { Achievement } from '@/data/achievements';

export function AchievementBadgeCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card transition-shadow hover:shadow-cardHover">
      <div className="flex items-center justify-between gap-3">
        <Badge tone="brass">{achievement.category}</Badge>
        <span className="text-sm font-semibold text-ink-muted">{achievement.year}</span>
      </div>
      <h3 className="mt-4 font-display text-lg text-navy-900">{achievement.name}</h3>
      <p className="prose-body mt-2 text-sm">{achievement.description}</p>
    </div>
  );
}
