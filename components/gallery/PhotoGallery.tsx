"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";
export function PhotoGallery({ items }: { items: GalleryItem[] }) {
  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.category)))],
    [items],
  );
  const filtered = useMemo(
    () =>
      category === "All" ? items : items.filter((i) => i.category === category),
    [category, items],
  );
  const isOpen = index !== null;
  useEffect(() => {
    if (!isOpen) return;
    const box = dialog.current;
    if (!box) return;
    box.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      box.close();
      document.body.style.overflow = overflow;
      trigger.current?.focus();
    };
  }, [isOpen]);
  const close = () => setIndex(null);
  const move = (n: number) =>
    setIndex((i) =>
      i === null ? null : (i + n + filtered.length) % filtered.length,
    );
  return (
    <div>
      <div
        role="group"
        aria-label="Filter gallery by category"
        className="flex gap-2 flex-wrap mb-8"
      >
        {categories.map((c) => (
          <button
            key={c}
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
            className={
              "min-h-11 px-4 py-2 text-base border border-navy-800/20 " +
              (category === c
                ? "bg-navy-800 text-white"
                : "hover:bg-navy-800/5")
            }
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <button
            key={p.id}
            onClick={(e) => {
              trigger.current = e.currentTarget;
              setIndex(i);
            }}
            className="text-left group"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(min-width:1024px) 33vw,(min-width:640px) 50vw,100vw"
                className="object-cover transition-transform group-hover:scale-[1.02]"
              />
            </div>
            <span className="block mt-3 text-base">
              {p.title} <span aria-hidden="true">↗</span>
            </span>
          </button>
        ))}
      </div>
      <p className="photo-caption mt-8" aria-live="polite">
        {filtered.length} photographs · Select a photograph to view it in full.
      </p>
      {index !== null && (
        <dialog
          ref={dialog}
          onCancel={close}
          onClose={close}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") move(1);
            if (e.key === "ArrowLeft") move(-1);
          }}
          aria-label="School photograph viewer"
          className="gallery-dialog"
        >
          <button
            autoFocus
            onClick={close}
            className="gallery-close"
            aria-label="Close image viewer"
          >
            <X />
          </button>
          <div className="relative h-[65vh] w-full">
            <Image
              src={filtered[index].image}
              alt={filtered[index].title}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <div className="gallery-controls">
            <button onClick={() => move(-1)} aria-label="Previous image">
              <ChevronLeft />
            </button>
            <p aria-live="polite">
              {filtered[index].title}
              <span className="block text-sm mt-2">
                {index + 1} of {filtered.length}
              </span>
            </p>
            <button onClick={() => move(1)} aria-label="Next image">
              <ChevronRight />
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}
