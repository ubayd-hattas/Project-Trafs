"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { X, ChevronDown, Phone } from "lucide-react";
import { primaryNav } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import { Button } from '@/components/ui/Button';

export function MobileNavDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      
      const hamburger = document.getElementById('mobile-menu-button');
      if (hamburger) {
        hamburger.focus();
      }
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      
      if (e.key === "Tab") {
        if (!drawerRef.current) return;
        const focusableElements = drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    
    // Focus close button on open
    const timeout = setTimeout(() => {
      if (drawerRef.current) {
        const closeBtn = drawerRef.current.querySelector('button');
        if (closeBtn) closeBtn.focus();
      }
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKey);
      clearTimeout(timeout);
    };
  }, [open, onClose]);

  return (
    <div 
      id="mobile-nav-drawer" 
      className={`fixed inset-0 z-[60] lg:hidden motion-safe:transition-opacity motion-safe:duration-300 motion-reduce:duration-0 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="dialog" 
      aria-modal="true" 
      aria-label="Site navigation menu"
    >
      <div 
        className={`absolute inset-0 bg-navy-900/60 backdrop-blur-sm motion-safe:transition-opacity motion-safe:duration-300 motion-reduce:duration-0 ${
          open ? "opacity-100" : "opacity-0"
        }`} 
        onClick={onClose} 
        aria-hidden="true" 
      />
      <div 
        ref={drawerRef}
        className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-parchment-100 shadow-cardHover motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out motion-reduce:duration-0 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
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
          <Button href="/admissions#application-process" className="flex-1" onClick={onClose}>
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
