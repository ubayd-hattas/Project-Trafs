import { termDates, termDatesTitle } from "@/data/termDates";
import { siteConfig } from "@/data/siteConfig";

const day = new Intl.DateTimeFormat("en-ZA", { day: "numeric", timeZone: "UTC" });
const month = new Intl.DateTimeFormat("en-ZA", { month: "short", timeZone: "UTC" });
const weekday = new Intl.DateTimeFormat("en-ZA", { weekday: "long", timeZone: "UTC" });

function todayInCapeTown(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Johannesburg" }).format(
    new Date(),
  );
}

export function KeyDates() {
  const today = todayInCapeTown();
  const hasUpcoming = termDates.some((d) => d.date >= today);

  if (!hasUpcoming) {
    return (
      <p className="news-status">
        The next term dates have not been published here yet. Call the school
        office on{" "}
        <a className="font-bold underline" href={siteConfig.phoneHref}>
          {siteConfig.phone}
        </a>{" "}
        to check.
      </p>
    );
  }

  return (
    <div>
      <h3 className="font-display text-2xl">{termDatesTitle}</h3>
      <ol className="dates-list mt-4">
        {termDates.map((d) => {
          const date = new Date(d.date + "T00:00:00Z");
          const past = d.date < today;
          return (
            <li key={d.date + d.label} className={past ? "is-past" : undefined}>
              <span className="date-block" aria-hidden="true">
                <strong>{day.format(date)}</strong>
                <span>{month.format(date)}</span>
              </span>
              <div>
                <p>{d.label}</p>
                <small>
                  <time dateTime={d.date}>
                    {weekday.format(date)} {day.format(date)}{" "}
                    {new Intl.DateTimeFormat("en-ZA", { month: "long", timeZone: "UTC" }).format(date)}
                  </time>
                  {past ? " (passed)" : null}
                </small>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
