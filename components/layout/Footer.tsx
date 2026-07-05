import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig, missionPoints } from '@/data/siteConfig';
import { footerColumns } from '@/data/navigation';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-parchment-300">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            {/* Logo on dark background — white ring gives a clean cut-out feel */}
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white ring-2 ring-brass-400/30 overflow-hidden shrink-0">
              <Image
                src="/placeholders/icon.png"
                alt={`${siteConfig.name} logo`}
                width={40}
                height={40}
                className="object-contain"
              />
            </span>
            <div>
              <p className="font-display text-lg text-parchment-100">{siteConfig.name}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-brass-400">{siteConfig.motto}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-parchment-300/80">{missionPoints[0]}</p>
          <ul className="mt-5 space-y-2 text-sm text-parchment-300/90">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-400" aria-hidden="true" />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brass-400" aria-hidden="true" />
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-brass-300">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brass-400" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-brass-300">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-brass-400" aria-hidden="true" />
              {siteConfig.hours}
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.socials.facebook}
              aria-label="Trafalgar High School on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-parchment-300/20 transition-colors duration-150 hover:border-brass-400 hover:text-brass-300"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.socials.instagram}
              aria-label="Trafalgar High School on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-parchment-300/20 transition-colors duration-150 hover:border-brass-400 hover:text-brass-300"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {footerColumns.map((col: any) => (
          <nav key={col.title} aria-label={col.title}>
            {/* Use <p> instead of <h2> — footer columns sit inside a context where h2 would break heading hierarchy */}
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brass-400">{col.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((link: any) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-parchment-300/85 transition-colors duration-150 hover:text-parchment-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <nav aria-label="Compliance">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brass-400">Compliance</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/privacy-policy" className="text-parchment-300/85 transition-colors duration-150 hover:text-parchment-100">
                Privacy Policy (POPIA)
              </Link>
            </li>
            <li>
              <Link href="/policies" className="text-parchment-300/85 transition-colors duration-150 hover:text-parchment-100">
                Policies
              </Link>
            </li>
            <li>
              <Link href="/parents-portal" className="text-parchment-300/85 transition-colors duration-150 hover:text-parchment-100">
                Parents&rsquo; Portal
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-parchment-300/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-parchment-300/70 sm:flex-row">
          <p>&copy; {year} {siteConfig.name}. All rights reserved. Independent redesign prototype — not the official site.</p>
          <p>
            Site by{" "}
            <Link href="/site-credits" className="transition-colors underline hover:text-brass-300">
              Ubayd Hattas, Class of 2025
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
