import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Megaphone,
  CalendarDays,
  GraduationCap,
  Trophy,
  Palette,
  HandHeart,
  Facebook,
  Instagram,
  Youtube,
  Image as ImageIcon,
} from "lucide-react";
import { PageHero } from '@/components/shared/PageHero';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { DocumentListItem } from '@/components/shared/DocumentListItem';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Trafalgar High School's communications hub — the latest news, announcements, upcoming events, newsletters and school highlights, all in one place.",
};

// Placeholder content only — see summary notes for exact fields to replace
// once real news, events and newsletters are confirmed with the school.
const newsItems = [
  {
    category: "Academic",
    date: "Placeholder date",
    headline: "Grade 12s Deliver Strong Trial Exam Results",
    summary: "A short placeholder summary of the story goes here — replace with the real report once available.",
    image: "/placeholders/news-1.jpg",
  },
  {
    category: "Sport",
    date: "Placeholder date",
    headline: "First XI Cricket Team Advances to Regional Final",
    summary: "A short placeholder summary of the story goes here — replace with the real report once available.",
    image: "/placeholders/news-2.jpg",
  },
  {
    category: "Culture",
    date: "Placeholder date",
    headline: "Trafalgar Choir Shines at Inter-School Eisteddfod",
    summary: "A short placeholder summary of the story goes here — replace with the real report once available.",
    image: "/placeholders/news-3.jpg",
  },
  {
    category: "Community",
    date: "Placeholder date",
    headline: "Alumni Association Hosts Career Mentorship Evening",
    summary: "A short placeholder summary of the story goes here — replace with the real report once available.",
    image: "/placeholders/news-4.jpg",
  },
  {
    category: "Announcement",
    date: "Placeholder date",
    headline: "New Term Dates Published for 2026",
    summary: "A short placeholder summary of the story goes here — replace with the real report once available.",
    image: "/placeholders/news-5.jpg",
  },
  {
    category: "Achievement",
    date: "Placeholder date",
    headline: "Learner Selected for Provincial Mathematics Olympiad",
    summary: "A short placeholder summary of the story goes here — replace with the real report once available.",
    image: "/placeholders/news-6.jpg",
  },
];

const announcements = [
  { title: "Admissions Open", body: "Placeholder — confirm the current admissions window and link to the Admissions page." },
  { title: "Examination Timetables", body: "Placeholder — link the current term's examination timetable once published." },
  { title: "Parent Meetings", body: "Placeholder — confirm date, grade and venue for the next parent meeting." },
  { title: "School Closures", body: "Placeholder — confirm any upcoming school closure or public holiday notices." },
];

const upcomingEvents = [
  { title: "Parent Evening", date: "Placeholder date" },
  { title: "Sports Day", date: "Placeholder date" },
  { title: "Prize Giving", date: "Placeholder date" },
  { title: "Open Day", date: "Placeholder date" },
  { title: "Cultural Evening", date: "Placeholder date" },
  { title: "Matric Farewell", date: "Placeholder date" },
];

const newsletters = [
  { title: "Term 1 Newsletter", meta: "Placeholder — link the real PDF once available" },
  { title: "Term 2 Newsletter", meta: "Placeholder — link the real PDF once available" },
  { title: "Term 3 Newsletter", meta: "Placeholder — link the real PDF once available" },
  { title: "Annual Newsletter", meta: "Placeholder — link the real PDF once available" },
];

const highlights = [
  { icon: GraduationCap, title: "Academic Achievements", body: "Distinctions, subject awards and olympiad results earned by Trafalgar learners." },
  { icon: Trophy, title: "Sporting Success", body: "Wins, provincial selections and team milestones across our sporting codes." },
  { icon: Palette, title: "Cultural Activities", body: "Choir, drama, debate and music — Trafalgar's creative and cultural life." },
  { icon: HandHeart, title: "Community Outreach", body: "How learners, staff and alumni give back to the wider community." },
];

