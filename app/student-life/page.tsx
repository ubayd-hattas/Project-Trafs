import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Trophy, Users } from "lucide-react";
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { CTASection } from '@/components/shared/CTASection';
import { SectionNav } from '@/components/shared/SectionNav';

export const metadata: Metadata = {
  title: "Student Life",
  description:
    "Life beyond the classroom at Trafalgar High School â€” sport, culture and arts, clubs, student leadership, and school spirit.",
};

// Sporting codes â€” names withheld pending confirmation with the school.
// Do not invent which codes are currently offered; each slot is a template
// for the school to complete, not a factual claim.
const sportingCodes = [
  { title: "Sporting Code â€” Placeholder 1", body: "Placeholder â€” confirm code name, season, coaches and recent results." },
  { title: "Sporting Code â€” Placeholder 2", body: "Placeholder â€” confirm code name, season, coaches and recent results." },
  { title: "Sporting Code â€” Placeholder 3", body: "Placeholder â€” confirm code name, season, coaches and recent results." },
  { title: "Sporting Code â€” Placeholder 4", body: "Placeholder â€” confirm code name, season, coaches and recent results." },
];

// Categories named per the existing site's own Culture & Arts stub
// ("choir, drama, debate, and music") â€” not invented, just structured.
const cultureCategories = [
  { title: "Choir", image: "/placeholders/choir.svg", body: "Placeholder â€” describe the choir programme, performances and how to join." },
  { title: "Drama & Theatre", image: "/placeholders/assembly.svg", body: "Placeholder â€” describe drama productions, festivals and workshops." },
  { title: "Debating", image: "/placeholders/students-collaborating.svg", body: "Placeholder â€” describe the debating society, leagues entered and recent achievements." },
  { title: "Music", image: "/placeholders/students-collaborating.svg", body: "Placeholder â€” describe instrumental/vocal music offerings and ensembles." },
];

const clubs = [
  { title: "Club / Society â€” Placeholder 1", body: "Placeholder â€” confirm which clubs and societies currently run, and how learners join." },
  { title: "Club / Society â€” Placeholder 2", body: "Placeholder â€” confirm which clubs and societies currently run, and how learners join." },
  { title: "Club / Society â€” Placeholder 3", body: "Placeholder â€” confirm which clubs and societies currently run, and how learners join." },
  { title: "Club / Society â€” Placeholder 4", body: "Placeholder â€” confirm which clubs and societies currently run, and how learners join." },
  { title: "Club / Society â€” Placeholder 5", body: "Placeholder â€” confirm which clubs and societies currently run, and how learners join." },
  { title: "Club / Society â€” Placeholder 6", body: "Placeholder â€” confirm which clubs and societies currently run, and how learners join." },
];

const achievements = [
  { title: "Achievement â€” Placeholder", body: "Placeholder â€” add a recent sporting or cultural achievement once confirmed with the school." },
  { title: "Achievement â€” Placeholder", body: "Placeholder â€” add a recent sporting or cultural achievement once confirmed with the school." },
  { title: "Achievement â€” Placeholder", body: "Placeholder â€” add a recent sporting or cultural achievement once confirmed with the school." },
];

const faqs = [
  {
    question: "How do learners get involved in sport, culture or clubs?",
    answer: "Placeholder â€” confirm the sign-up process (e.g. through form teachers, trial dates, or a start-of-year activities fair).",
  },
  {
    question: "How are Prefects and the Head Boy/Girl selected?",
    answer: "Placeholder â€” confirm the school's current selection process for student leadership positions.",
  },
  {
    question: "Where can I find the full Code of Conduct?",
    answer: "Placeholder â€” confirm whether this is published under Policies or available on request from the school office.",
  },
];

const sectionNavItems = [
  { id: "overview", label: "Overview" },
  { id: "sport", label: "Sport" },
  { id: "culture-arts", label: "Culture & Arts" },
  { id: "clubs", label: "Clubs & Societies" },
  { id: "leadership", label: "Student Leadership" },
  { id: "experience", label: "Student Experience" },
  { id: "code-of-conduct", label: "Code of Conduct" },
  { id: "achievements", label: "Achievements" },
  { id: "gallery", label: "Gallery" },
  { id: "faq", label: "FAQs" },
];

