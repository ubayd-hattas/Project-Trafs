import Image from "next/image";
import Link from "next/link";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-page footer-grid">
        <div>
          <Link href="/" className="flex items-center gap-4">
            <Image src="/images/crest.png" alt="" width={56} height={66} />
            <span className="font-display text-2xl">
              Trafalgar
              <br />
              High School
            </span>
          </Link>
          <p className="mt-5 font-display italic text-brass-300">
            Per Angusta, Ad Augusta
          </p>
          <p className="mt-2 text-sm text-parchment-200/75">
            Through difficulties, to honours.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/about">Our school & history</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/student-life">Student life</Link>
        </div>
        <div>
          <h2>Stay connected</h2>
          <Link href="/news-events">News & events</Link>
          <Link href="/alumni">Alumni & giving</Link>
          <Link href="/parents-portal">Parent resources</Link>
          <Link href="/gallery">School gallery</Link>
        </div>
        <div>
          <h2>Visit & contact</h2>
          <p>
            35 Kuiper Street
            <br />
            Zonnebloem, Cape Town
          </p>
          <a href="tel:+27214652969">021 465 2969</a>
          <p>Monday–Friday · 08:00–15:00</p>
          <Link href="/contact">Contact the school ↗</Link>
        </div>
      </div>
      <div className="container-page footer-bottom">
        <p>
          © {new Date().getFullYear()} Trafalgar High School{" "}
          <span className="mx-2">·</span> Independent website proposal
        </p>
        <div className="flex flex-wrap gap-5">
          <Link href="/policies">Policies</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/sitemap-page">Sitemap</Link>
          <Link href="/site-credits">Site credit</Link>
        </div>
      </div>
    </footer>
  );
}
