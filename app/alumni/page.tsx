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
  title: "Alumni & community",
  description:
    "Once a Trafalgarian, always a Trafalgarian. Reconnect with Trafalgar’s heritage and discuss ways to support the school.",
};
export default function AlumniPage() {
  return (
    <>
      <PageHero
        eyebrow="Alumni & community"
        title="Your story doesn’t end at matric."
        description="Once a Trafalgarian, always a Trafalgarian. A shared school history connects generations, wherever life takes them."
      />
      <Breadcrumbs trail={[{ label: "Alumni" }]} />
      <SectionNav
        items={[
          { id: "association", label: "Reconnect" },
          { id: "stories", label: "Shared memories" },
          { id: "give-back", label: "Give back" },
        ]}
        ariaLabel="Alumni page sections"
      />
      <section className="editorial-section" id="association">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="A lifelong connection"
            title="There is always a way back."
          />
          <div className="editorial-body">
            <p>
              Trafalgar’s alumni community is part of its living history. The
              school’s 110-year anniversary archive records former learners
              coming together to celebrate the institution that connected them.
            </p>
            <p>
              To reconnect with the Alumni Association or enquire about
              reunions, contact the school office for current contact
              arrangements.
            </p>
            <Link className="text-link mt-5" href="/contact">
              Reconnect with Trafalgar <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="editorial-section bg-[#efede6]" id="stories">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          <figure>
            <Image
              src="/images/class-of-1969.webp"
              alt="The Trafalgar Class of 1969 in a school archive photograph"
              width={700}
              height={490}
              className="w-full h-auto grayscale"
            />
            <figcaption className="photo-caption">
              Class of 1969 · From the school archive
            </figcaption>
          </figure>
          <div>
            <SectionHeading
              eyebrow="Shared memories"
              title="Different generations. The same school spirit."
            />
            <p className="editorial-body mt-6">
              An old class photograph, a teacher’s encouragement, a friendship
              that lasts. The school archive is a reminder of the many lives
              connected by Trafalgar.
            </p>
            <p className="editorial-body mt-4">
              If you have photographs or memories to share, speak to the school
              about contributing to its archive.
            </p>
            <Link href="/about#history" className="text-link mt-5">
              Explore our history <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="editorial-section" id="give-back">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="Give back"
            title="Help write the next chapter."
          />
          <div>
            <p className="editorial-body">
              Interested in contributing your time, skills or resources? Start a
              conversation with the school about its current needs and how you
              could help.
            </p>
            {[
              {
                title: "Share your experience",
                body: "Discuss a career talk or a way to share your journey with learners.",
              },
              {
                title: "Contribute resources",
                body: "Ask which books, equipment or other resources would be useful.",
              },
              {
                title: "Discuss a donation or partnership",
                body: "Confirm current priorities and approved donation arrangements directly with the school.",
              },
            ].map((i) => (
              <div className="resource-row" key={i.title}>
                <div>
                  <h3>{i.title}</h3>
                  <p>{i.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Let’s keep the connection alive."
        primary={{ label: "Contact the school", href: "/contact" }}
        secondary={{ label: "Explore the gallery", href: "/gallery" }}
      />
    </>
  );
}
