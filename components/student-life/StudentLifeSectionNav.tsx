"use client";

import { useEffect, useState } from "react";

export interface StudentLifeSectionNavItem {
  id: string;
  label: string;
}

interface StudentLifeSectionNavProps {
  items: StudentLifeSectionNavItem[];
}

/**
 * Sticky in-page "jump to section" nav for the single-page Student Life
 * experience. Same pattern as AboutSectionNav — pure anchor links (works
 * without JS) with an IntersectionObserver-driven active-state highlight
 * as a progressive enhancement.
 */
export function StudentLifeSectionNav({ items }: StudentLifeSectionNavProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Student Life page sections"
      className="sticky top-16 z-10 border-b border-navy-800/10 bg-parchment-50/95 backdrop-blur supports-[backdrop-filter]:bg-parchment-50/80"
    >
      <div className="container-page">
        <ul className="flex gap-1 overflow-x-auto py-3 text-sm" role="list">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "true" : undefined}
                className={`inline-block whitespace-nowrap rounded-xs px-3 py-1.5 font-semibold transition-colors ${
                  activeId === item.id
                    ? "bg-navy-800 text-parchment-50"
                    : "text-ink-muted hover:bg-navy-800/5 hover:text-navy-800"
                }`}
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
