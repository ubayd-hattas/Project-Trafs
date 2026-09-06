import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionNav } from "@/components/shared/SectionNav";
import { CTASection } from "@/components/shared/CTASection";
export const metadata: Metadata = {
  title: "Student life",
  description:
    "Discover school spirit, athletics, culture and community through real moments from Trafalgar High School.",
};
export default function StudentLifePage() {
  return (
    <>
      <PageHero
        eyebrow="Student life"
        title="Find your voice. Find your people."
        description="The moments between lessons are part of a school’s story too. Explore a glimpse of life in the Trafalgar community."
        image="/images/school-hall-2025.webp"
      />
      <Breadcrumbs trail={[{ label: "Student life" }]} />
      <SectionNav
        ariaLabel="Student life sections"
        items={[
          { id: "sport", label: "Sport" },
          { id: "culture-arts", label: "Culture & community" },
          { id: "leadership", label: "Learner leadership" },
          { id: "code-of-conduct", label: "Getting involved" },
        ]}
      />
      <section className="editorial-section" id="sport">
        <div className="container-page grid md:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-center">
          <figure>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/athletics-2025.webp"
                alt="Trafalgar learners at the starting line during athletics in 2025"
                fill
                sizes="(min-width:768px) 55vw,100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="photo-caption">
              Athletics · From the school’s 2025 archive
            </figcaption>
          </figure>
          <div>
            <SectionHeading
              eyebrow="Sport & school spirit"
              title="Give it your all."
            />
            <p className="editorial-body mt-6">
              The anticipation at the starting line. The encouragement from the
              sidelines. Athletics is one of the moments captured in Trafalgar’s
              school photo archive.
            </p>
            <p className="editorial-body mt-4">
              For current sporting activities, fixtures and participation
              arrangements, speak to the school.
            </p>
            <Link className="text-link mt-5" href="/gallery">
              Explore the gallery <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="editorial-section bg-[#efede6]" id="culture-arts">
        <div className="container-page editorial-grid items-center">
          <div>
            <SectionHeading
              eyebrow="Culture & community"
              title="A place to be heard."
            />
            <p className="editorial-body mt-6">
              School life creates space for expression and connection. These
              moments in the school hall and courtyard show a community coming
              together.
            </p>
            <p className="editorial-body mt-4">
              Ask the school about current cultural activities, clubs and
              opportunities to take part.
            </p>
          </div>
          <figure>
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/school-hall-2025.webp"
                alt="A learner addresses an audience in Trafalgar’s school hall"
                fill
                sizes="(min-width:768px) 55vw,100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="photo-caption">
              In the school hall · 2025 archive
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="editorial-section" id="leadership">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="Learner leadership"
            title="Learning to lead. Learning to contribute."
          />
          <div className="editorial-body">
            <p>
              Leadership is part of the Trafalgar story, including the Head Boy
              and Head Girl, prefects and Representative Council of Learners.
            </p>
            <p>
              Speak to the school about current learner representatives,
              selection arrangements and how learners can get involved.
            </p>
            <Link className="text-link mt-5" href="/alumni">
              A connection beyond matric <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="editorial-section bg-[#efede6]" id="code-of-conduct">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="Respect & belonging"
            title="Being part of the community."
          />
          <div className="editorial-body">
            <p>
              Care, respect for different cultures and accountability are part
              of the school’s stated commitments. Ask the office for the current
              Code of Conduct and guidance on school activities.
            </p>
            <Link className="text-link mt-5" href="/policies">
              School policies & documents <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <CTASection
        title="Make your own Trafalgar memories."
        primary={{ label: "Explore admissions", href: "/admissions" }}
        secondary={{ label: "Contact the school", href: "/contact" }}
      />
    </>
  );
}