export default function StudentLifePage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow="Student Life"
        title="Belonging, leadership and school spirit â€” beyond the classroom"
        description="At Trafalgar, growth doesn't stop when the bell rings. Sport, culture, clubs and student leadership are where our learners build lifelong friendships and find their voice."
        image="/placeholders/student-life-hero.svg"
      />
      <Breadcrumbs trail={[{ label: "Student Life" }]} />
      <SectionNav ariaLabel="Page sections" items={sectionNavItems} />

      {/* OVERVIEW */}
      <section id="overview" className="container-page scroll-mt-36 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Beyond Academics" title="A vibrant, well-rounded community" />
            <p className="prose-body mt-5 text-lg">
              At Trafalgar, we believe in holistic education. Our learners participate in a wide range of
              sporting, cultural and leadership activities that build character, confidence and community
              alongside academic achievement.
            </p>
            <p className="prose-body mt-4">
              Placeholder â€” expand with a fuller, current description of what a typical week outside the
              classroom looks like once confirmed with the school (e.g. how many learners participate, most
              popular activities, and how new learners get involved).
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs">
            <PlaceholderImage src="/placeholders/students-collaborating.svg" alt="Placeholder photograph of learners at Trafalgar" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      {/* SPORT */}
      <section id="sport" className="scroll-mt-36 bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Sport" title="Building character on the field" description="Codes, fixtures and coaches to be confirmed with the school." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sportingCodes.map((code) => (
              <div key={code.title} className="overflow-hidden rounded-xs border border-navy-800/10 bg-parchment-100 shadow-card">
                <div className="relative aspect-[4/3] w-full">
                  <PlaceholderImage src="/placeholders/sport.svg" alt="" fill className="object-cover" sizes="(min-width: 1024px) 25vw, 100vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-navy-800">{code.title}</h3>
                  <p className="prose-body mt-2 text-sm">{code.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE & ARTS */}
      <section id="culture-arts" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading eyebrow="Culture & Arts" title="Nurturing creativity" description="Choir, drama, debate and music â€” categories carried over from the current site, details pending confirmation." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cultureCategories.map((c) => (
            <div key={c.title} className="overflow-hidden rounded-xs border border-navy-800/10 bg-parchment-100 shadow-card">
              <div className="relative aspect-[4/3] w-full">
                <PlaceholderImage src={c.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 25vw, 100vw" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-navy-800">{c.title}</h3>
                <p className="prose-body mt-2 text-sm">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLUBS & SOCIETIES */}
      <section id="clubs" className="scroll-mt-36 bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Clubs & Societies" title="Find your passion" description="Placeholder list â€” replace with the real, current clubs and societies once confirmed." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.map((club) => (
              <div key={club.title} className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
                <h3 className="font-display text-lg text-navy-800">{club.title}</h3>
                <p className="prose-body mt-2 text-sm">{club.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT LEADERSHIP */}
      <section id="leadership" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading eyebrow="Student Leadership" title="Leading by example" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs">
            <PlaceholderImage src="/placeholders/leadership.svg" alt="Placeholder photograph of student leaders" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl text-navy-800">Head Boy & Head Girl</h3>
              <p className="prose-body mt-2 text-sm">
                Placeholder â€” names withheld pending confirmation with the school. Replace with the current Head
                Boy and Head Girl once confirmed.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-navy-800">Prefects</h3>
              <p className="prose-body mt-2 text-sm">
                Placeholder â€” replace with the current prefect body once confirmed, including how prefects
                support day-to-day school life.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-navy-800">Representative Council of Learners (RCL)</h3>
              <p className="prose-body mt-2 text-sm">
                Placeholder â€” describe the RCL's structure and current representatives once confirmed with the
                school.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-navy-800">Leadership opportunities</h3>
              <p className="prose-body mt-2 text-sm">
                Beyond formal positions, learners at Trafalgar take on leadership through sports captaincy,
                club and society roles, peer mentoring, and event organising â€” building confidence that lasts
                well beyond matric.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT EXPERIENCE */}
      <section id="experience" className="scroll-mt-36 bg-navy-900 py-16 sm:py-20">
        <div className="container-page">
          <div className="[&_*]:text-parchment-50">
            <SectionHeading eyebrow="What Makes Trafalgar Special" title="More than a school â€” a community" />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xs border border-parchment-50/15 bg-navy-800/60 p-6">
              <Users className="h-6 w-6 text-brass-300" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-parchment-50">Friendships that last</h3>
              <p className="prose-body mt-2 text-sm text-parchment-200">
                Shared practices, rehearsals and matches build friendships that carry learners well beyond their
                school years â€” a hallmark of the Trafalgar community.
              </p>
            </div>
            <div className="rounded-xs border border-parchment-50/15 bg-navy-800/60 p-6">
              <Trophy className="h-6 w-6 text-brass-300" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-parchment-50">Growth through participation</h3>
              <p className="prose-body mt-2 text-sm text-parchment-200">
                Whether on the field, on stage, or in committee meetings, learners grow in confidence and
                responsibility by taking part â€” not just by watching.
              </p>
            </div>
            <div className="rounded-xs border border-parchment-50/15 bg-navy-800/60 p-6">
              <ArrowRight className="h-6 w-6 text-brass-300" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-parchment-50">School pride, carried forward</h3>
              <p className="prose-body mt-2 text-sm text-parchment-200">
                The same spirit captured in our motto â€” <em>Per Angusta, Ad Augusta</em> â€” shows up every time a
                Trafalgarian represents the school with pride, on or off the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CODE OF CONDUCT */}
      <section id="code-of-conduct" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading eyebrow="Our Expectations" title="Code of Conduct" />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="prose-body max-w-2xl space-y-4">
            <p>
              Trafalgar expects every learner to act with respect, honesty and responsibility â€” towards
              teachers, fellow learners, and the school itself. Our Code of Conduct sets out these shared
              expectations so that every learner knows what is expected of them, and what they can expect from
              the school in return.
            </p>
            <p>
              Placeholder â€” replace this overview with a concise summary of the school's actual, current Code
              of Conduct once confirmed, covering attendance, uniform, discipline procedures, and values-based
              expectations.
            </p>
          </div>
          <div className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-navy-800" aria-hidden="true" />
              <div>
                <p className="font-display text-lg text-navy-800">Code of Conduct (PDF)</p>
                <p className="text-xs text-ink-muted">Placeholder â€” document not yet uploaded</p>
              </div>
            </div>
            <Link
              href="/policies"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-600"
            >
              View on the Policies page <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* STUDENT ACHIEVEMENTS */}
      <section id="achievements" className="scroll-mt-36 bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Recognising Success" title="Student Achievements" description="Placeholder highlights â€” replace with real, recent sporting and cultural achievements once confirmed." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => (
              <div key={i} className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
                <Trophy className="h-5 w-5 text-brass-500" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg text-navy-800">{a.title}</h3>
                <p className="prose-body mt-2 text-sm">{a.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/achievements/sport-culture"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-600"
          >
            View all achievements <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section id="gallery" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading eyebrow="A Glimpse" title="Student Life in pictures" description="A small preview â€” browse the full, categorised gallery for more." />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {["gallery-1", "gallery-2", "gallery-3"].map((img) => (
            <div key={img} className="relative aspect-[4/3] overflow-hidden rounded-xs">
              <PlaceholderImage src={`/placeholders/${img}.svg`} alt="Placeholder photograph of student life" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 50vw" />
            </div>
          ))}
        </div>
        <Link
          href="/gallery"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-600"
        >
          View full gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-36 bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" description="Placeholder FAQs â€” replace or expand once confirmed with the school." />
          <div className="mt-8 max-w-2xl space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xs border border-navy-800/10 bg-parchment-100 p-5 shadow-card">
                <summary className="cursor-pointer font-display text-base text-navy-800 marker:content-none">
                  {faq.question}
                </summary>
                <p className="prose-body mt-3 text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <CTASection
        title="Join Our Community"
        description="Get involved in sport, culture, clubs or leadership â€” apply today to become part of the legacy. For questions, our team is happy to help."
        primary={{ label: "Apply Now", href: "/admissions" }}
      />
    </>
  );
}


