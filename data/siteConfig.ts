// Site-wide constants. Facts marked "verified" were pulled from the live
// trafalgarhighschool.co.za site on 2 July 2026. Everything else is
// placeholder — see PLACEHOLDERS.md at the project root.

export const siteConfig = {
  name: "Trafalgar High School",
  shortName: "Trafalgar",
  motto: "Per Angusta, Ad Augusta",
  mottoTranslation: "Through difficulties, to honours",
  foundedYear: 1912, // verified
  tagline: "Cape Town's historic school for excellence, since 1912",
  description:
    "Trafalgar High School is the oldest school for people of colour in South Africa, founded in 1912. A proposal prototype for a modern, accessible school website.",
  url: "https://trafalgarhighschool.co.za",
  address: {
    line1: "35 Kuiper Street",
    line2: "Zonnebloem",
    city: "Cape Town",
    postalCode: "7925", // placeholder — confirm with school
    country: "South Africa",
  }, // verified (street & suburb)
  phone: "021 465 2969", // verified
  email: "info@trafalgarhighschool.co.za", // placeholder — confirm real inbox
  hours: "Monday – Friday: 8:00 – 15:00", // verified
  socials: {
    facebook: "https://facebook.com/", // placeholder
    instagram: "https://instagram.com/", // placeholder
  },
  latestPassRate: "96.4%", // verified, Class of 2024
  latestMatricYear: 2024,
} as const;

export const missionPoints = [
  "Building a caring, progressive and involved community of learners, educators and parents/guardians.",
  "Promoting positive, progressive values and attitudes that embrace understanding, tolerance and appreciation of the diverse cultures of South Africa.",
  "Giving full expression to our motto, Per Angusta, Ad Augusta — that we have the ability to overcome difficulties so that we succeed and emerge triumphantly.",
  "Cultivating and nurturing ethics of educational excellence amongst learners, educators and the parent community.",
  "Ensuring that accountability and transparency are the bedrock of all our activities.",
]; // verified, condensed from the existing site

export const historyIntro = `Trafalgar High School was founded in 1912, after Dr Abdurahman — President of the African People's Organisation and a city councillor at the time — campaigned for a co-educational school for people of colour in Cape Town. The school's first principal, Harold Cressy, was the first person of colour to earn a BA degree from the University of Cape Town. Both men understood that a good education was the surest means of changing social and economic circumstances, and that conviction has shaped the school for more than a century.`; // verified, condensed
