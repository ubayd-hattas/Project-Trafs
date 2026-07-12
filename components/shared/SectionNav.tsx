"use client";

import { useEffect, useState } from "react";

export function SectionNav({
  items,
  ariaLabel,
}: {
  items: { id: string; label: string }[];
  ariaLabel: string;
}) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();
    
    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
      );

      observer.observe(element);
      observers.set(id, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [items]);

  return (
    <nav
      aria-label={ariaLabel}
      className="sticky top-16 z-20 border-b border-navy-800/10 bg-parchment-100/95 backdrop-blur [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overflow-x-auto"
    >
      <div className="container-page flex items-center gap-1 py-3 min-w-max">
        {items.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-xs px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
                isActive
                  ? "bg-navy-800 text-parchment-100"
                  : "text-ink-muted hover:bg-navy-800/5 hover:text-navy-800"
              }`}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
