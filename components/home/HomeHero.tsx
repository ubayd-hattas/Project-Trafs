import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
export function HomeHero() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Trafalgar High School · Since 1912</p>
          <h1>
            A proud history.
            <br />A world of
            <br />
            <em>possibility.</em>
          </h1>
          <p className="hero-intro">
            Rooted in Cape Town. Shaped by courage.
            <br className="hidden sm:block" /> A school community built on the
            belief that education opens doors.
          </p>
          <div className="hero-actions">
            <Button href="/admissions" variant="secondary">
              Explore admissions <ArrowUpRight size={17} />
            </Button>
            <Link className="text-link" href="/about#history">
              Our story <ArrowRight size={17} />
            </Link>
          </div>
          <p className="hero-motto">
            Per Angusta, Ad Augusta
            <span>Through difficulties, to honours.</span>
          </p>
        </div>
        <figure className="hero-photo">
          <Image
            src="/images/campus.webp"
            alt="The historic Trafalgar High School building in Zonnebloem"
            fill
            priority
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover"
          />
          <figcaption>
            <span>Our place in Cape Town</span>
            <span>Zonnebloem · District Six</span>
          </figcaption>
        </figure>
      </section>
      <nav className="home-journeys" aria-label="Popular school journeys">
        <div className="container-page">
          {[
            {
              title: "Learning at Trafalgar",
              sub: "Academics & curriculum",
              href: "/academics",
            },
            {
              title: "Our matric record",
              sub: "Class of 2024 results",
              href: "/academics#matric-results",
            },
            {
              title: "Life beyond the classroom",
              sub: "Sport, culture & community",
              href: "/student-life",
            },
          ].map((i) => (
            <Link key={i.href} href={i.href}>
              <span>
                <small>{i.sub}</small>
                <strong>{i.title}</strong>
              </span>
              <ArrowUpRight size={22} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
