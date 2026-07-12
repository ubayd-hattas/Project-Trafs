import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Mic,
  BookOpen,
  HandCoins,
  Handshake,
  Mail,
  Phone,
  Landmark,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { AlumniStoryCard, type AlumniStory } from "@/components/alumni/AlumniStoryCard";
import { SectionNav } from "@/components/shared/SectionNav";
import { IconCard, type IconCardItem } from "@/components/shared/IconCard";

export const metadata: Metadata = {
  title: "Alumni",
  description:
    "Reconnect with the Trafalgar High School alumni community â€” stories, events, and ways to give back.",
};

// ---------------------------------------------------------------------------
// Section nav
// ---------------------------------------------------------------------------
const sectionNavItems = [
  { id: "welcome", label: "Welcome" },
  { id: "association", label: "Association" },
  { id: "stories", label: "Alumni Stories" },
  { id: "events", label: "Reunions & Events" },
  { id: "give-back", label: "Give Back" },
  { id: "spotlight", label: "Spotlight" },
  { id: "gallery", label: "Gallery" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

// ---------------------------------------------------------------------------
// Alumni stories â€” placeholder profiles only. Do not invent real alumni.
// ---------------------------------------------------------------------------
const featuredStories: AlumniStory[] = [
  {
    id: "story-1",
    name: "Placeholder Name",
    gradYear: "20XX",
    profession: "Placeholder profession",
    excerpt:
      "Placeholder story â€” replace with a real alumnus/alumna's journey once profiles are supplied by the school or Alumni Association.",
    image: "/placeholders/alumni-story-1.jpg",
  },
  {
    id: "story-2",
    name: "Placeholder Name",
    gradYear: "20XX",
    profession: "Placeholder profession",
    excerpt:
      "Placeholder story â€” replace with a real alumnus/alumna's journey once profiles are supplied by the school or Alumni Association.",
    image: "/placeholders/alumni-story-2.jpg",
  },
  {
    id: "story-3",
    name: "Placeholder Name",
    gradYear: "20XX",
    profession: "Placeholder profession",
    excerpt:
      "Placeholder story â€” replace with a real alumnus/alumna's journey once profiles are supplied by the school or Alumni Association.",
    image: "/placeholders/alumni-story-3.jpg",
  },
];

// ---------------------------------------------------------------------------
// Reunions & Events â€” placeholder events, no dates invented.
// ---------------------------------------------------------------------------
const events = [
  {
    title: "Annual Reunion",
    when: "Date to be announced",
    description: "Placeholder â€” replace with confirmed details once scheduled by the Alumni Association.",
  },
  {
    title: "Networking Evening",
    when: "Date to be announced",
    description: "Placeholder â€” an evening for alumni across industries and graduating years to connect.",
  },
  {
    title: "Founders Day Celebration",
    when: "Date to be announced",
    description: "Placeholder â€” a celebration of Trafalgar's founding and heritage, open to the wider alumni community.",
  },
];

// ---------------------------------------------------------------------------
// Ways to give back
// ---------------------------------------------------------------------------
const giveBackItems: IconCardItem[] = [
  {
    title: "Mentor learners",
    description: "Placeholder â€” offer guidance to current learners navigating subject choices, careers or university applications.",
    icon: Users,
  },
  {
    title: "Career talks",
    description: "Placeholder â€” share your career journey with learners considering their own path after matric.",
    icon: Mic,
  },
  {
    title: "Donate books",
    description: "Placeholder â€” contribute textbooks or library resources to support current learners.",
    icon: BookOpen,
  },
  {
    title: "Sponsor programmes",
    description: "Placeholder â€” support a specific academic, sporting or cultural programme at the school.",
    icon: Handshake,
  },
  {
    title: "Financial donations",
    description: "Support the school directly via the Alumni Association's bank account â€” see banking details below.",
    icon: HandCoins,
  },
];

export default function AlumniPage() {
  return (
    <>
      <PageHero
        eyebrow="Alumni"
        title="Once a Trafalgarian, always a Trafalgarian"
        description="A lifelong community built on shared history and Per Angusta, Ad Augusta â€” through difficulties, to honours. Reconnect, celebrate the journey, and help shape the next generation."
        image="/placeholders/alumni-hero.jpg"
      />
      <Breadcrumbs trail={[{ label: "Alumni" }]} />
      <SectionNav ariaLabel="Page sections" items={sectionNavItems} />

      {/* Welcome ------------------------------------------------------------ */}
      <section id="welcome" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Welcome"
          title="Your Trafalgar story doesn't end at matric"
          description="Placeholder â€” replace with a warmer, school-specific welcome once supplied. In general terms: every Trafalgarian carries a piece of this school's history forward. The alumni community exists to keep that connection alive â€” through reunions, mentorship, and the ongoing support that helps today's learners walk the same path you did."
        />
      </section>

      {/* Trafalgar Alumni Association ---------------------------------------- */}
      <section id="association" className="scroll-mt-36 bg-navy-800/[0.03] py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Trafalgar Alumni Association"
            title="A home for every former Trafalgarian"
            description="Placeholder â€” replace with the Association's official mission statement, committee structure and history once supplied. In general terms, the Association exists to keep former learners connected to each other and to the school, and to organise the reunions, mentorship and giving initiatives described on this page."
          />
          <div className="mt-8 rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <h3 className="font-display text-lg text-navy-800">Are you an ex-Trafalgarian?</h3>
              <p className="prose-body mt-2 text-sm">
                If you&rsquo;d like to join the Alumni Association, get in touch by email and the
                committee will follow up with next steps.
              </p>
            </div>
            <a
              href="mailto:alumnitrafalgar@gmail.com"
              className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-full bg-brass-500 px-6 py-3 font-semibold text-navy-900 shadow-card transition-colors hover:bg-brass-400 sm:mt-0"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              alumnitrafalgar@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Alumni Stories -------------------------------------------------------- */}
      <section id="stories" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Alumni Stories"
          title="Where Trafalgar has taken us"
          description="A small selection of alumni journeys â€” placeholders for now. As real stories are shared with the Association, this section will grow into a fuller archive."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredStories.map((story) => (
            <AlumniStoryCard key={story.id} story={story} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            disabled
            aria-disabled="true"
            title="A full alumni stories archive is planned for a future update"
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-navy-800/20 px-6 py-3 font-semibold text-navy-800/50"
          >
            View All Alumni Stories
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* Reunions & Events -------------------------------------------------------- */}
      <section id="events" className="scroll-mt-36 bg-navy-800/[0.03] py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Reunions & Events"
            title="Gatherings worth showing up for"
            description="Placeholder events â€” no dates have been confirmed yet. This section will be updated as the Association schedules each year's calendar."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {events.map((event) => (
              <div key={event.title} className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
                <h3 className="font-display text-lg text-navy-800">{event.title}</h3>
                <p className="mt-1 text-sm font-semibold text-brass-600">{event.when}</p>
                <p className="prose-body mt-3 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Give Back -------------------------------------------------------- */}
      <section id="give-back" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Ways to Give Back"
          title="Support the next generation of Trafalgarians"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {giveBackItems.map((item) => (
            <IconCard key={item.title} item={item} />
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-muted">
          Full banking details for financial donations are in the{" "}
          <a href="#contact" className="font-semibold text-brass-600 underline underline-offset-2">
            Contact Alumni Office
          </a>{" "}
          section below.
        </p>
      </section>

      {/* Alumni Spotlight -------------------------------------------------------- */}
      <section id="spotlight" className="scroll-mt-36 bg-navy-800 py-16 text-parchment-100 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs">
            <PlaceholderImage
              src="/placeholders/alumni-spotlight.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="eyebrow text-brass-300 mb-3">Alumni Spotlight</p>
            <h2 className="font-display text-2xl sm:text-3xl">Placeholder Name, Class of 20XX</h2>
            <p className="mt-4 max-w-xl text-parchment-200/85">
              Placeholder â€” this space is reserved to feature one distinguished Trafalgar alumnus or
              alumna each period. Replace with a real name, achievement and short profile once
              confirmed by the school or Alumni Association.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Preview -------------------------------------------------------- */}
      <section id="gallery" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Gallery Preview"
          title="Moments from the Trafalgar community"
          description="A preview only â€” the full photo collection lives on the Gallery page."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg"].map((file) => (
            <div key={file} className="relative aspect-square overflow-hidden rounded-xs border border-navy-800/10">
              <PlaceholderImage
                src={`/placeholders/${file}`}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 50vw"
              />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brass-600"
          >
            View full gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* FAQ -------------------------------------------------------- */}
      <section id="faq" className="scroll-mt-36 bg-navy-800/[0.03] py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Frequently Asked Questions" title="Common alumni questions" />
          <div className="mt-8 space-y-4">
            <details className="rounded-xs border border-navy-800/10 bg-parchment-100 p-5 shadow-card">
              <summary className="cursor-pointer font-semibold text-navy-800">
                How do I join the Alumni Association?
              </summary>
              <p className="prose-body mt-3 text-sm">
                Email{" "}
                <a href="mailto:alumnitrafalgar@gmail.com" className="font-semibold text-brass-600 underline underline-offset-2">
                  alumnitrafalgar@gmail.com
                </a>{" "}
                to express interest, and the committee will follow up with next steps.
              </p>
            </details>
            <details className="rounded-xs border border-navy-800/10 bg-parchment-100 p-5 shadow-card">
              <summary className="cursor-pointer font-semibold text-navy-800">
                How do I update my contact details?
              </summary>
              <p className="prose-body mt-3 text-sm">
                Placeholder â€” no confirmed process exists yet. In the meantime, contact the Association
                by email above.
              </p>
            </details>
            <details className="rounded-xs border border-navy-800/10 bg-parchment-100 p-5 shadow-card">
              <summary className="cursor-pointer font-semibold text-navy-800">
                How do I volunteer?
              </summary>
              <p className="prose-body mt-3 text-sm">
                Placeholder â€” see the Ways to Give Back section above for mentoring, career talks and
                sponsorship options, or email the Association to discuss other ways to help.
              </p>
            </details>
            <details className="rounded-xs border border-navy-800/10 bg-parchment-100 p-5 shadow-card">
              <summary className="cursor-pointer font-semibold text-navy-800">
                How do I donate?
              </summary>
              <p className="prose-body mt-3 text-sm">
                Donations can be made directly via EFT using the banking details in the Contact Alumni
                Office section below. Please email proof of payment to{" "}
                <a href="mailto:alumnitrafalgar@gmail.com" className="font-semibold text-brass-600 underline underline-offset-2">
                  alumnitrafalgar@gmail.com
                </a>
                .
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Alumni Office -------------------------------------------------------- */}
      <section id="contact" className="container-page scroll-mt-36 py-16 sm:py-20">
        <SectionHeading eyebrow="Contact Alumni Office" title="Get in touch with the Association" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-xs border border-navy-800/10 bg-parchment-100 p-5 shadow-card">
              <Mail className="h-5 w-5 shrink-0 text-brass-600" aria-hidden="true" />
              <a href="mailto:alumnitrafalgar@gmail.com" className="font-semibold text-navy-800 underline underline-offset-2">
                alumnitrafalgar@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 rounded-xs border border-navy-800/10 bg-parchment-100 p-5 shadow-card">
              <Phone className="h-5 w-5 shrink-0 text-brass-600" aria-hidden="true" />
              <span className="text-sm text-ink-muted">Placeholder â€” direct alumni office phone number to be confirmed.</span>
            </div>
          </div>

          <div className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
            <div className="flex items-center gap-3">
              <Landmark className="h-5 w-5 shrink-0 text-brass-600" aria-hidden="true" />
              <h3 className="font-display text-lg text-navy-800">Banking details</h3>
            </div>
            <dl className="prose-body mt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-4"><dt className="font-semibold text-navy-800">Bank</dt><dd>First National Bank</dd></div>
              <div className="flex justify-between gap-4"><dt className="font-semibold text-navy-800">Account name</dt><dd>Trafalgar Alumni Association NPO</dd></div>
              <div className="flex justify-between gap-4"><dt className="font-semibold text-navy-800">Account number</dt><dd>63020789963</dd></div>
              <div className="flex justify-between gap-4"><dt className="font-semibold text-navy-800">Branch code</dt><dd>255355</dd></div>
              <div className="flex justify-between gap-4"><dt className="font-semibold text-navy-800">Swift code</dt><dd>FIRNZAJJ</dd></div>
            </dl>
            <p className="mt-4 text-xs text-ink-muted">
              Please use your initial and surname as the payment reference, and email proof of payment
              to{" "}
              <a href="mailto:alumnitrafalgar@gmail.com" className="font-semibold text-brass-600 underline underline-offset-2">
                alumnitrafalgar@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action -------------------------------------------------------- */}
      <section className="bg-navy-800 py-16 text-parchment-100 sm:py-20">
        <div className="container-page flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow text-brass-300 mb-2">Stay Connected</p>
            <h2 className="font-display text-2xl sm:text-3xl">
              Trafalgar shaped you. Help shape what comes next.
            </h2>
            <p className="mt-3 max-w-xl text-parchment-200/85">
              Reconnect with the Alumni Association, share your story, or find a way to give back â€”
              every generation of Trafalgarians makes the next one stronger.
            </p>
          </div>
          <a
            href="mailto:alumnitrafalgar@gmail.com"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brass-500 px-6 py-3 font-semibold text-navy-900 shadow-card transition-colors hover:bg-brass-400"
          >
            Reconnect with Trafalgar
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}



