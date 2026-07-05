"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { primaryNav } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import { Button } from '@/components/ui/Button';
import { MobileNavDrawer } from '@/components/layout/MobileNavDrawer';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-navy-800/10 bg-parchment-200/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={`${siteConfig.name} home`}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-navy-800/10 overflow-hidden shrink-0">
            <Image
              src="/placeholders/icon.png"
              alt={`${siteConfig.name} logo`}
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </span>
          <span className="hidden sm:block leading-tight">
            <span className="block font-display text-lg text-navy-800">{siteConfig.name}</span>
            <span className="block text-[11px] uppercase tracking-[0.16em] text-brass-600">
              {siteConfig.motto}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item: any) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-xs px-3 py-2 text-sm font-semibold text-navy-800 transition-colors duration-150 hover:text-brass-600"
                  aria-expanded={item.children ? openMenu === item.label : undefined}
                  aria-haspopup={item.children ? "true" : undefined}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div
                    className={`absolute left-0 top-full min-w-[15rem] rounded-xs border border-navy-800/10 bg-parchment-100 py-2 shadow-cardHover transition-all duration-150 ${
                      openMenu === item.label
                        ? "visible opacity-100 translate-y-0"
                        : "invisible opacity-0 -translate-y-1"
                    }`}
                  >
                    {item.children.map((child: any) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-ink-light transition-colors duration-150 hover:bg-navy-800/5 hover:text-navy-800"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="hidden md:flex items-center gap-1.5 text-sm text-navy-800 transition-colors duration-150 hover:text-brass-600"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <Button href="/admissions/how-to-apply" className="hidden sm:inline-flex" variant="primary">
            Apply Now
          </Button>
          <button
            type="button"
            id="mobile-menu-button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xs border border-navy-800/20 transition-colors duration-150 hover:bg-navy-800/5"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
          >
            <span className="block h-0.5 w-5 bg-navy-800" />
            <span className="block h-0.5 w-5 bg-navy-800" />
            <span className="block h-0.5 w-5 bg-navy-800" />
          </button>
        </div>
      </div>

      <MobileNavDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
