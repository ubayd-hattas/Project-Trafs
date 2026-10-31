import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/siteUrl";
import { isOfficialSite } from "@/data/siteMode";
export default function robots(): MetadataRoute.Robots {
  return {
    // Proposal copies stay out of search results until the school adopts the site.
    rules: isOfficialSite
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: siteUrl + "/sitemap.xml",
  };
}
