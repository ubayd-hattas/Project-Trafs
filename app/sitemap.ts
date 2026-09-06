import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/siteUrl";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/admissions",
    "/academics",
    "/student-life",
    "/news-events",
    "/contact",
    "/alumni",
    "/gallery",
    "/parents-portal",
    "/policies",
    "/privacy-policy",
    "/site-credits",
    "/sitemap-page",
  ].map((p) => ({
    url: siteUrl + p,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
