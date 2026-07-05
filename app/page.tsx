import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeHero } from '@/components/home/HomeHero';
import { StatCounter } from '@/components/ui/StatCounter';
import { NewsCard } from '@/components/news-events/NewsCard';
import { EventCard } from '@/components/news-events/EventCard';
import { AchievementBadgeCard } from '@/components/home/AchievementBadgeCard';
import { AlumniStoryCard } from '@/components/alumni/AlumniStoryCard';
import { Timeline } from '@/components/about/Timeline';
import { CTASection } from '@/components/shared/CTASection';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Button } from '@/components/ui/Button';
import { siteConfig, historyIntro } from '@/data/siteConfig';
import { newsPosts } from '@/data/news';
import { events } from '@/data/events';
import { achievements } from '@/data/achievements';
import { alumniStories } from '@/data/alumni';
import { timeline } from '@/data/timeline';
import { galleryItems } from '@/data/gallery';

export const metadata: Metadata = {
  title: `${siteConfig.name} — Cape Town's historic school of excellence`,
  description: `Trafalgar High School — founded in 1912 in Zonnebloem, Cape Town. South Africa's oldest co-educational school for people of colour.`,
};

export default function HomePage() {
  const latestNews = newsPosts.slice(0, 4);
  const upcomingEvents = events.slice(0, 4);
  const featuredAchievements = achievements.slice(0, 3);
  const featuredAlumni = alumniStories.slice(0, 2);
  const historyPreview = timeline.slice(0, 3);
  const studentLifeShots = galleryItems.filter((g: any) => g.category !== "History").slice(0, 6);

  return (
    <>
      <HomeHero />

      {/* Quick stats strip */}
      <section aria-label="Trafalgar at a glance" className="border-b border-navy-800/10 bg-parchment-100 py-12">
        <div className="container-page grid grid-cols-2 gap-8 sm:grid-cols-4">
          <StatCounter value={siteConfig.foundedYear} label="Year founded" />
          <StatCounter value={2026 - siteConfig.foundedYear} suffix="+" label="Years of heritage" />
          <StatCounter value={96.4} suffix="%" label="Matric pass rate" />
          <StatCounter value={500} suffix="+" label="Notable alumni" />
        </div>
      </section>

      {/* Welcome message condensed */}
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-3">A Message From Our Principal</p>
            <h2 className="section-heading">Welcome to Trafalgar</h2>
            <p className="prose-body mt-5 text-lg">
              As the oldest school for people of colour in South Africa, Trafalgar High School has a proud
              history both in terms of providing superior education and ensuring that our students understand
              their responsibility in society and their communities. These values — embodied in our motto
              <em> Per Angusta, Ad Augusta</em> — have endured for more than a century and continue to
              define everything we do.
            </p>
            <Link
              href="/about#principal"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors hover:text-brass-600"
            >
              Read the full message <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs shadow-card">
            <PlaceholderImage src="/placeholders/principal.webp" alt="The Principal of Trafalgar High School" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
        </div>
      </section>

      {/* Latest news */}
      <section className="bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="News & Events" title="What's happening at Trafalgar" />
            <Button href="/news-events/news" variant="ghost">
              View all news
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {latestNews.map((post: any) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements spotlight */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Achievements" title="Excellence, term after term" />
            <Button href="/achievements/academic" variant="ghost">
              View all achievements
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {featuredAchievements.map((a: any) => (
              <AchievementBadgeCard key={a.id} achievement={a} />
            ))}
          </div>
        </div>
      </section>

      {/* History teaser */}
      <section className="bg-navy-900 py-16 text-parchment-100 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-brass-300 mb-3">Since 1912</p>
            <h2 className="font-display text-3xl sm:text-4xl text-parchment-100">A history worth telling</h2>
            <p className="mt-5 text-parchment-200/85 leading-relaxed">{historyIntro}</p>
            <Link
              href="/about/our-history"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass-300 hover:text-brass-200"
            >
              Explore our history <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="text-parchment-100">
            <Timeline milestones={historyPreview} />
          </div>
        </div>
      </section>

      {/* Academics & admissions strip */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Get Started" title="Everything a family needs to know" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Why Trafalgar", body: "A values-driven, high-achieving school with over a century of heritage.", href: "/about" },
              { title: "How to Apply", body: "A clear, step-by-step admissions process for Grade 8 and beyond.", href: "/admissions/how-to-apply" },
              { title: "Our Curriculum", body: "CAPS-aligned subjects across the senior and FET phases.", href: "/academics/curriculum" },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-xs border border-navy-800/10 bg-parchment-100 p-6 shadow-card transition-shadow hover:shadow-cardHover"
              >
                <h3 className="font-display text-xl text-navy-800">{card.title}</h3>
                <p className="prose-body mt-2">{card.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-600">
                  Learn more{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Student life gallery */}
      <section className="bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Student Life" title="Sport, culture, and everything between" />
            <Button href="/gallery" variant="ghost">
              View gallery
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {studentLifeShots.map((shot: any) => (
              <div key={shot.id} className="relative aspect-square overflow-hidden rounded-xs">
                <PlaceholderImage src={shot.image} alt={shot.title} fill className="object-cover" sizes="20vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni spotlight */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Alumni" title="Where Trafalgar learners go next" />
            <Button href="/alumni/stories" variant="ghost">
              Read more stories
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {featuredAlumni.map((story: any) => (
              <AlumniStoryCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="bg-parchment-300/50 py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Calendar" title="Upcoming events" />
            <Button href="/news-events/events" variant="ghost">
              Full calendar
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((event: any) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Community / giving CTA */}
      <CTASection
        title="Giving is receiving"
        description="Join the Alumni Association, mentor a current learner, or make a gift that keeps Trafalgar's next century as strong as its first."
        primary={{ label: "Support Trafalgar", href: "/giving/donate" }}
        secondary={{ label: "Join the Alumni Association", href: "/alumni/association" }}
      />

      {/* Contact & location strip */}
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Visit Us" title="Find us in Zonnebloem" />
            <dl className="prose-body mt-6 space-y-3">
              <div>
                <dt className="font-semibold text-navy-800">Address</dt>
                <dd>
                  {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-800">Phone</dt>
                <dd>{siteConfig.phone}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-800">School hours</dt>
                <dd>{siteConfig.hours}</dd>
              </div>
            </dl>
            <Button href="/contact" variant="primary" className="mt-6">
              Get in touch
            </Button>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs">
            <PlaceholderImage src="/placeholders/map.svg" alt="Placeholder campus map" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
        </div>
      </section>
    </>
  );
}
