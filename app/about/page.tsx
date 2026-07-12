import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { QuoteBlock } from '@/components/shared/QuoteBlock';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Timeline } from '@/components/about/Timeline';
import { StaffCard } from '@/components/about/StaffCard';
import { SectionNav } from '@/components/shared/SectionNav';
import { historyIntro, missionPoints, siteConfig } from '@/data/siteConfig';
import { timeline } from '@/data/timeline';
import { leadership, heads, sgbMembers } from '@/data/staff';

export const metadata: Metadata = {
  title: "About",
  description:
    "Trafalgar High School's story, mission and vision, leadership, governance and campus â€” founded 1912, Zonnebloem, Cape Town.",
};

// Derived directly from the "What We Stand For" commitments already used in
// the Mission section below â€” presented as short value labels for scannability.
// No new facts introduced; wording lightly tightened for a chip/card format.
const coreValues = [
  { title: "Caring Community", body: "A caring, progressive and involved community of learners, educators and parents/guardians." },
  { title: "Diversity & Tolerance", body: "Positive, progressive values that embrace understanding, tolerance and appreciation of South Africa's diverse cultures." },
  { title: "Per Angusta, Ad Augusta", body: "The ability to overcome, succeed and emerge triumphantly â€” our motto given full expression." },
  { title: "Educational Excellence", body: "An ethic of excellence cultivated and nurtured among learners, educators and the parent community." },
  { title: "Accountability & Transparency", body: "The bedrock of every activity across the school." },
];

const facilities = [
  { title: "Science Laboratories", image: "/placeholders/science-lab.svg", body: "Equipped for practical experiments and investigations, supporting our strong focus on the sciences." },
  { title: "Library & Media Centre", image: "/placeholders/gallery-2.svg", body: "A quiet space for study, research, and reading, providing access to essential academic resources." },
  { title: "Sports Fields & Courts", image: "/placeholders/sports-field.svg", body: "Maintained facilities supporting our physical education curriculum and extramural sports codes." },
  { title: "Auditorium & Hall", image: "/placeholders/assembly.svg", body: "The heart of our school community, used for assemblies, examinations, and cultural events." },
  { title: "Computer Centre", image: "/placeholders/students-collaborating.svg", body: "Providing learners with access to modern IT infrastructure and digital literacy skills." },
  { title: "Campus Grounds", image: "/placeholders/facilities.svg", body: "Historic grounds located at the foot of Table Mountain, offering a unique environment for learning." },
];

