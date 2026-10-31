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
  const [top, setTop] = useState(0);

  // Stick directly under the site header, whatever height it wraps to.
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) return;
    const update = () => setTop(header.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

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
      style={{ top }}
      className="section-navigation sticky z-20 overflow-x-auto border-b border-parchment-300 bg-parchment-100/95 backdrop-blur [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div className="container-page flex min-w-max items-center gap-1 py-3">
        {items.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-current={isActive ? "location" : undefined}
              className={`min-h-[48px] inline-flex items-center px-4 text-[17px] font-bold transition-colors duration-150 ${
                isActive
                  ? "bg-navy-800 text-parchment-100"
                  : "text-navy-800 hover:bg-navy-800/5"
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
