export function QuoteBlock({
  quote,
  attribution,
  variant = "light",
}: {
  quote: string;
  attribution?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  const bgClass = isDark ? "bg-navy-800/60" : "bg-parchment-300/40";
  const textClass = isDark ? "text-parchment-100" : "text-navy-900";
  const attributionClass = isDark ? "text-brass-300/80" : "text-ink-muted";

  return (
    <blockquote className={`border-l-4 border-brass-500 ${bgClass} py-6 pl-6 pr-4 sm:py-8 sm:pl-8`}>
      <p className={`font-display text-xl sm:text-2xl leading-snug ${textClass}`}>
        &ldquo;{quote}&rdquo;
      </p>
      {attribution ? (
        <cite className={`mt-4 block text-sm not-italic font-semibold uppercase tracking-[0.06em] ${attributionClass}`}>
          {attribution}
        </cite>
      ) : null}
    </blockquote>
  );
}
