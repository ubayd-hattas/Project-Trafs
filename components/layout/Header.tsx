"use client";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { MobileNavDrawer } from "./MobileNavDrawer";
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container-page flex justify-between gap-4">
          <span>
            Zonnebloem, Cape Town <span className="mx-2">·</span> Established
            1912
          </span>
          <div className="flex gap-6">
            <Link href="/alumni">Alumni & community</Link>
            <Link href="/parents-portal">Parent resources</Link>
            <a href="tel:+27214652969">021 465 2969</a>
          </div>
        </div>
      </div>
      <div className="container-page header-main">
        <Link
          href="/"
          className="brand"
          aria-label="Trafalgar High School home"
        >
          <Image
            src="/images/crest.png"
            alt=""
            width={62}
            height={72}
            priority
            className="brand-crest"
          />
          <span>
            <span className="brand-name">
              Trafalgar<span>High School</span>
            </span>
            <span className="brand-motto">Per Angusta, Ad Augusta</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="desktop-nav">
          {primaryNav
            .filter((i) => i.href !== "/alumni" && i.href !== "/admissions")
            .map((i) => (
              <Link
                key={i.href}
                href={i.href}
                aria-current={pathname === i.href ? "page" : undefined}
              >
                {i.label}
              </Link>
            ))}
        </nav>
        <Link href="/admissions" className="header-admissions">
          Admissions <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button
          id="mobile-menu-button"
          className="menu-toggle"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
        >
          <Menu size={24} />
        </button>
      </div>
      <MobileNavDrawer open={open} onClose={close} />
    </header>
  );
}
