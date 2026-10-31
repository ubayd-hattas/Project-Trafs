import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getLatestPosts } from "@/lib/wordpress";
import { siteConfig } from "@/data/siteConfig";
import { ArchiveStories } from "@/components/shared/ArchiveStories";

const dateFormat = new Intl.DateTimeFormat("en-ZA", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Africa/Johannesburg",
});

export async function LatestNews({ count = 3 }: { count?: number }) {
  const posts = await getLatestPosts(count);

  if (posts === null) {
    return (
      <div>
        <p className="news-status" role="status">
          The latest school news could not be loaded just now. You can read it
          on the{" "}
          <a className="font-bold underline" href={siteConfig.newsArchiveUrl}>
            school news page
          </a>
          . Here are some photographs from the 2025 school archive instead.
        </p>
        <div className="mt-10">
          <ArchiveStories />
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <p className="news-status" role="status">
        There is no school news posted yet this term. For notices, call the
        office on {siteConfig.phone}.
      </p>
    );
  }

  return (
    <ul className="news-grid">
      {posts.map((post) => (
        <li className="news-card" key={post.id}>
          <a href={post.url}>
            <div className="news-image">
              {post.image ? (
                <Image
                  src={post.image.src}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 400px, (min-width:768px) 50vw, 100vw"
                />
              ) : (
                <Image
                  src="/images/crest.png"
                  alt=""
                  width={120}
                  height={140}
                  className="absolute inset-0 m-auto opacity-40"
                />
              )}
            </div>
            <time dateTime={post.date}>
              {dateFormat.format(new Date(post.date + "+02:00"))}
            </time>
            <h3>
              {post.title}
              <ArrowUpRight
                size={20}
                className="ml-1 inline align-baseline"
                aria-hidden="true"
              />
              <span className="sr-only"> (opens the full post)</span>
            </h3>
          </a>
        </li>
      ))}
    </ul>
  );
}
