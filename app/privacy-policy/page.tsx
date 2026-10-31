import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
export const metadata: Metadata = {
  title: "Privacy & this website",
  description:
    "Information about this independent website proposal and links to external services.",
};
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="About this website"
        title="Privacy & your information."
      />
      <Breadcrumbs trail={[{ label: "Privacy" }]} />
      <section className="editorial-section">
        <div className="container-page">
          <div className="max-w-3xl editorial-body">
            <h2 className="section-heading mb-6">
              An independent school website proposal.
            </h2>
            <p>
              This website is a redesign proposal for Trafalgar High School. It
              is not the school’s official website.
            </p>
            <p>
              There are no application submissions, contact forms, accounts or
              payment facilities on this proposal. It does not ask you to enter
              learner or family information.
            </p>
            <h3 className="font-display text-2xl mt-8">
              Links to other services
            </h3>
            <p className="mt-4">
              Admissions links take you to the Western Cape Education
              Department. Directions open Google Maps. News headlines and
              photographs are loaded from the school&apos;s own website,
              trafalgarhighschool.co.za. Those services have their
              own privacy practices. Website hosting may process technical
              request information needed to serve these pages.
            </p>
            <h3 className="font-display text-2xl mt-8">
              School information enquiries
            </h3>
            <p className="mt-4">
              For the school’s official privacy information or a question about
              learner records, please{" "}
              <Link href="/contact" className="underline">
                contact the school directly
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
