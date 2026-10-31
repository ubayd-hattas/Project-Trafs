// Settings for moving from proposal to official site. Set these in
// Vercel > Project > Settings > Environment Variables, then redeploy.
// See docs/HANDOVER.md.

/** "true" once the school adopts the site: allows search engines and drops the proposal wording. */
export const isOfficialSite = process.env.NEXT_PUBLIC_OFFICIAL_SITE === "true";

/** Where the school's WordPress (news, past papers, staff login) lives. */
export const wordpressUrl = (
  process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://trafalgarhighschool.co.za"
).replace(/\/$/, "");
