// Where the school's WordPress lives. Same default as data/siteMode.ts.
const wordpressUrl = (
  process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://trafalgarhighschool.co.za"
).replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    // News photos are served from the school's WordPress uploads.
    remotePatterns: [
      {
        protocol: "https",
        hostname: new URL(wordpressUrl).hostname,
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    // Addresses from the old WordPress site, so bookmarks and staff logins
    // keep working after the domain points here. Not permanent, in case the
    // school renames things later.
    const fromOldSite = [
      ["/about-us", "/about"],
      ["/admissions-and-programs", "/admissions"],
      ["/subject-streams", "/academics#subjects"],
      ["/staff", "/about#leadership"],
      ["/news", "/news-events"],
      ["/events", "/news-events#key-dates"],
      ["/whats-happening", "/news-events"],
      ["/110-years", "/about#history"],
      ["/important-wced-links", "/admissions#application-process"],
      ["/contact-us", "/contact"],
      ["/past-exam-papers", `${wordpressUrl}/past-exam-papers/`],
      ["/welcome-note", `${wordpressUrl}/welcome-note/`],
      ["/trafs-alumni-society", `${wordpressUrl}/trafs-alumni-society/`],
      ["/wp-admin", `${wordpressUrl}/wp-admin/`],
      ["/wp-admin/:path*", `${wordpressUrl}/wp-admin/:path*`],
      ["/wp-login.php", `${wordpressUrl}/wp-login.php`],
      ["/wp-content/:path*", `${wordpressUrl}/wp-content/:path*`],
    ].map(([source, destination]) => ({ source, destination, permanent: false }));
    return [
      ...fromOldSite,
{"source":"/about/mission-vision","destination":"/about#mission","permanent":true},
{"source":"/about/school-governing-body","destination":"/policies","permanent":true},
{"source":"/about/facilities","destination":"/about#welcome","permanent":true},
{"source":"/admissions/requirements","destination":"/admissions#requirements","permanent":true},
{"source":"/admissions/fees","destination":"/admissions#fees","permanent":true},
{"source":"/admissions/key-dates","destination":"/admissions#application-process","permanent":true},
{"source":"/admissions/faq","destination":"/admissions#faq","permanent":true},
{"source":"/academics/academic-support","destination":"/academics#support","permanent":true},
{"source":"/student-life/sport","destination":"/student-life#sport","permanent":true},
{"source":"/student-life/culture-arts","destination":"/student-life#culture-arts","permanent":true},
{"source":"/student-life/clubs-societies","destination":"/student-life#culture-arts","permanent":true},
{"source":"/student-life/leadership","destination":"/student-life#leadership","permanent":true},
{"source":"/student-life/code-of-conduct","destination":"/student-life#code-of-conduct","permanent":true},
{"source":"/news-events/news","destination":"/news-events#latest-news","permanent":true},
{"source":"/news-events/events","destination":"/news-events#key-dates","permanent":true},
{"source":"/news-events/newsletters","destination":"/news-events#newsletter-archive","permanent":true},
{"source":"/alumni/association","destination":"/alumni#association","permanent":true},
{"source":"/alumni/stories","destination":"/alumni#stories","permanent":true},
{"source":"/alumni/reunions-events","destination":"/alumni#association","permanent":true},
{"source":"/alumni/give-back","destination":"/alumni#give-back","permanent":true},
      {
        source: "/about/our-history",
        destination: "/about#history",
        permanent: true,
      },
      {
        source: "/about/principal-message",
        destination: "/about#principal",
        permanent: true,
      },
      {
        source: "/about/staff",
        destination: "/about#leadership",
        permanent: true,
      },
      {
        source: "/academics/matric-results",
        destination: "/academics#matric-results",
        permanent: true,
      },
      {
        source: "/academics/curriculum",
        destination: "/academics#curriculum",
        permanent: true,
      },
      {
        source: "/academics/past-papers",
        destination: "/academics#past-papers",
        permanent: true,
      },
      {
        source: "/admissions/how-to-apply",
        destination: "/admissions#application-process",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
