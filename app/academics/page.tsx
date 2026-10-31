import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionNav } from "@/components/shared/SectionNav";
import { CTASection } from "@/components/shared/CTASection";
import { siteConfig } from "@/data/siteConfig";
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
        title="Subjects, results and past papers"
        description="What learners study from Grade 8 to matric, the latest matric result, and where to find past exam papers."
      />
      <Breadcrumbs trail={[{ label: "Academics" }]} />
      <SectionNav items={sections} ariaLabel="Academics page sections" />
      <section className="editorial-section" id="curriculum">
        <div className="container-page">
          <div className="editorial-grid">
            <SectionHeading
              eyebrow="The learning journey"
              title="The curriculum from Grade 8 to 12"
            />
            <p className="editorial-body">
              Trafalgar follows the Curriculum and Assessment Policy Statement
              (CAPS). In the Senior Phase (Grades 8 and 9) every learner takes the
              same subjects. In the Further Education and Training phase (Grades
              10 to 12) learners choose the subjects they will write in matric.
            </p>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="border-t-2 border-brass-500 pt-7">
              <p className="eyebrow">Grades 8 and 9 · Senior Phase</p>
              <h3 className="font-display text-3xl mt-4">Subjects every learner takes</h3>
              <p className="editorial-body mt-4">
                Languages, sciences, humanities, commerce and the arts.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-8">
                {senior.map((s) => (
                  <li
                    className="border-b border-navy-800/10 py-3 text-base"
                    key={s}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 border-navy-800 pt-7" id="subjects">
              <p className="eyebrow">Grades 10 to 12 · FET Phase</p>
              <h3 className="font-display text-3xl mt-4">
                Choosing matric subjects
              </h3>
              <p className="editorial-body mt-4">
                Every learner takes the core subjects and adds electives. Ask the
                school which combinations are offered for your year.
              </p>
              <details className="mt-6 border-b border-navy-800/15 py-4" open>
                <summary className="font-semibold cursor-pointer min-h-8">
                  Core subjects
                </summary>
                <p className="text-base leading-7 mt-3">
                  English Home Language, Afrikaans First Additional Language,
                  Mathematics or Mathematical Literacy, and Life Orientation.
                </p>
              </details>
              <details className="border-b border-navy-800/15 py-4">
                <summary className="font-semibold cursor-pointer min-h-8">
                  Explore elective subjects
                </summary>
                <ul className="mt-3 grid grid-cols-2 gap-3 text-base">
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
            <h2 className="section-heading">Class of 2024 results</h2>
            <p className="editorial-body mt-6">
              Congratulations to Trafalgar’s Class of 2024 on a matric pass rate
              of 96.4%.
            </p>
            <p className="text-base text-parchment-200/75 leading-7 mt-5">
              This is the 2024 result published on the school website. For
              later results or a subject breakdown, contact the school.
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
            title="Past exam papers"
            description="Start with the school's own Grade 12 papers, then the national and provincial collections."
          />
          <div>
            <a className="resource-row" href={siteConfig.pastPapersUrl}>
              <div>
                <h3>Trafalgar Grade 12 past papers</h3>
                <p>Papers collected by the school, on the school website.</p>
              </div>
              <ArrowUpRight className="shrink-0" aria-hidden="true" />
            </a>
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
      <section className="editorial-section section-tint" id="support">
        <div className="container-page editorial-grid">
          <SectionHeading
            eyebrow="Support"
            title="Help with subjects and learning"
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
        title="Thinking of applying?"
        primary={{ label: "Explore admissions", href: "/admissions" }}
        secondary={{ label: "Student life", href: "/student-life" }}
      />
    </>
  );
}
