import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionNav } from "@/components/shared/SectionNav";
import { Timeline } from "@/components/about/Timeline";
import { Leadership } from "@/components/about/Leadership";
import { CTASection } from "@/components/shared/CTASection";
import { historyIntro, missionPoints } from "@/data/siteConfig";
import { timeline } from "@/data/timeline";
export const metadata: Metadata = {
  title: "Our school & history",
  description:
    "The story of Trafalgar High School, founded in 1912. Discover our District Six heritage, values and school leadership.",
};
const sections = [
  { id: "welcome", label: "Our school" },
  { id: "history", label: "Our history" },
  { id: "mission", label: "Our values" },
  { id: "leadership", label: "Leadership" },
];
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Trafalgar"
        title="About Trafalgar High School"
        description="A public high school in Zonnebloem, Cape Town, founded in 1912. Our history, our values and who leads the school today."
        image="/images/campus.webp"
      />
      <Breadcrumbs trail={[{ label: "About" }]} />
      <SectionNav items={sections} ariaLabel="About page sections" />
      <section className="editorial-section" id="welcome">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="Our school"
            title="Where we are and who we serve"
          />
          <div className="editorial-body">
            <p>
              Trafalgar High School is a historic school in Zonnebloem, Cape
              Town, with roots in District Six. Founded in 1912, it helped open
              access to secondary education for people of colour in South
              Africa.
            </p>
            <p>
              We welcome prospective families, current learners and parents, and
              the many generations of Trafalgarians whose connection to the
              school continues long after matric.
            </p>
            <Link className="text-link mt-4" href="/contact">
              Find us in Zonnebloem <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="editorial-section section-tint" id="history">
        <div className="container-page">
          <div className="grid gap-12 md:grid-cols-[1.5fr_.7fr]">
            <div>
              <SectionHeading
                eyebrow="Since 1912"
                title="How the school started"
              />
              <p className="editorial-body mt-6">{historyIntro}</p>
              <p className="editorial-body mt-5">
                Trafalgar still works from that belief: a good education can
                change a family&apos;s circumstances.
              </p>
            </div>
            <figure className="mx-auto w-full max-w-[250px]">
              <Image
                src="/images/harold-cressy.webp"
                alt="Historic portrait of Harold Cressy"
                width={250}
                height={416}
                className="w-full h-auto"
              />
              <figcaption className="photo-caption">
                Harold Cressy · Trafalgar’s first principal
              </figcaption>
            </figure>
          </div>
          <div id="timeline" className="mt-16 editorial-grid">
            <div>
              <p className="eyebrow">A continuing story</p>
              <h3 className="font-display text-3xl mt-4">
                From one generation
                <br />
                to the next.
              </h3>
              <figure className="mt-7">
                <Image
                  src="/images/class-of-1969.webp"
                  alt="Trafalgar’s Class of 1969 archive photograph"
                  width={600}
                  height={420}
                  className="w-full h-auto grayscale"
                />
                <figcaption className="photo-caption">
                  Class of 1969 · School archive
                </figcaption>
              </figure>
            </div>
            <Timeline milestones={timeline} />
          </div>
        </div>
      </section>
      <section className="editorial-section" id="mission">
        <div className="container-page editorial-grid">
          <div>
            <SectionHeading
              eyebrow="Our commitments"
              title="Our values"
            />
            <p className="font-display text-2xl italic mt-8">
              Per Angusta, Ad Augusta
            </p>
            <p className="text-base text-ink-light mt-3">
              Through difficulties, to honours.
            </p>
          </div>
          <ol>
            {missionPoints.map((p, i) => (
              <li
                key={p}
                className="flex gap-5 py-5 border-b border-navy-800/15 first:pt-0"
              >
                <span className="text-brass-700 text-base pt-1">{i + 1}</span>
                <p className="editorial-body">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="editorial-section section-tint" id="leadership">
        <div className="container-page">
          <SectionHeading
            eyebrow="School leadership"
            title="Who leads the school"
          />
          <div className="mt-10">
            <Leadership />
          </div>
          <div
            id="principal"
            className="editorial-grid mt-14 border-t border-navy-800/15 pt-10"
          >
            <h3 className="font-display text-3xl">
              A welcome from
              <br />
              the Principal
            </h3>
            <div className="editorial-body">
              <p>
                In her welcome on the school’s existing website, Principal Salwa
                Southgate reflects on Trafalgar’s educational heritage and the
                responsibility learners carry in their communities. The school’s
                motto connects that history with the challenges and
                possibilities ahead.
              </p>
              <p className="text-base">
                A summary of the school’s published welcome.
              </p>
              <a
                href="https://trafalgarhighschool.co.za/welcome-note/"
                className="text-link mt-3"
              >
                Read the Principal&apos;s full welcome <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="editorial-section border-t border-navy-800/15" id="school-song"><div className="container-page editorial-grid"><SectionHeading eyebrow="A shared tradition" title="The school song."/><details className="border-y border-navy-800/15 py-5"><summary className="cursor-pointer font-display text-2xl min-h-11">Listen & read the words</summary><p className="editorial-body mt-5">Written in 1939 by Alexander Busch and set to music by fellow pupil Reggie Lesch, the school song is part of Trafalgar’s heritage.</p><audio controls preload="none" className="w-full mt-6" aria-label="Trafalgar school song"><source src="/placeholders/school-song.mp3" type="audio/mpeg"/></audio><div className="grid sm:grid-cols-2 gap-6 text-base leading-7 mt-7"><div><h3 className="font-display text-xl mb-3">Verse 1</h3><p>Trafalgar, glorious name<br/>Enshrined in many hearts<br/>And thou shalt spread thy fame<br/>In near and distant parts.<br/>Thy name we do adore<br/>This day and evermore<br/>The name, the very soul<br/>That spurs us to our goal</p></div><div><h3 className="font-display text-xl mb-3">Verse 2</h3><p>Thou art our hope, our light<br/>To thee our all of praise<br/>Thou giv’st us strength to fight<br/>Enkindled by thy rays<br/>Though oft’ the hope seem vain<br/>There’s nought us shall restrain<br/>From battling with a will<br/>Undaunted, hopeful still</p></div><div className="sm:col-span-2"><h3 className="font-display text-xl mb-3">Chorus</h3><p>O Trafalgarians, be ye proud<br/>Extol that thrice blessed name<br/>And raise your adoration loud<br/>Thus shall ye spread its fame</p></div></div></details></div></section>
      <CTASection
        title="Thinking of applying?"
        description="Read how applications for Grade 8 and transfers work."
        primary={{ label: "How to apply", href: "/admissions" }}
        secondary={{ label: "Subjects we offer", href: "/academics" }}
      />
    </>
  );
}
