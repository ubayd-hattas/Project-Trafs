import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionNav } from "@/components/shared/SectionNav";
import { CTASection } from "@/components/shared/CTASection";
export const metadata: Metadata = {
  title: "Academics & matric results",
  description:
    "Explore the Trafalgar curriculum, subject choices, the Class of 2024 matric result and trusted revision resources.",
};
// Subject lists retained from the repository’s verified curriculum. Annual combinations require school confirmation.
const senior = [
  "English Home Language",
  "Afrikaans First Additional Language",
  "Mathematics",
  "Social Sciences",
  "Natural Sciences",
  "Economic & Management Sciences",
  "Technology",
  "Creative Arts",
  "Life Orientation",
];
const electives = [
  "Physical Sciences",
  "Accounting",
  "Geography",
  "History",
  "Business Studies",
  "Tourism",
  "Consumer Studies",
];
const sections = [
  { id: "curriculum", label: "Curriculum" },
  { id: "subjects", label: "Subject choices" },
  { id: "matric-results", label: "Matric results" },
  { id: "past-papers", label: "Revision resources" },
  { id: "support", label: "Support" },
];
export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Learning for the possibilities ahead."
        description="A broad foundation. Informed subject choices. A shared commitment to educational excellence, from Grade 8 to matric."
      />
      <Breadcrumbs trail={[{ label: "Academics" }]} />
      <SectionNav items={sections} ariaLabel="Academics page sections" />
      <section className="editorial-section" id="curriculum">
        <div className="container-page">
          <div className="editorial-grid">
            <SectionHeading
              eyebrow="The learning journey"
              title="From a strong foundation to your next step."
            />
            <p className="editorial-body">
              Trafalgar follows the Curriculum and Assessment Policy Statement
              (CAPS). The Senior Phase builds a broad foundation; the Further
              Education and Training phase develops the subject choices that
              lead to matric.
            </p>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="border-t-2 border-brass-500 pt-7">
              <p className="eyebrow">Grades 8–9 · Senior Phase</p>
              <h3 className="font-display text-3xl mt-4">Explore widely.</h3>
              <p className="editorial-body mt-4">
                Build a foundation across languages, sciences, humanities,
                commerce and the arts.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-8">
                {senior.map((s) => (
                  <li
                    className="border-b border-navy-800/10 py-3 text-sm"
                    key={s}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 border-navy-800 pt-7" id="subjects">
              <p className="eyebrow">Grades 10–12 · FET Phase</p>
              <h3 className="font-display text-3xl mt-4">
                Choose with purpose.
              </h3>
              <p className="editorial-body mt-4">
                Build your subject combination around your strengths and
                interests. Speak to the school about the combinations available
                for your year.
              </p>
              <details className="mt-6 border-b border-navy-800/15 py-4" open>
                <summary className="font-semibold cursor-pointer min-h-8">
                  Core subjects
                </summary>
                <p className="text-sm leading-7 mt-3">
                  English Home Language, Afrikaans First Additional Language,
                  Mathematics or Mathematical Literacy, and Life Orientation.
                </p>
              </details>
              <details className="border-b border-navy-800/15 py-4">
                <summary className="font-semibold cursor-pointer min-h-8">
                  Explore elective subjects
                </summary>
                <ul className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  {electives.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="photo-caption">
                  Confirm current availability and combinations with the school.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
      <section
        className="history-feature editorial-section"
        id="matric-results"
      >
        <div className="container-page editorial-grid items-center">
          <div>
            <p className="eyebrow mb-6">Matric results · Class of 2024</p>
            <p className="result-number !text-brass-300">
              96.4<span>%</span>
            </p>
            <p className="mt-4 text-parchment-200">Matric pass rate</p>
          </div>
          <div>
            <h2 className="section-heading">A result worth celebrating.</h2>
            <p className="editorial-body mt-6">
              Congratulations to Trafalgar’s Class of 2024 on a matric pass rate
              of 96.4%.
            </p>
            <p className="text-sm text-parchment-200/75 leading-7 mt-5">
              This is the verified 2024 result published on the existing school
              website. For subsequent results and detailed performance
              information, please contact the school.
            </p>
            <Link className="text-link mt-5" href="/contact">
              Enquire about results <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="editorial-section" id="past-papers">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="Prepare & practise"
            title="Resources for your revision."
            description="Go directly to the organisations that publish and maintain these learning materials."
          />
          <div>
            <a
              className="resource-row"
              href="https://wcedeportal.westerncape.gov.za/home"
            >
              <div>
                <h3>WCED ePortal</h3>
                <p>
                  Past papers, subject resources and matric revision support.
                </p>
              </div>
              <ArrowUpRight className="shrink-0" />
            </a>
            <a
              className="resource-row"
              href="https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/NSCPastExaminationpapers.aspx"
            >
              <div>
                <h3>DBE past examination papers</h3>
                <p>
                  National Senior Certificate papers and marking guidelines.
                </p>
              </div>
              <ArrowUpRight className="shrink-0" />
            </a>
            <Link className="resource-row" href="/parents-portal">
              <div>
                <h3>School documents & resources</h3>
                <p>
                  Find out how to obtain current timetables and stationery
                  lists.
                </p>
              </div>
              <ArrowRight className="shrink-0" />
            </Link>
          </div>
        </div>
      </section>
      <section className="editorial-section bg-[#efede6]" id="support">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="Ask for guidance"
            title="You don’t have to work it out alone."
          />
          <div className="editorial-body">
            <p>
              For help with subject choices, assessment arrangements or learning
              support, speak to your teacher or contact the school office.
            </p>
            <p>
              Current support arrangements and timetables should be confirmed
              directly with the school.
            </p>
            <Link className="text-link mt-4" href="/contact">
              Contact the school <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <CTASection
        title="See yourself at Trafalgar."
        primary={{ label: "Explore admissions", href: "/admissions" }}
        secondary={{ label: "Student life", href: "/student-life" }}
      />
    </>
  );
}
