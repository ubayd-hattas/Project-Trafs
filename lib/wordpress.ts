// Reads news posts from the school's existing WordPress site through its
// public REST API. Staff keep publishing in WordPress as they do today; this
// site picks the posts up within an hour.

import { wordpressUrl } from "@/data/siteMode";

const API = `${wordpressUrl}/wp-json/wp/v2/posts`;
const REVALIDATE_SECONDS = 3600;
const TIMEOUT_MS = 8000;

export type SchoolPost = {
  id: number;
  title: string;
  date: string; // ISO date from WordPress
  url: string;
  image: { src: string; width: number; height: number } | null;
};

type WpMediaSize = { source_url: string; width: number; height: number };
type WpPost = {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url?: string;
      media_details?: { sizes?: Record<string, WpMediaSize> };
    }[];
  };
};

const entities: Record<string, string> = {
  amp: "&",
  quot: '"',
  apos: "'",
  nbsp: " ",
  lt: "<",
  gt: ">",
};

function cleanTitle(html: string): string {
  return (
    html
      .replace(/<[^>]+>/g, "")
      .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
      .replace(/&([a-z]+);/g, (m, name) => entities[name] ?? m)
      // Titles often open and close with emoji; screen readers announce each one.
      .replace(/[\p{Extended_Pictographic}\u{FE0F}\u{200D}]/gu, "")
      .replace(/\s*—\s*/g, ", ") // em dash
      .replace(/\s+/g, " ")
      .trim()
  );
}

function pickImage(post: WpPost): SchoolPost["image"] {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const sizes = media?.media_details?.sizes;
  const size = sizes?.medium_large ?? sizes?.large ?? sizes?.full;
  if (!size?.source_url) return null;
  return { src: size.source_url, width: size.width, height: size.height };
}

/** Returns the latest posts, or null if WordPress could not be reached. */
export async function getLatestPosts(count = 3): Promise<SchoolPost[] | null> {
  const url = `${API}?per_page=${count}&_embed=wp:featuredmedia&_fields=id,date,link,title,_links,_embedded`;
  try {
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) return null;
    const posts = (await res.json()) as WpPost[];
    return posts.map((p) => ({
      id: p.id,
      title: cleanTitle(p.title.rendered) || "School news",
      date: p.date,
      url: p.link,
      image: pickImage(p),
    }));
  } catch {
    return null;
  }
}
