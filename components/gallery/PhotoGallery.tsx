"use client";

import { useState, useMemo } from "react";
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

  const filtered = useMemo(
    () => (activeCategory === "All" ? items : items.filter((i) => i.category === activeCategory)),
    [items, activeCategory]
  );

  const closeLightbox = () => setLightboxIndex(null);
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

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
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-xs"
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
          aria-label={filtered[lightboxIndex].title}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-900/90 p-4"
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-parchment-100/10 text-parchment-100 hover:bg-parchment-100/20"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={showPrev}
            aria-label="Previous image"
            className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-parchment-100/10 text-parchment-100 hover:bg-parchment-100/20"
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
            className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-parchment-100/10 text-parchment-100 hover:bg-parchment-100/20"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
          <p className="absolute bottom-6 text-sm text-parchment-200">{filtered[lightboxIndex].title}</p>
        </div>
      ) : null}
    </div>
  );
}
