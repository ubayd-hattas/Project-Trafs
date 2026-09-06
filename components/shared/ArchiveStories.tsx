import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { schoolArchive } from "@/data/schoolArchive";
export function ArchiveStories() {
  return (
    <div className="story-grid">
      {schoolArchive.map((p) => (
        <article key={p.slug}>
          <Link href={"/news-events#" + p.slug}>
            <div className="story-image">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(min-width:768px) 33vw,100vw"
              />
            </div>
            <p className="eyebrow mt-5">
              {p.category} <span>·</span> {p.year} archive
            </p>
            <h3 className="story-title">
              {p.title}{" "}
              <ArrowUpRight size={18} className="inline" aria-hidden="true" />
            </h3>
          </Link>
        </article>
      ))}
    </div>
  );
}
