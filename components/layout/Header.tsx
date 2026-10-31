"use client";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, Mail } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
import { MobileNavDrawer } from "./MobileNavDrawer";
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container-page flex flex-wrap justify-between gap-x-6 gap-y-1">
          <span>Zonnebloem, Cape Town · Founded 1912</span>
          <div className="flex flex-wrap gap-x-6">
            <Link href="/parents-portal">For parents</Link>
            <Link href="/alumni">Alumni</Link>
            <a href={`mailto:${siteConfig.email}`}>
              <Mail size={16} aria-hidden="true" /> {siteConfig.email}
            </a>
            <a href={siteConfig.phoneHref}>
              <Phone size={16} aria-hidden="true" /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="container-page header-main">
        <Link href="/" className="brand" aria-label="Trafalgar High School home">
          <Image
            src="/images/crest.png"
            alt=""
            width={62}
            height={72}
            priority
            className="brand-crest"
          />
          <span className="brand-name">
            Trafalgar<span>High School</span>
          </span>
        </Link>
        <nav aria-label="Main" className="desktop-nav">
          {primaryNav
            .filter((i) => i.href !== "/admissions")
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
        <Link
          href="/admissions"
          className="header-admissions"
          aria-current={pathname === "/admissions" ? "page" : undefined}
        >
          Admissions
        </Link>
        <a
          href={siteConfig.phoneHref}
          className="header-call"
          aria-label={`Call the school on ${siteConfig.phone}`}
        >
          <Phone size={20} aria-hidden="true" />
          <span>Call</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
        >
          <Menu size={22} aria-hidden="true" />
          Menu
        </button>
      </div>
      <div className="braid" aria-hidden="true" />
      <MobileNavDrawer open={open} onClose={close} />
    </header>
  );
}
