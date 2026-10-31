import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

type Task = { label: string; href: string };
type Audience = { title: string; who: string; tasks: Task[] };

const audiences: Audience[] = [
  {
    title: "Parents",
    who: "Your child is at Trafalgar",
    tasks: [
      { label: "Term dates", href: "/news-events#key-dates" },
      { label: "School news", href: "/news-events" },
      { label: "Fees and documents", href: "/parents-portal" },
      { label: "Call the office", href: siteConfig.phoneHref },
    ],
  },
  {
    title: "New families",
    who: "Applying for Grade 8 or a transfer",
    tasks: [
      { label: "How to apply", href: "/admissions#application-process" },
      { label: "Documents you need", href: "/admissions#requirements" },
      { label: "Subjects we offer", href: "/academics#subjects" },
      { label: "Visit the school", href: "/contact" },
    ],
  },
  {
    title: "Learners",
    who: "Grades 8 to 12",
    tasks: [
      { label: "Past exam papers", href: "/academics#past-papers" },
      { label: "Choosing subjects", href: "/academics#subjects" },
      { label: "Sport and activities", href: "/student-life" },
    ],
  },
  {
    title: "Old Trafalgarians",
    who: "Former learners and staff",
    tasks: [
      { label: "Reconnect with the school", href: "/alumni#association" },
      { label: "Our history since 1912", href: "/about#history" },
      { label: "Ways to give back", href: "/alumni#give-back" },
    ],
  },
];

export function AudienceRouter() {
  return (
    <section className="editorial-section" aria-labelledby="router-heading">
      <div className="container-page">
        <p className="eyebrow">Start here</p>
        <h2 id="router-heading" className="section-heading mt-3">
          What are you looking for?
        </h2>
        <div className="router-grid">
          {audiences.map((a) => (
            <div className="router-card" key={a.title}>
              <h3>{a.title}</h3>
              <p>{a.who}</p>
              <ul>
                {a.tasks.map((t) => (
                  <li key={t.label}>
                    {t.href.startsWith("tel:") ? (
                      <a href={t.href}>
                        {t.label}: {siteConfig.phone}
                        <ArrowRight size={18} aria-hidden="true" />
                      </a>
                    ) : (
                      <Link href={t.href}>
                        {t.label}
                        <ArrowRight size={18} aria-hidden="true" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
