"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronDown, Phone } from "lucide-react";
import { primaryNav } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import { Button } from '@/components/ui/Button';

export function MobileNavDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div id="mobile-nav-drawer" className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Site navigation menu">
      <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-parchment-100 shadow-cardHover">
        <div className="flex items-center justify-between border-b border-navy-800/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-navy-800/10 overflow-hidden">
              <Image
                src="/placeholders/icon.png"
                alt={`${siteConfig.name} logo`}
                width={30}
                height={30}
                className="object-contain"
              />
            </span>
            <span className="font-display text-base text-navy-800">Menu</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-navy-800/5"
          >
            <X className="h-5 w-5 text-navy-800" aria-hidden="true" />
          </button>
        </div>

        <div className="flex gap-2 px-5 py-4">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xs border border-navy-800/20 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-800/5"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> Call Us
          </a>
          <Button href="/admissions/how-to-apply" className="flex-1" onClick={onClose}>
            Apply Now
          </Button>
        </div>

        <nav aria-label="Mobile primary" className="flex-1 px-2 pb-8">
          <ul>
            {primaryNav.map((item: any) => (
              <li key={item.href} className="border-b border-navy-800/10">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                      aria-expanded={openSection === item.label}
                      className="flex w-full items-center justify-between px-3 py-3.5 text-left font-semibold text-navy-800"
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform ${
                          openSection === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSection === item.label ? (
                      <ul className="pb-2 pl-4">
                        {item.children.map((child: any) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className="block rounded-xs px-3 py-2 text-sm text-ink-light transition-colors hover:text-navy-800"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-3 py-3.5 font-semibold text-navy-800 transition-colors hover:text-brass-600"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
