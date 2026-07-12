import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  FlaskConical,
  Globe2,
  Palette,
  Download,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { StatCounter } from "@/components/ui/StatCounter";
import { PathwayCard, type Pathway } from "@/components/academics/PathwayCard";
import { SectionNav } from "@/components/shared/SectionNav";
import { ResourceLinkCard, type ExternalResource } from "@/components/shared/ResourceLinkCard";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Curriculum, subject pathways, matric results, academic support and exam resources at Trafalgar High School.",
};

// ---------------------------------------------------------------------------
// Section nav
// ---------------------------------------------------------------------------
const sectionNavItems = [
  { id: "excellence", label: "Overview" },
  { id: "curriculum", label: "Curriculum" },
  { id: "subjects", label: "Subject Pathways" },
  { id: "support", label: "Academic Support" },
  { id: "matric-results", label: "Matric Results" },
  { id: "past-papers", label: "Past Papers" },
  { id: "learning-resources", label: "Learning Resources" },
  { id: "downloads", label: "Downloads" },
];

// ---------------------------------------------------------------------------
// Subject pathways â€” grouped from Trafalgar's verified Grade 8â€“12 subject
// offering (see Grade 8/9 compulsory list and Grade 10â€“12 stream data below).
// Presented as pathways rather than a flat subject list, per IA guidance.
// ---------------------------------------------------------------------------
const pathways: Pathway[] = [
  {
    name: "STEM",
    icon: FlaskConical,
    description:
      "For learners who show strength in Mathematics and the sciences and want to keep those doors open through to matric.",
    subjects: [
      "Mathematics",
      "Physical Science",
      "Life Science",
      "Natural Sciences (Gr 8â€“9)",
      "Technology (Gr 8â€“9)",
      "Computer Applications Technology (if offered â€” to be confirmed)",
    ],
  },
  {
    name: "Commerce",
    icon: Briefcase,
    description:
      "For learners interested in business, finance and the economy, building on the Economic & Management Sciences foundation from Grade 8â€“9.",
    subjects: [
      "Accounting",
      "Business Studies",
      "Economic & Management Sciences (Gr 8â€“9)",
      "Tourism",
    ],
  },
  {
    name: "Humanities",
    icon: Globe2,
    description:
      "For learners drawn to people, society, place and the past â€” building on the Social Sciences foundation from Grade 8â€“9.",
    subjects: [
      "History",
      "Geography",
      "Social Sciences (Gr 8â€“9)",
    ],
  },
  {
    name: "Creative & Practical",
    icon: Palette,
    description:
      "For learners who work best hands-on and creatively, from the Creative Arts foundation phase through to practical FET subjects.",
    subjects: [
      "Creative Arts (Gr 8â€“9)",
      "Consumer Studies",
    ],
    note: "Specific offerings (e.g. Visual Arts, Dramatic Arts) to be confirmed with the school.",
  },
];

const coreSubjects = [
  "English Home Language",
  "Afrikaans Eerste Addisionele Taal",
  "Mathematics or Mathematics Literacy",
  "Life Orientation (Gr 10â€“12)",
];

// ---------------------------------------------------------------------------
// Past examination paper resources â€” external, trusted, opened in a new tab.
// No content is copied from these sites; these are convenience links only.
// ---------------------------------------------------------------------------
const pastPaperResources: ExternalResource[] = [
  {
    name: "Stanmore Physics",
    description:
      "Free past exam papers and study notes for Grades 10â€“12 across Physical Sciences, Mathematics, Accounting, Geography and more.",
    href: "https://stanmorephysics.com/",
  },
  {
    name: "Department of Basic Education â€” NSC Past Papers",
    description:
      "Official National Senior Certificate (matric) past examination papers, published directly by the national Department of Basic Education.",
    href: "https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/NSCPastExaminationpapers.aspx",
  },
  {
    name: "Test Papers South Africa",
    description:
      "A large, free collection of past exam papers and memorandums for Grades 1â€“12, in English and Afrikaans.",
    href: "https://www.testpapers.co.za/",
  },
  {
    name: "WCED ePortal â€” Past Papers",
    description:
      "Western Cape Education Department portal with NSC past papers and marking guidelines, plus broader curriculum support resources.",
    href: "https://wcedeportal.co.za/past-papers",
  },
];

