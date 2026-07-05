import { CalendarDays, Clock, MapPin } from "lucide-react";
import type { SchoolEvent } from '@/data/events';

export function EventCard({ event }: { event: SchoolEvent }) {
  const date = new Date(event.date);
  const day = date.toLocaleDateString("en-ZA", { day: "numeric" });
  const month = date.toLocaleDateString("en-ZA", { month: "short" });

  return (
    <div className="flex gap-4 rounded-xs border border-navy-800/10 bg-parchment-100 p-4 shadow-card">
      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xs bg-navy-800 text-parchment-100">
        <span className="text-lg font-display leading-none">{day}</span>
        <span className="text-[10px] uppercase tracking-wider">{month}</span>
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-sm leading-snug text-navy-800">{event.title}</h3>
        <div className="mt-1.5 space-y-1 text-xs text-ink-muted">
          {event.time ? (
            <p className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /> {event.time}
            </p>
          ) : null}
          {event.location ? (
            <p className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /> {event.location}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function EventCalendarIcon() {
  return <CalendarDays aria-hidden="true" className="h-4 w-4" />;
}
