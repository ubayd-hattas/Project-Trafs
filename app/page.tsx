import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/home/HomeHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { ArchiveStories } from "@/components/shared/ArchiveStories";
import { Leadership } from "@/components/about/Leadership";
export const metadata: Metadata = {
  title: {
    absolute:
      "Trafalgar High School | A proud history. A world of possibility.",
  },
  description:
    "Discover Trafalgar High School in Zonnebloem, Cape Town. Our heritage since 1912, academics, admissions and school community.",
};
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <section className="editorial-section">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="Welcome to Trafalgar"
            title="An education with roots. A future without limits."
          />
          <div className="editorial-body">
            <p>
              For more than a century, Trafalgar High School has been part of
              the story of Cape Town. Founded in 1912 to open doors to
              education, our school carries that purpose into every new
              generation.
            </p>
            <p>
              Our values are simple and enduring: a caring community, respect
              for our differences, and a commitment to educational excellence.
            </p>
            <Link href="/about" className="text-link mt-5">
              Get to know our school <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="history-feature editorial-section">
        <div className="container-page grid gap-12 md:grid-cols-[.65fr_1.35fr] lg:grid-cols-[.6fr_1fr_.9fr]">
          <div>
            <p className="eyebrow mb-5">Our founding year</p>
            <p className="history-year">1912</p>
            <p className="history-note">
              A belief in the power of education.
              <br />A legacy that belongs to all of us.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Rooted in District Six</p>
            <h2 className="section-heading">
              A small school.
              <br />
              An extraordinary story.
            </h2>
            <p className="editorial-body mt-6">
              Dr Abdurahman campaigned for a school where young people of colour
              could continue their education. With Harold Cressy as its first
              principal, Trafalgar opened its doors in 1912.
            </p>
            <Link href="/about#history" className="text-link mt-5">
              Discover our heritage <ArrowRight size={17} />
            </Link>
          </div>
          <figure className="hidden lg:block">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/class-of-1969.webp"
                alt="Class of 1969 from the Trafalgar school archive"
                fill
                sizes="25vw"
                className="object-cover grayscale"
              />
            </div>
            <figcaption className="mt-3 text-xs text-parchment-200/70">
              From the school archive · Class of 1969
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="editorial-section">
        <div className="container-page">
          <div className="editorial-grid items-center">
            <div>
              <SectionHeading
                eyebrow="Learning & achievement"
                title="The next chapter starts in the classroom."
              />
              <p className="editorial-body mt-6">
                Explore the curriculum from Grade 8 to matric, make informed
                subject choices, and find resources for the journey ahead.
              </p>
              <Link href="/academics" className="text-link mt-5">
                Explore academics <ArrowRight size={17} />
              </Link>
            </div>
            <div className="result-feature">
              <div>
                <p className="eyebrow mb-4">Class of 2024</p>
                <p className="result-number">
                  96.4<span>%</span>
                </p>
                <p className="mt-3 text-sm">Matric pass rate</p>
              </div>
              <div className="border-l border-navy-800/20 pl-6">
                <h3 className="font-display text-2xl">A proud achievement.</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-light">
                  Celebrating the matric Class of 2024 and their place in
                  Trafalgar’s story.
                </p>
                <Link
                  href="/academics#matric-results"
                  className="text-link mt-3"
                >
                  View result <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="editorial-section bg-[#efede6]">
        <div className="container-page">
          <div className="flex flex-wrap justify-between items-end gap-5 mb-10">
            <SectionHeading
              eyebrow="Life at Trafalgar"
              title="A place to find your stride."
            />
            <Link href="/student-life" className="text-link">
              Discover student life <ArrowRight size={17} />
            </Link>
          </div>
          <ArchiveStories />
          <div className="mt-9 flex justify-between gap-6 flex-wrap border-t border-navy-800/15 pt-5">
            <p className="text-sm text-ink-light">
              Moments from our school’s 2025 photo archive.
            </p>
            <Link href="/news-events" className="text-link">
              News & events <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="editorial-section">
        <div className="container-page">
          <div className="editorial-grid mb-10">
            <SectionHeading
              eyebrow="Meet our leadership"
              title="People at the heart of our school."
            />
            <div>
              <p className="editorial-body">
                Meet Principal Salwa Southgate and Vice Principal Anwar
                Samsodien.
              </p>
              <Link href="/about#leadership" className="text-link mt-3">
                About our school <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <Leadership />
        </div>
      </section>
      <CTASection
        title="Your next chapter. Our shared story."
        description="Considering Trafalgar for your family? Find admissions guidance and speak to the school office."
        primary={{ label: "Explore admissions", href: "/admissions" }}
        secondary={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
}