// ---------------------------------------------------------------------------
// Downloads â€” school documents. All placeholders until real files/links are
// supplied by the school office.
// ---------------------------------------------------------------------------
const downloads = [
  { title: "Subject Selection Forms", note: "Placeholder â€” link to the current form once supplied by the school office." },
  { title: "Academic Policies", note: "Placeholder â€” link to the SGB-approved academic policy document(s)." },
  { title: "Stationery Lists", note: "Placeholder â€” link to the current per-grade stationery list." },
  { title: "Assessment Timetables", note: "Placeholder â€” link to the current term's assessment timetable." },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="A curriculum built for excellence"
        description="CAPS-aligned subjects, a proud matric record, and the resources learners need to succeed â€” from Grade 8 through to matric."
        image="/placeholders/science-lab.svg"
      />
      <Breadcrumbs trail={[{ label: "Academics" }]} />
      <SectionNav ariaLabel="Page sections" items={sectionNavItems} />

      {/* 1. Academic Excellence -------------------------------------------------- */}
      <section id="excellence" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Academic Excellence"
          title="Achievement is a habit at Trafalgar"
          description="Trafalgar High School is committed to giving every learner, from Grade 8 to matric, a rigorous, CAPS-aligned education and the support structures to succeed in it. That commitment is reflected in a consistently strong matric pass rate and a curriculum that keeps genuine subject choice open for as long as possible."
        />
      </section>

      {/* 2. Curriculum Overview --------------------------------------------------- */}
      <section id="curriculum" className="scroll-mt-36 bg-navy-800/[0.03] py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Curriculum Overview"
            title="CAPS-aligned, from Grade 8 to matric"
            description="Trafalgar follows the national Curriculum and Assessment Policy Statement (CAPS). Learners are supported through two phases: the Senior Phase (Grades 8â€“9), which builds a broad general foundation, and the FET Phase (Grades 10â€“12), where learners choose subjects that lead to the National Senior Certificate (matric)."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
              <Badge tone="navy">Grade 8 &amp; 9 â€” Senior Phase</Badge>
              <p className="prose-body mt-3 text-sm">
                All Grade 8 and 9 learners follow a common curriculum, so every learner keeps a broad
                foundation across sciences, commerce, humanities, technology and the arts before
                choosing a subject pathway in Grade 10.
              </p>
              <ul className="prose-body mt-4 space-y-2 text-sm">
                <li>English Home Language</li>
                <li>Afrikaans Eerste Addisionele Taal</li>
                <li>Mathematics</li>
                <li>Social Sciences â€” History and Geography component</li>
                <li>Natural Sciences</li>
                <li>Economic and Management Sciences (EMS)</li>
                <li>Technology</li>
                <li>Creative Arts</li>
                <li>Life Orientation</li>
              </ul>
            </div>

            <div className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
              <Badge tone="navy">Grade 10â€“12 â€” FET Phase</Badge>
              <p className="prose-body mt-3 text-sm">
                From Grade 10, learners take three compulsory subjects plus four subjects chosen from
                the FET elective list, forming the subject pathways set out below.
              </p>
              <p className="prose-body mt-4 text-sm font-semibold text-navy-800">Compulsory for all learners:</p>
              <ul className="prose-body mt-2 space-y-2 text-sm">
                {coreSubjects.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="prose-body mt-4 text-sm font-semibold text-navy-800">Chosen from (four subjects):</p>
              <ul className="prose-body mt-2 space-y-2 text-sm">
                <li>Physical Science</li>
                <li>Accounting</li>
                <li>Geography</li>
                <li>History</li>
                <li>Business Studies</li>
                <li>Tourism</li>
                <li>Consumer Studies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Subject Offerings / Pathways ------------------------------------------ */}
      <section id="subjects" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Subject Offerings"
          title="Learning pathways, not just a subject list"
          description="From Grade 10, learners build their timetable around a pathway. The groupings below reflect Trafalgar's actual FET subject offering, organised the way most prospective families think about it."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((pathway) => (
            <PathwayCard key={pathway.name} pathway={pathway} />
          ))}
        </div>

        <details className="mt-10 rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
          <summary className="cursor-pointer font-display text-lg text-navy-800">
            How subject stream placement works
          </summary>
          <div className="prose-body mt-4 space-y-3 text-sm">
            <p>
              Placement into a Science-leaning pathway requires a learner to show proficiency in both
              Mathematics and the Natural Sciences component at Grade 9 level â€” historically a minimum
              of 50% in each. Placement into a Commerce-leaning pathway similarly requires 50% in both
              Mathematics and EMS at Grade 9 level.
            </p>
            <p>
              How many classes can be offered within each pathway in any given year depends on the
              number of prospective learners and staff availability, alongside learner achievement.
              Final subject combinations are confirmed with the school each year.
            </p>
          </div>
        </details>
      </section>

      {/* 4. Academic Support -------------------------------------------------------- */}
      <section id="support" className="scroll-mt-36 bg-navy-800/[0.03] py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Academic Support"
            title="Support structures for every learner"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
              <h3 className="font-display text-lg text-navy-800">Extra classes</h3>
              <p className="prose-body mt-2 text-sm">
                Placeholder â€” replace with the real subject areas and timetable for after-hours extra
                classes.
              </p>
            </div>
            <div className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
              <h3 className="font-display text-lg text-navy-800">Peer tutoring</h3>
              <p className="prose-body mt-2 text-sm">
                Placeholder â€” replace with details of any peer-mentorship or tutoring programme.
              </p>
            </div>
            <div className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
              <h3 className="font-display text-lg text-navy-800">Learner support services</h3>
              <p className="prose-body mt-2 text-sm">
                Placeholder â€” replace with details of counselling, learning-barrier support, or
                study-skills workshops offered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Matric Results ----------------------------------------------------------- */}
      <section id="matric-results" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Matric Results"
          title="A proud record of matric achievement"
        />
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <StatCounter value={96} suffix="%" label="2024 Pass Rate" />
          <StatCounter value={2024} label="Most Recent Year" />
          <StatCounter value={0} label="Distinctions (placeholder)" />
          <StatCounter value={0} label="Bachelor Passes (placeholder)" />
        </div>

        <div className="mt-14">
          <SectionHeading
            eyebrow="Archive"
            title="Results by year"
            description="Placeholder archive table â€” replace with verified, year-by-year matric statistics as they are released."
          />
          <div className="mt-8 overflow-x-auto rounded-xs border border-navy-800/10 shadow-card">
            <table className="w-full min-w-[520px] border-collapse bg-parchment-100 text-left text-sm">
              <thead>
                <tr className="bg-navy-800 text-parchment-100">
                  <th scope="col" className="px-5 py-3 font-semibold">Year</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Pass rate</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Distinctions</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Bachelor passes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-800/10">
                <tr>
                  <td className="px-5 py-3 font-semibold text-navy-800">2024</td>
                  <td className="px-5 py-3">96.4%</td>
                  <td className="px-5 py-3">Placeholder count</td>
                  <td className="px-5 py-3">Placeholder count</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-semibold text-navy-800">2023</td>
                  <td className="px-5 py-3">Placeholder %</td>
                  <td className="px-5 py-3">Placeholder count</td>
                  <td className="px-5 py-3">Placeholder count</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-semibold text-navy-800">2022</td>
                  <td className="px-5 py-3">Placeholder %</td>
                  <td className="px-5 py-3">Placeholder count</td>
                  <td className="px-5 py-3">Placeholder count</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-ink-muted">
            Only the 2024 pass rate (96.4%) is verified from the current public site; all other figures
            are placeholders â€” see PLACEHOLDERS.md. Updated statistics are required from the school
            before this section can be considered current.
          </p>
        </div>
      </section>

      {/* 6. Past Examination Papers --------------------------------------------------- */}
      <section id="past-papers" className="scroll-mt-36 bg-navy-800/[0.03] py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Past Examination Papers"
            title="Trusted external revision resources"
            description="Rather than host exam PDFs on this site, we point learners to established, freely available South African past-paper resources. These are maintained by the organisations linked below â€” Trafalgar does not host, copy, or take credit for their content. Each link opens in a new tab."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pastPaperResources.map((resource) => (
              <ResourceLinkCard key={resource.name} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Learning Resources ---------------------------------------------------------- */}
      <section id="learning-resources" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Learning Resources"
          title="Study tips, subject support &amp; policies"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
            <h3 className="font-display text-lg text-navy-800">Study tips</h3>
            <p className="prose-body mt-2 text-sm">
              Placeholder â€” no verified study-skills content currently exists on the school&rsquo;s site.
              Replace once supplied by the school.
            </p>
          </div>
          <div className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
            <h3 className="font-display text-lg text-navy-800">Subject support</h3>
            <p className="prose-body mt-2 text-sm">
              Placeholder â€” replace with any subject-specific extra help, resources, or contact points.
            </p>
          </div>
          <div className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
            <h3 className="font-display text-lg text-navy-800">Academic policies</h3>
            <p className="prose-body mt-2 text-sm">
              Placeholder â€” replace with a link to the SGB-approved academic policy document(s), or see
              Downloads below.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Downloads ---------------------------------------------------------------------- */}
      <section id="downloads" className="scroll-mt-36 bg-navy-800/[0.03] py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Downloads"
            title="School forms &amp; documents"
            description="Placeholder listings â€” replace each with a real, downloadable file once supplied by the school office."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {downloads.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-xs border border-navy-800/10 bg-parchment-100 p-5 shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-800/5 text-brass-600">
                  <Download className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-navy-800">{item.title}</p>
                  <p className="text-sm text-ink-muted">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Call To Action ------------------------------------------------------------------ */}
      <section className="bg-navy-800 py-16 text-parchment-100 sm:py-20">
        <div className="container-page flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow text-brass-300 mb-2">Academic Enquiries</p>
            <h2 className="font-display text-2xl sm:text-3xl">
              Questions about curriculum or subject choice?
            </h2>
            <p className="mt-3 max-w-xl text-parchment-200/85">
              Our staff are happy to talk parents and learners through subject pathways, matric
              requirements, and the support available. Get in touch and we&rsquo;ll point you to the
              right person.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brass-500 px-6 py-3 font-semibold text-navy-900 shadow-card transition-colors hover:bg-brass-400"
          >
            Contact the school
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}



