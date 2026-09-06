/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ["image/webp"] },
  async redirects() {
    return [
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
{"source":"/news-events/events","destination":"/news-events#events","permanent":true},
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