const sectionNavItems = [
  { id: "welcome", label: "Welcome" },
  { id: "mission", label: "Mission" },
  { id: "vision", label: "Vision" },
  { id: "values", label: "Core Values" },
  { id: "history", label: "Our History" },
  { id: "timeline", label: "Timeline" },
  { id: "school-song", label: "School Song" },
  { id: "principal", label: "Principal's Message" },
  { id: "leadership", label: "Leadership" },
  { id: "staff", label: "Staff Directory" },
  { id: "governing-body", label: "Governing Body" },
  { id: "facilities", label: "Facilities" },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO */}
      <PageHero
        eyebrow="About Trafalgar"
        title="A school built on more than a century of purpose"
        description="From our 1912 founding story to our present-day leadership, here's everything that makes Trafalgar who we are."
        image="/placeholders/hero.webp"
      />
      <Breadcrumbs trail={[{ label: "About" }]} />
      <SectionNav ariaLabel="Page sections" items={sectionNavItems} />

      {/* 2. WELCOME */}
      <section id="welcome" className="container-page scroll-mt-36 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Welcome" title="Welcome to Trafalgar High School" />
            <p className="prose-body mt-5 text-lg">
              Founded in {siteConfig.foundedYear} in the heart of historic District Six, Trafalgar High School holds
              the distinction of being the first high school for people of colour in South Africa. More than a
              century later, that founding purpose â€” access to a real, rigorous education â€” still shapes everything
              we do, just minutes from Cape Town&rsquo;s CBD and the foot of Table Mountain.
            </p>
            <p className="prose-body mt-4">
              Whether you are a prospective family exploring your options, a current parent staying informed, or an
              alumnus maintaining your connection to a community that shaped you, we welcome you warmly to our
              school and to this space.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs">
            <PlaceholderImage src="/placeholders/assembly.webp" alt="Placeholder photograph of the Trafalgar campus" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      {/* 3. MISSION */}
      <section id="mission" className="scroll-mt-36 bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Our Commitment" title="Trafalgar High School is committed to:" />
          <ol className="prose-body mt-8 max-w-2xl space-y-5">
            {missionPoints.map((point, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-display text-xl text-brass-500">{String(i + 1).padStart(2, "0")}</span>
                <span>{point}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. VISION */}
      <section id="vision" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading eyebrow="Looking Ahead" title="Our Vision" />
        <div className="prose-body mt-5 max-w-2xl space-y-4">
          <p>
            Our vision is to be a beacon of academic excellence, personal growth, and civic responsibility in Cape
            Town and beyond â€” a school where every learner is empowered to achieve their full potential, and where
            the values of our founders remain as alive today as they were in 1912.
          </p>
          <p>
            We are committed to building an institution that is not only a leader in education, but a genuine force
            for good in the communities we serve and the society we collectively shape.
          </p>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section id="values" className="scroll-mt-36 bg-navy-900 py-16 sm:py-20">
        <div className="container-page">
          <div>
            <p className="eyebrow text-brass-300 mb-3">What We Stand For</p>
            <h2 className="section-heading text-parchment-100">Core Values</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <div key={value.title} className="rounded-xs border border-parchment-50/15 bg-navy-800/60 p-6">
                <h3 className="font-display text-lg text-parchment-50">{value.title}</h3>
                <p className="prose-body mt-2 text-sm text-parchment-200">{value.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <QuoteBlock
              quote={`${siteConfig.motto} â€” through difficulties, to honours. That we have the ability to overcome difficulties so that we succeed and emerge triumphantly.`}
              attribution="The Trafalgar motto, explained"
              variant="dark"
            />
          </div>
        </div>
      </section>

      {/* 6. OUR HISTORY */}
      <section id="history" className="container-page scroll-mt-36 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow={`Founded ${siteConfig.foundedYear}`} title="Where it all began" />
            <p className="prose-body mt-5 text-lg">{historyIntro}</p>
            <div className="prose-body mt-4 space-y-4">
              <p>
                By 1911, education for Coloured learners in Cape Town was largely limited to mission schools
                offering primary education only. The need for a high school was actively driven by Dr Abdurahman,
                President of the African Political Organisation, and Harold Cressy â€” the first Coloured person to
                obtain a B.A. degree at the University of Cape Town.
              </p>
              <p>
                After pressure on the Cape School Board, Trafalgar A2 Public School (formerly Chapel Street A2
                Public School) opened its doors in January {siteConfig.foundedYear}, with Harold Cressy as its
                first principal. The school began with a roll of 60 pupils â€” 28 boys and 32 girls â€” and a staff of
                five teachers, teaching Dutch, Latin and elementary science alongside the usual elementary subjects.
              </p>
              <p>
                In 1913, Rosie Waradea Abdurahman â€” Dr Abdurahman&rsquo;s eldest daughter â€” became the first
                Coloured girl from a Coloured school to pass the University of Cape Town&rsquo;s Junior Certificate
                Examination, a milestone the APO celebrated even as it publicly criticised the school&rsquo;s
                inadequate facilities at the time.
              </p>
              <p>
                Since its founding, the school has been led by a succession of principals and acting principals:
                H Cressy, Maurice, Storey, Muller, Heneke, Roux, Steenveld, Ravens, Meltzer, Emeran, Taliep,
                Hendricks and Southgate. Across that history, Trafalgar has produced generations of doctors,
                lawyers, teachers, engineers, business people and sportsmen â€” grounded in the belief that education
                should develop the full human personality and strengthen respect for human rights, tolerance and
                friendship among all people, regardless of race, colour or creed.
              </p>
            </div>
          </div>
         <div className="relative aspect-[250/416] w-full overflow-hidden rounded-xs">
  <PlaceholderImage 
    src="/placeholders/historic-2.webp" 
    alt="Placeholder historic photograph of Harold Cressy" 
    fill 
    className="object-cover" 
    sizes="(min-width: 1024px) 40vw, 100vw" 
  />
</div>

        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Archive" title="Historic photographs" />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["old_generation", "classof60s", "classof64", "classof69"].map((img) => (
              <div key={img} className="relative aspect-[4/5] overflow-hidden rounded-xs">
                <PlaceholderImage src={`/placeholders/${img}.webp`} alt="Placeholder historic photograph" fill className="object-cover" sizes="25vw" />
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink-muted italic">
            Historic photographs from the Trafalgar High School archive.
          </p>
        </div>
      </section>

      {/* 7. HISTORICAL TIMELINE */}
      <section id="timeline" className="scroll-mt-36 bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Milestones" title={`${new Date().getFullYear() - siteConfig.foundedYear} years, in brief`} />
          <div className="mt-10 max-w-2xl">
            <Timeline milestones={timeline} />
          </div>
        </div>
      </section>

      {/* 8. SCHOOL SONG */}
      <section id="school-song" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading eyebrow="Tradition" title="The School Song" />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="prose-body space-y-4 text-sm">
            <p>
              Written in 1939 by Alexander Busch and set to music by fellow pupil Reggie Lesch, the school song has
              stirred &ldquo;young Trafalgarians&rdquo; in their pursuit &ldquo;Per Angusta&rdquo; to reach
              &ldquo;Ad Augusta&rdquo; for over eighty years.
            </p>
            <div className="rounded-xs border border-navy-800/10 bg-parchment-100 p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-brass-700">Placeholder audio</p>
              <div className="mt-3 flex items-center gap-3">
                <PlayCircle className="h-8 w-8 text-navy-800" aria-hidden="true" />
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <audio controls className="w-full" aria-label="Trafalgar High School song (placeholder recording)">
                  <source src="/placeholders/school-song.mp3" type="audio/mpeg" />
                </audio>
              </div>
              <p className="mt-2 text-xs text-ink-muted">
                Audio recording sourced from the Trafalgar High School community.
              </p>
            </div>
          </div>
          <div className="prose-body space-y-6 text-base">
            <div>
              <p className="font-display text-lg text-navy-800">Verse 1</p>
              <p>
                Trafalgar, glorious name
                <br />
                Enshrined in many hearts
                <br />
                And thou shalt spread thy fame
                <br />
                In near and distant parts.
                <br />
                Thy name we do adore
                <br />
                This day and evermore
                <br />
                The name, the very soul
                <br />
                That spurs us to our goal
              </p>
            </div>
            <div>
              <p className="font-display text-lg text-navy-800">Verse 2</p>
              <p>
                Thou art our hope, our light
                <br />
                To thee our all of praise
                <br />
                Thou giv&rsquo;st us strength to fight
                <br />
                Enkindled by thy rays
                <br />
                Though oft&rsquo; the hope seem vain
                <br />
                There&rsquo;s nought us shall restrain
                <br />
                From battling with a will
                <br />
                Undaunted, hopeful still
              </p>
            </div>
            <div>
              <p className="font-display text-lg text-navy-800">Chorus</p>
              <p>
                O Trafalgarians, be ye proud
                <br />
                Extol that thrice blessed name
                <br />
                And raise your adoration loud
                <br />
                Thus shall ye spread its fame
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRINCIPAL'S MESSAGE */}
      <section id="principal" className="scroll-mt-36 bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="A Welcome" title="A message from our Principal" />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xs">
              <PlaceholderImage src="/placeholders/principal.webp" alt="Placeholder portrait of the Principal" fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
            </div>
            <div className="prose-body max-w-2xl space-y-4 text-lg">
              <p className="font-display text-2xl text-navy-800">Dear Trafalgar family,</p>
              <p>
                Welcome to the official Trafalgar High School website.
              </p>
              <p>
                As the oldest school for people of colour in South Africa, Trafalgar High School 
                has a proud history both in terms of providing superior education as well as ensuring 
                that its students understand their responsibility in society and their communities. 
                These values that have endured for more than a century can be traced to when the school 
                was founded in 1912 after the President of the African Peopleâ€™s Organisation, Dr Abdurahman, 
                who was a councillor at the time, campaigned for a co-educational school for coloured people. 
                The schoolâ€™s first principal, Harold Cressy was also the first person of colour to get a BA 
                degree from the University of Cape Town. Both these men understood that a good education was 
                the means to changing social and economic circumstances.
                </p>
                <p>
                  As a school that had existed through the worst of apartheid, these values which are embodied 
                  in the schoolâ€™s motto â€“ â€˜Per Angusta, Ad Augustaâ€™ (Through Difficulties to Success) â€“ have been 
                  handed down to the students that have passed through this institution. The values imparted and 
                  bonds that are built among students and between students and the school often define how those 
                  students tackle the difficulties that are presented later in life. It is these values that ensured 
                  that despite the apartheid government declaring the area that the school is situated, District Six, 
                  a white area in 1966, the schoolâ€™s enrolment numbers did not drop as former students continued to 
                  send their children to the school even if it meant travelling long distances. These values filter 
                  down generations as many of the staff members, including myself, are past pupils and we have recently 
                  registered an alumni association who play an active role in supporting the school in all its activities. 
                  We say it runs in our blood.
                  </p>
                  <p>
                    We recognise that while culture may change, values endure. We strive to build on our history of building 
                    caring and involved young people who will contribute to improving society. We invite you to peruse our 
                    school website and contact us for more information about what we offer.
              </p>
              <p>
                Warm regards,
                <br />
                <span className="font-semibold text-navy-800">Salwa Southgate</span>
                <br />
                Principal, Trafalgar High School
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LEADERSHIP */}
      <section id="leadership" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading eyebrow="School Leadership" title="Principal & Deputy Principals" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((m) => (
            <StaffCard key={m.id} member={m} />
          ))}
        </div>
      </section>

      {/* 11. STAFF DIRECTORY */}
      <section id="staff" className="scroll-mt-36 bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Heads of Department" title="Subject leadership" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {heads.map((m) => (
              <StaffCard key={m.id} member={m} />
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-ink-muted">
            The full teaching staff directory is intentionally not published in this prototype out of respect
            for junior staff privacy â€” see PLACEHOLDERS.md for the recommended approach (consent-based opt-in
            listing) before this section is populated for real.
          </p>
        </div>
      </section>

      {/* 12. SCHOOL GOVERNING BODY */}
      <section id="governing-body" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading
          eyebrow="SGB"
          title="Governing Body"
          description="The School Governing Body plays a vital role in the governance and development of Trafalgar High School. The current SGB membership will be published here once confirmed with the school."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {sgbMembers.map((m) => (
            <li key={m.id} className="rounded-xs border border-navy-800/10 bg-parchment-100 p-5 shadow-card">
              <p className="font-display text-lg text-navy-800">{m.name}</p>
              <p className="text-sm text-brass-700">{m.role}</p>
            </li>
          ))}
        </ul>
        <div className="prose-body mt-12 max-w-2xl space-y-4">
          <h3 className="font-display text-2xl text-navy-800">AGM & meeting minutes</h3>
          <p>
            Placeholder â€” replace with real AGM notices and downloadable meeting minutes once the school
            confirms what can be published publicly.
          </p>
        </div>
      </section>

      {/* 13. FACILITIES */}
      <section id="facilities" className="scroll-mt-36 bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Campus" title="A campus built for a century of learning" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <div key={f.title} className="overflow-hidden rounded-xs border border-navy-800/10 bg-parchment-100 shadow-card">
                <div className="relative aspect-[4/3] w-full">
                  <PlaceholderImage src={f.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-navy-800">{f.title}</h3>
                  <p className="prose-body mt-2 text-sm">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. CALL TO ACTION */}
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="container-page flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl text-parchment-50 sm:text-3xl">
              See Trafalgar for yourself
            </h2>
            <p className="prose-body mt-2 max-w-xl text-parchment-200">
              Book a campus visit, meet our leadership team, or start an application today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 rounded-xs bg-brass-500 px-6 py-3 font-semibold text-navy-900 transition-colors hover:bg-brass-400"
            >
              Apply now <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xs border border-parchment-50/30 px-6 py-3 font-semibold text-parchment-50 transition-colors hover:bg-parchment-50/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


