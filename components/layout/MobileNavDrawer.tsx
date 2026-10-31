"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight } from "lucide-react";
import { primaryNav, secondaryNav } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
export function MobileNavDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const siblings = [...document.body.children].filter(
      (el) => el instanceof HTMLElement && !el.contains(ref.current),
    ) as HTMLElement[];
    const oldInert = siblings.map((el) => el.inert);
    siblings.forEach((el) => (el.inert = true));
    ref.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const items =
          ref.current?.querySelectorAll<HTMLElement>("a[href],button");
        if (!items?.length) return;
        const first = items[0],
          last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = overflow;
      siblings.forEach((el, i) => (el.inert = oldInert[i]));
      document.removeEventListener("keydown", key);
      previous?.focus();
    };
  }, [open, onClose]);
  if (!open) return null;
  return createPortal(
    <div
      className="mobile-menu"
      id="mobile-nav-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      ref={ref}
    >
      <div className="mobile-menu-top">
        <span className="font-display text-2xl text-navy-800">Menu</span>
        <button onClick={onClose} aria-label="Close menu">
          <X aria-hidden="true" />
        </button>
      </div>
      <nav aria-label="Mobile main">
        <Link href="/" onClick={onClose}>
          Home <ArrowRight size={20} aria-hidden="true" />
        </Link>
        {[...primaryNav, ...secondaryNav].map((i) => (
          <Link href={i.href} key={i.href} onClick={onClose}>
            {i.label}
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-8 text-lg">
        <a className="text-link" href={siteConfig.phoneHref}>
          Call the school: {siteConfig.phone}
        </a>
        <p className="mt-3 text-ink-light">
          {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
          {siteConfig.address.city}
        </p>
      </div>
    </div>,
    document.body,
  );
}
