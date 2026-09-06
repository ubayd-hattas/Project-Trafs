import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionNav } from "@/components/shared/SectionNav";
import { CTASection } from "@/components/shared/CTASection";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { admissionsFaq } from "@/data/faq";
export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Plan your application to Trafalgar High School. WCED admissions guidance, supporting documents, fee enquiries and school contact details.",
};
const guidance =
  "https://www.westerncape.gov.za/education/service/learner-admissions";
const portal = "https://admissions.westerncape.gov.za/";
const sections = [
  { id: "application-process", label: "How to apply" },
  { id: "requirements", label: "Documents" },
  { id: "fees", label: "Fees & assistance" },
  { id: "faq", label: "Common questions" },
];
export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="A new chapter starts here."
        description="Choosing a school is an important step. Here is a clear starting point for families considering Trafalgar."
        image="/images/grade-8-2025.webp"
      />
      <Breadcrumbs trail={[{ label: "Admissions" }]} />
      <SectionNav items={sections} ariaLabel="Admissions page sections" />
      <section className="editorial-section" id="application-process">
        <div className="container-page editorial-grid">
          <div>
            <SectionHeading
              eyebrow="How to apply"
              title="Your route to Trafalgar."
            />
            <p className="editorial-body mt-6">
              School applications are coordinated by the Western Cape Education
              Department. Start with its current guidance for your learner’s
              grade and intended year of entry.
            </p>
            <Button href={guidance} variant="secondary" className="mt-6">
              Current WCED guidance <ArrowUpRight size={17} />
            </Button>
            <p className="photo-caption mt-4">
              Application windows change. Check WCED for current dates and
              late-application support.
            </p>
          </div>
          <ol>
            {[
              {
                title: "Check the current application process",
                body: "Read the WCED guidance for Grade 8 entry or a transfer to another grade. Check which application route is available.",
              },
              {
                title: "Prepare your supporting documents",
                body: "Use the WCED checklist and have legible copies ready. Keep your contact information up to date.",
              },
              {
                title: "Apply and follow your outcome",
                body: "Use the WCED application portal when the relevant window is open. Follow its instructions for offers and acceptance.",
              },
            ].map((s, i) => (
              <li
                key={s.title}
                className="flex gap-6 border-b border-navy-800/15 py-6 first:pt-0"
              >
                <span className="font-display text-3xl text-brass-700">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="editorial-body mt-3 text-base">{s.body}</p>
                </div>
              </li>
            ))}
            <li className="pt-5">
              <a className="text-link" href={portal}>
                Open the WCED admissions portal <ArrowUpRight size={17} />
              </a>
            </li>
          </ol>
        </div>
      </section>
      <section className="editorial-section bg-[#efede6]" id="requirements">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="Get prepared"
            title="Documents to have ready."
            description="Check the complete WCED checklist for the identification documents that apply to your family."
          />
          <div>
            <ul>
              {[
                "Learner and parent or caregiver identification",
                "The learner’s latest official school report",
                "Proof of residence",
              ].map((d, i) => (
                <li
                  key={d}
                  className="flex gap-4 py-5 border-b border-navy-800/15 text-lg"
                >
                  <span className="text-brass-700">0{i + 1}</span>
                  {d}
                </li>
              ))}
            </ul>
            <a href={guidance} className="text-link mt-5">
              View the full WCED checklist <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <section className="editorial-section" id="fees">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="Planning ahead"
            title="Fees, assistance & school arrangements."
          />
          <div className="editorial-body">
            <p>
              For the approved fee schedule, payment arrangements and fee
              exemption information for your intended school year, please speak
              to the school office.
            </p>
            <p>
              The office can also help you confirm school-specific requirements,
              uniform information and arrangements for a visit.
            </p>
            <a className="text-link mt-5" href="tel:+27214652969">
              Call 021 465 2969 <ArrowUpRight size={17} />
            </a>
            <p className="text-sm mt-4">Monday–Friday · 08:00–15:00</p>
          </div>
        </div>
      </section>
      <section className="editorial-section bg-[#efede6]" id="faq">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="A little clarity"
            title="Common questions."
          />
          <Accordion items={admissionsFaq} />
        </div>
      </section>
      <CTASection
        title="Let’s help you take the next step."
        description="Contact the school office for school-specific enquiries, or visit WCED for application support."
        primary={{ label: "Contact the school", href: "/contact" }}
        secondary={{ label: "WCED guidance", href: guidance }}
      />
    </>
  );
}
