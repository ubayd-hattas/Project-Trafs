import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeHero } from "@/components/home/HomeHero";
import { AudienceRouter } from "@/components/home/AudienceRouter";
import { LatestNews } from "@/components/news-events/LatestNews";
import { KeyDates } from "@/components/shared/KeyDates";
import { Leadership } from "@/components/about/Leadership";
import { VisitBlock } from "@/components/shared/VisitBlock";
import { timeline } from "@/data/timeline";
import { siteConfig } from "@/data/siteConfig";

// News comes from WordPress and term dates grey out as they pass, so rebuild hourly.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: {
    absolute: "Trafalgar High School | Zonnebloem, Cape Town, since 1912",
  },
  description:
    "Trafalgar High School is a public high school for Grades 8 to 12 in Zonnebloem, Cape Town. School news, term dates, admissions and our history since 1912.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AudienceRouter />

      <section className="editorial-section section-tint" aria-labelledby="news-heading">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">From the school</p>
                <h2 id="news-heading" className="section-heading mt-3">
                  Latest news
                </h2>
              </div>
              <Link href="/news-events" className="text-link">
                All news <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <LatestNews count={3} />
          </div>
          <div id="key-dates">
            <p className="eyebrow">Key dates</p>
            <h2 className="section-heading mt-3 mb-6">Coming up</h2>
            <KeyDates />
          </div>
        </div>
      </section>

      <section className="history-feature editorial-section" aria-labelledby="history-heading">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow">Our history</p>
            <p className="history-year mt-4" aria-hidden="true">
              1912
            </p>
            <h2 id="history-heading" className="section-heading mt-6">
              Founded in District Six by people who believed in education.
            </h2>
            <p className="editorial-body mt-6">
              Dr Abdurahman campaigned for a school where young people of
              colour could continue their education. Harold Cressy, the first
              person of colour to graduate with a BA from the University of
              Cape Town, became its first principal.
            </p>
            <Link href="/about#history" className="text-link mt-6">
              Read our history <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div>
            <ol className="honours-board" aria-label="School milestones">
              {timeline.map((m) => (
                <li key={m.year}>
                  <span className="year">{m.year}</span>
                  <div>
                    <h3>{m.title}</h3>
                    <p>{m.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <figure className="mt-10 flex items-end gap-5">
              <Image
                src="/images/class-of-1969.webp"
                alt="Rows of learners in blazers in the Class of 1969 school photograph"
                width={260}
                height={182}
                className="h-auto w-[200px] grayscale sm:w-[260px]"
              />
              <figcaption className="text-[15px] text-navy-100">
                Class of 1969, from the school archive
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="editorial-section" aria-labelledby="results-heading">
        <div className="container-page editorial-grid items-center">
          <div>
            <p className="eyebrow">Matric results</p>
            <h2 id="results-heading" className="section-heading mt-3">
              The Class of {siteConfig.latestMatricYear} passed matric at{" "}
              {siteConfig.latestPassRate}.
            </h2>
            <p className="editorial-body mt-5">
              Learners follow the national CAPS curriculum from Grade 8 and
              choose their matric subjects in Grade 10.
            </p>
            <Link href="/academics" className="text-link mt-5">
              Subjects and results <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="result-feature">
            <p className="result-number" aria-hidden="true">
              96.4<span>%</span>
            </p>
            <p className="text-lg text-ink-light">
              National Senior Certificate pass rate, Class of{" "}
              {siteConfig.latestMatricYear}
            </p>
          </div>
        </div>
      </section>

      <section className="editorial-section section-tint" aria-labelledby="leaders-heading">
        <div className="container-page">
          <p className="eyebrow">School leadership</p>
          <h2 id="leaders-heading" className="section-heading mt-3 mb-10">
            Who leads the school
          </h2>
          <Leadership />
        </div>
      </section>

      <VisitBlock />
    </>
  );
}
