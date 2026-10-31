import Image from "next/image";
import Link from "next/link";
import { footerColumns } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
import { isOfficialSite } from "@/data/siteMode";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="braid" aria-hidden="true" />
      <div className="container-page footer-grid">
        <div>
          <Link href="/" className="flex items-center gap-4">
            <Image src="/images/crest.png" alt="" width={56} height={66} />
            <span className="font-display text-2xl text-parchment-100">
              Trafalgar
              <br />
              High School
            </span>
          </Link>
          <p className="footer-motto mt-5">{siteConfig.motto}</p>
          <p>{siteConfig.mottoTranslation}.</p>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h2>{col.title}</h2>
            {col.links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        ))}
        <div>
          <h2>Contact</h2>
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          <a href={`mailto:${siteConfig.email}`} className="break-all">
            {siteConfig.email}
          </a>
          <p>
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}, {siteConfig.address.city}
          </p>
          <p>{siteConfig.hours}</p>
        </div>
      </div>
      <div className="container-page footer-bottom">
        <p>
          © {new Date().getFullYear()} Trafalgar High School ·{" "}
          {isOfficialSite
            ? "Website by Ubayd Hattas, Class of 2025"
            : "Website proposal by a former learner"}
        </p>
        <div className="flex flex-wrap gap-5">
          <Link href="/policies">Policies</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/sitemap-page">Sitemap</Link>
          <Link href="/site-credits">Credits</Link>
        </div>
      </div>
    </footer>
  );
}
