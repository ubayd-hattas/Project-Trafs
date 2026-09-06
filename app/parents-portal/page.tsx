import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
export const metadata: Metadata = {
  title: "Parent resources",
  description:
    "Useful starting points for Trafalgar parents: school notices, academic resources, policies and school office enquiries.",
};
export default function ParentResources() {
  return (
    <>
      <PageHero
        eyebrow="For our families"
        title="School information, within reach."
        description="Useful starting points for parents and guardians."
      />
      <Breadcrumbs trail={[{ label: "Parent resources" }]} />
      <section className="editorial-section">
        <div className="container-page editorial-grid">
          <div>
            <SectionHeading
              eyebrow="Everyday essentials"
              title="What do you need today?"
            />
            <p className="editorial-body mt-5">
              For current stationery lists, assessment timetables, uniform
              requirements and learner-specific enquiries, contact the school
              office.
            </p>
            <p className="text-sm text-ink-light mt-4">
              This resource page does not provide access to private learner
              records.
            </p>
          </div>
          <div>
            {[
              {
                title: "School notices & newsletters",
                body: "Find out how to get current communications.",
                href: "/news-events#newsletter-archive",
              },
              {
                title: "Academic resources",
                body: "Curriculum information and revision support.",
                href: "/academics#past-papers",
              },
              {
                title: "School policies",
                body: "Request the current school documents.",
                href: "/policies",
              },
              {
                title: "Fees & admissions",
                body: "Guidance for applications and fee enquiries.",
                href: "/admissions#fees",
              },
              {
                title: "Speak to the school office",
                body: "Telephone, office hours and directions.",
                href: "/contact",
              },
            ].map((i) => (
              <Link className="resource-row" key={i.href} href={i.href}>
                <div>
                  <h3>{i.title}</h3>
                  <p>{i.body}</p>
                </div>
                <ArrowRight className="shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
