import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { KeyDates } from "@/components/shared/KeyDates";

// Term dates grey out as they pass.
export const revalidate = 3600;
export const metadata: Metadata = {
  title: "Information for parents",
  description:
    "Term dates, school news, fees, documents and contact details for Trafalgar parents and guardians.",
};
export default function ParentResources() {
  return (
    <>
      <PageHero
        eyebrow="For parents and guardians"
        title="Information for parents"
        description="Term dates, school news, fees, documents and how to reach the school office."
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
            <p className="text-base text-ink-light mt-4">
              This resource page does not provide access to private learner
              records.
            </p>
          </div>
          <div>
            {[
              {
                title: "School news and newsletters",
                body: "Latest news from the school, and how to get a newsletter.",
                href: "/news-events",
              },
              {
                title: "Past exam papers",
                body: "Grade 12 papers and revision resources.",
                href: "/academics#past-papers",
              },
              {
                title: "School policies",
                body: "How to get the Code of Conduct and other policies.",
                href: "/policies",
              },
              {
                title: "Fees and admissions",
                body: "Fee enquiries and how applications work.",
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
      <section className="editorial-section section-tint" id="key-dates">
        <div className="container-page editorial-grid">
          <SectionHeading eyebrow="Key dates" title="Term dates" />
          <KeyDates />
        </div>
      </section>
    </>
  );
}
