// Vercel supplies the preview origin. Set NEXT_PUBLIC_SITE_URL for a custom deployment.
const deployment =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? "https://" + process.env.VERCEL_URL
    : "http://localhost:3000");
export const siteUrl = deployment.replace(/\/$/, "");
