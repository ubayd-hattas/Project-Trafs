import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionNav } from "@/components/shared/SectionNav";
import { LatestNews } from "@/components/news-events/LatestNews";
import { KeyDates } from "@/components/shared/KeyDates";
import { schoolArchive } from "@/data/schoolArchive";
import { siteConfig } from "@/data/siteConfig";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "News and term dates",
  description:
    "The latest Trafalgar High School news, this term's key dates, and photographs from the school archive.",
};

export default function NewsEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="News and term dates"
        title="What is happening at Trafalgar."
        description="School news is posted by staff and appears here within the hour. Term dates are listed below."
      />
      <Breadcrumbs trail={[{ label: "News and term dates" }]} />
      <SectionNav
        items={[
          { id: "latest-news", label: "Latest news" },
          { id: "key-dates", label: "Term dates" },
          { id: "archive", label: "Photo archive" },
          { id: "newsletter-archive", label: "Newsletters" },
        ]}
        ariaLabel="News page sections"
      />
      <section className="editorial-section" id="latest-news">
        <div className="container-page">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="From the school" title="Latest news" />
            <a href={siteConfig.newsArchiveUrl} className="text-link">
              Older news <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <LatestNews count={9} />
        </div>
      </section>
      <section className="editorial-section section-tint" id="key-dates">
        <div className="container-page editorial-grid">
          <div>
            <SectionHeading eyebrow="Key dates" title="Term dates" />
            <p className="editorial-body mt-5">
              Dates can change. Check with the school office before you make
              travel or work arrangements.
            </p>
          </div>
          <KeyDates />
        </div>
      </section>
      <section className="editorial-section" id="archive">
        <div className="container-page">
          <SectionHeading
            eyebrow="Photo archive"
            title="Moments from 2025"
            description="Photographs from the school's 2025 collection."
          />
          <div className="mt-6">
            {schoolArchive.map((p) => (
              <article
                key={p.slug}
                id={p.slug}
                className="grid items-center gap-8 border-t border-parchment-300 py-10 md:grid-cols-2 lg:gap-16"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width:768px) 50vw,100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="eyebrow">
                    {p.category} · {p.year}
                  </p>
                  <h3 className="mt-3 text-3xl">{p.title}</h3>
                  <p className="editorial-body mt-4">{p.description}</p>
                  <Link href="/gallery" className="text-link mt-5">
                    More photographs <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="editorial-section section-tint" id="newsletter-archive">
        <div className="container-page editorial-grid">
          <SectionHeading eyebrow="Newsletters" title="Looking for a newsletter?" />
          <div className="editorial-body">
            <p>
              For the latest newsletter or a circular for your child&apos;s
              grade, contact the school office.
            </p>
            <p>
              Call{" "}
              <a className="font-bold underline" href={siteConfig.phoneHref}>
                {siteConfig.phone}
              </a>{" "}
              or email{" "}
              <a className="font-bold underline break-all" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
