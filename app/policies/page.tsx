import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
export const metadata: Metadata = {
  title: "School policies & documents",
  description:
    "How to obtain current Trafalgar school policies, admissions documents and the Code of Conduct.",
};
export default function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow="School information"
        title="Policies and documents"
        description="The school office can give you the current version of any school policy."
      />
      <Breadcrumbs trail={[{ label: "Policies" }]} />
      <section className="editorial-section">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="Request a document"
            title="Ask the office for a document"
          />
          <div className="editorial-body">
            <p>
              Contact the school office for the current admissions policy, Code
              of Conduct, fee schedule and other school documents.
            </p>
            <p>
              Confirm that you have the version applicable to your learner’s
              school year before relying on an older copy.
            </p>
            <ul className="mt-5">
              {[
                "Admissions policy and procedure",
                "Learner Code of Conduct",
                "Approved fee schedule and assistance information",
                "School governance enquiries",
              ].map((t) => (
                <li key={t} className="py-4 border-b border-navy-800/15">
                  {t}
                </li>
              ))}
            </ul>
            <Link className="text-link mt-5" href="/contact">
              Contact the school office <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
