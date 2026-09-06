import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionNav } from "@/components/shared/SectionNav";
import { schoolArchive } from "@/data/schoolArchive";
export const metadata: Metadata = {
  title: "News & events",
  description:
    "Moments from Trafalgar’s school archive and guidance on current notices, newsletters and events.",
};
export default function NewsEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & events"
        title="The life of our school."
        description="School moments worth remembering, and a starting point for the information families need."
      />
      <Breadcrumbs trail={[{ label: "News & events" }]} />
      <SectionNav
        items={[
          { id: "latest-news", label: "School archive" },
          { id: "events", label: "Notices & events" },
          { id: "newsletter-archive", label: "Newsletters" },
        ]}
        ariaLabel="News page sections"
      />
      <section className="editorial-section" id="latest-news">
        <div className="container-page">
          <SectionHeading
            eyebrow="From the archive"
            title="Trafalgar, in moments."
            description="A selection from the school’s 2025 photo collection. These are archive features, rather than current announcements."
          />
          <div className="mt-12">
            {schoolArchive.map((p) => (
              <article
                key={p.slug}
                id={p.slug}
                className="grid md:grid-cols-2 gap-8 lg:gap-16 py-10 border-t border-navy-800/15 items-center"
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
                    {p.category} · {p.year} archive
                  </p>
                  <h2 className="section-heading mt-4">{p.title}</h2>
                  <p className="editorial-body mt-5">{p.description}</p>
                  <Link href="/gallery" className="text-link mt-5">
                    More school photographs <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="editorial-section bg-[#efede6]" id="events">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="For current families"
            title="Notices & upcoming events."
          />
          <div className="editorial-body">
            <p>
              For confirmed event dates, parent meetings and the latest school
              notices, please contact the school office or consult the school’s
              existing website.
            </p>
            <p>
              Check details with the office before making arrangements to
              attend.
            </p>
            <a
              href="https://trafalgarhighschool.co.za/"
              className="text-link mt-5"
            >
              Existing school website <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <section className="editorial-section" id="newsletter-archive">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="School communication"
            title="Looking for a newsletter?"
          />
          <div className="editorial-body">
            <p>
              Contact the school office for the latest newsletter, circulars or
              information for your learner’s grade.
            </p>
            <Link className="text-link mt-5" href="/contact">
              Contact the school office <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
