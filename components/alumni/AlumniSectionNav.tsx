export type SectionNavItem = {
  id: string;
  label: string;
};

/**
 * Sticky "jump to section" nav for the single, long-form Alumni page.
 * Same pattern as <AcademicsSectionNav> / <StudentLifeSectionNav> — plain
 * anchor links, no client JS required, fully keyboard/screen-reader
 * navigable.
 */
export function AlumniSectionNav({ items }: { items: SectionNavItem[] }) {
  return (
    <nav
      aria-label="Alumni page sections"
      className="border-b border-navy-800/10 bg-parchment-100/80 backdrop-blur supports-[backdrop-filter]:bg-parchment-100/60"
    >
      <div className="container-page">
        <ul className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:thin]">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className="inline-flex rounded-full border border-navy-800/15 px-4 py-1.5 text-sm font-semibold text-navy-800 transition-colors hover:border-brass-500 hover:text-brass-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-500"
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
