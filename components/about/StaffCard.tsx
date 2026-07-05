import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import type { StaffMember } from '@/data/staff';

export function StaffCard({ member }: { member: StaffMember }) {
  return (
    <div className="group overflow-hidden rounded-xs border border-navy-800/10 bg-parchment-100 shadow-card transition-shadow hover:shadow-cardHover">
      <div className="relative aspect-[4/3] overflow-hidden bg-parchment-300">
        <PlaceholderImage
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-4">
        <p className="font-display text-lg text-navy-900">{member.name}</p>
        <p className="mt-1 text-sm text-ink-muted">
          {member.role}
          {member.department ? ` · ${member.department}` : ""}
        </p>
      </div>
    </div>
  );
}