const galleryPreview = [
  "/placeholders/gallery-1.jpg",
  "/placeholders/gallery-2.jpg",
  "/placeholders/gallery-3.jpg",
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const newsEventsFaq = [
  {
    question: "How will I find out about important school announcements?",
    answer:
      "Important notices — admissions windows, exam timetables, parent meetings and closures — are published in the Featured Announcement section on this page, and shared through the school's official channels.",
  },
  {
    question: "Where can I find the term newsletter?",
    answer:
      "All newsletters are archived in the Newsletter Archive section on this page, organised by term, with an annual edition once available.",
  },
  {
    question: "Who do I contact if I have a question about a news item or event?",
    answer: "Please get in touch with the school office via the Contact page — details are in the Call To Action below.",
  },
];

export default function NewsEventsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="News & Events"
        title="Stay Connected with Trafalgar"
        description="Your hub for school life — the latest news, achievements, important announcements and upcoming events, all in one place."
        image="/placeholders/news-hero.jpg"
      />
      <Breadcrumbs trail={[{ label: "News & Events" }]} />

      {/* Latest News */}
      <section id="latest-news" className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="Latest News" title="What's Happening at Trafalgar" description="Stories, achievements and updates from around the school." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.headline} className="flex flex-col overflow-hidden rounded-xs border border-navy-800/10 bg-parchment-100 shadow-card transition-shadow hover:shadow-cardHover">
              <div className="relative h-40 w-full">
                <PlaceholderImage src={item.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-xs bg-brass-500/15 px-2 py-1 font-semibold uppercase tracking-wide text-brass-700">{item.category}</span>
                  <span className="text-ink-muted">{item.date}</span>
                </div>
                <h3 className="mt-3 font-display text-lg text-navy-800">{item.headline}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-light">{item.summary}</p>
                <Link href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-600">
                  Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-muted">
          Placeholder articles — individual news article pages are not yet built; replace with real stories once the content pipeline in <code>data/news.ts</code> is live.
        </p>
      </section>

      {/* Featured Announcement */}
      <section className="bg-navy-800 py-16 sm:py-20 text-parchment-100">
        <div className="container-page">
          <p className="eyebrow text-brass-300 mb-3">Featured Announcement</p>
          <h2 className="font-display text-2xl sm:text-3xl text-parchment-100 max-w-2xl">Important Notices</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {announcements.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xs border border-parchment-100/15 bg-navy-900/40 p-5">
                <Megaphone className="mt-0.5 h-6 w-6 shrink-0 text-brass-300" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg text-parchment-100">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-parchment-200/80">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="Calendar" title="Upcoming Events" description="Key dates on the school calendar this term." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <div key={event.title} className="rounded-xs border border-navy-800/10 bg-parchment-100 p-5 shadow-card">
              <CalendarDays className="h-6 w-6 text-brass-600" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg text-navy-800">{event.title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{event.date}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-muted">
          Placeholder dates — replace with the real, current-term dates once confirmed with the school office.
        </p>
      </section>

      {/* Newsletter Archive */}
      <section id="newsletter-archive" className="bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Newsletters" title="Newsletter Archive" description="Download the latest school newsletters." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-3xl">
            {newsletters.map((n) => (
              <DocumentListItem key={n.title} title={n.title} meta={n.meta} href="#" />
            ))}
          </div>
        </div>
      </section>

      {/* School Highlights */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="Highlights" title="School Highlights" align="center" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card">
              <Icon className="h-7 w-7 text-brass-600" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-navy-800">{title}</h3>
              <p className="mt-2 text-sm text-ink-light">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Gallery" title="A Glimpse of School Life" description="See more on our full Gallery page." />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {galleryPreview.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xs shadow-card">
                <PlaceholderImage src={src} alt="" fill className="object-cover" sizes="(min-width: 640px) 33vw, 100vw" />
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button href="/gallery" variant="ghost">
              <ImageIcon className="mr-1.5 h-4 w-4" aria-hidden="true" />
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="Follow Us" title="Stay Connected" align="center" />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2.5 rounded-xs border border-navy-800/10 bg-parchment-100 px-5 py-3 shadow-card transition-shadow hover:shadow-cardHover"
            >
              <Icon className="h-5 w-5 text-brass-600" aria-hidden="true" />
              <span className="font-semibold text-navy-800">{label}</span>
            </a>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-ink-muted">
          Placeholder — confirm and link the school's official social media accounts once available.
        </p>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-8">
            <Accordion items={newsEventsFaq} />
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CTASection
        title="Never Miss an Update"
        description="Check back regularly for the latest news and events, or get in touch if you have a question."
        primary={{ label: "Contact the School", href: "/contact" }}
        secondary={{ label: "View Newsletter Archive", href: "#newsletter-archive" }}
      />
    </>
  );
}
