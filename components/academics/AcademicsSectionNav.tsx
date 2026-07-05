/**
 * Sticky in-page jump nav for the consolidated /academics page.
 *
 * The Academics page merges what used to be four separate routes
 * (Curriculum, Matric Results, Past Papers, Academic Support) into one long
 * page. This nav gives visitors the same fast, direct access to each topic
 * that separate pages used to provide, addressing the IA tradeoff of
 * consolidation head-on rather than just hoping people scroll.
 *
 * Pure anchor links + scroll-mt-24 on each section (already used throughout
 * page.tsx) — no client state required beyond horizontal-scroll behaviour on
 * small screens, so this stays a light client component.
 */
export function AcademicsSectionNav({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    // NOTE: top offset assumes the site Header is ~64px tall (h-16). If the
    // real Header component's height differs, adjust `top-16` here (and the
    // `scroll-mt-24` values on each <section id="..."> in page.tsx) to match,
    // so this bar sits flush under the sticky header instead of overlapping it.
    <nav
      aria-label="Academics page sections"
      className="sticky top-16 z-20 border-b border-navy-800/10 bg-parchment-50/95 backdrop-blur supports-[backdrop-filter]:bg-parchment-50/80"
    >
      <div className="container-page">
        <ul className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className="inline-block whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-semibold text-navy-800/70 transition-colors hover:bg-navy-800/5 hover:text-navy-800"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
