"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import type { GalleryItem } from '@/data/gallery';

export function PhotoGallery({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.category)))],
    [items]
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const filtered = useMemo(
    () => (activeCategory === "All" ? items : items.filter((i) => i.category === activeCategory)),
    [items, activeCategory]
  );

  const closeLightbox = () => {
    setLightboxIndex(null);
    // Return focus to the trigger element when closing
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };
  
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
    
  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  useEffect(() => {
    if (lightboxIndex === null) return;
    
    // Focus the close button when lightbox opens
    const closeBtn = document.getElementById("lightbox-close-btn");
    if (closeBtn) closeBtn.focus();
    
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      
      if (e.key === "Tab") {
        const focusable = document.querySelectorAll('.lightbox-focusable');
        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;
        
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, filtered.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div role="group" aria-label="Filter gallery by category" className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeCategory === cat
                ? "bg-navy-800 text-parchment-200"
                : "border border-navy-800/20 text-navy-800 hover:bg-navy-800/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={(e) => {
              triggerRef.current = e.currentTarget;
              setLightboxIndex(index);
            }}
            className="group relative aspect-square overflow-hidden rounded-xs focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brass-400 focus-visible:ring-offset-2"
          >
            <PlaceholderImage
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 22vw, 45vw"
            />
            <span className="absolute inset-x-0 bottom-0 bg-navy-900/70 px-2 py-1.5 text-left text-xs text-parchment-100 opacity-0 transition-opacity group-hover:opacity-100">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-900/90 p-4"
        >
          <button
            id="lightbox-close-btn"
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
            className="lightbox-focusable absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-parchment-100/10 text-parchment-100 hover:bg-parchment-100/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 focus-visible:ring-offset-2"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={showPrev}
            aria-label="Previous image"
            className="lightbox-focusable absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-parchment-100/10 text-parchment-100 hover:bg-parchment-100/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 focus-visible:ring-offset-2"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="relative aspect-[4/3] w-full max-w-2xl">
            <PlaceholderImage
              src={filtered[lightboxIndex].image}
              alt={filtered[lightboxIndex].title}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next image"
            className="lightbox-focusable absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-parchment-100/10 text-parchment-100 hover:bg-parchment-100/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 focus-visible:ring-offset-2"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
          <p className="absolute bottom-6 text-sm text-parchment-200" aria-live="polite">
            {filtered[lightboxIndex].title}
          </p>
        </div>
      ) : null}
    </div>
  );
}
