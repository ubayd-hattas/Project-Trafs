// Site-wide constants. Facts marked "verified" were read from the live
// trafalgarhighschool.co.za site (2 July 2026, rechecked 31 October 2026).
// Anything else is listed in PLACEHOLDERS.md.

import { wordpressUrl } from "./siteMode";

export const siteConfig = {
  name: "Trafalgar High School",
  shortName: "Trafalgar",
  motto: "Per Angusta, Ad Augusta",
  mottoTranslation: "Through difficulties, to honours",
  foundedYear: 1912, // verified
  tagline: "Zonnebloem, Cape Town, since 1912",
  description:
    "Trafalgar High School is a public high school for Grades 8 to 12 in Zonnebloem, Cape Town, founded in District Six in 1912.",
  url: "https://trafalgarhighschool.co.za",
  address: {
    line1: "35 Kuiper Street",
    line2: "Zonnebloem",
    city: "Cape Town",
    country: "South Africa",
  }, // verified (street and suburb)
  phone: "021 465 2969", // verified
  phoneHref: "tel:+27214652969",
  email: "Trafalgarhigh2021@gmail.com", // verified on the live site, 31 October 2026
  hours: "Monday to Friday, 08:00 to 15:00", // verified
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Trafalgar+High+School+35+Kuiper+Street+Cape+Town",
  // Pages that stay on the school WordPress site.
  newsArchiveUrl: `${wordpressUrl}/news/`,
  pastPapersUrl: `${wordpressUrl}/past-exam-papers/`,
  principalWelcomeUrl: `${wordpressUrl}/welcome-note/`,
  alumniSocietyUrl: `${wordpressUrl}/trafs-alumni-society/`,
  latestPassRate: "96.4%", // verified, Class of 2024
  latestMatricYear: 2024,
} as const;

export const missionPoints = [
  "Building a caring, progressive and involved community of learners, educators and parents/guardians.",
  "Promoting positive, progressive values and attitudes that embrace understanding, tolerance and appreciation of the diverse cultures of South Africa.",
  "Giving full expression to our motto, Per Angusta, Ad Augusta: that we have the ability to overcome difficulties so that we succeed and emerge triumphantly.",
  "Cultivating and nurturing ethics of educational excellence amongst learners, educators and the parent community.",
  "Ensuring that accountability and transparency are the bedrock of all our activities.",
]; // verified, condensed from the existing site

export const historyIntro = `Trafalgar High School was founded in 1912 after Dr Abdurahman, President of the African People's Organisation and a city councillor at the time, campaigned for a co-educational school for people of colour in Cape Town. The school's first principal, Harold Cressy, was the first person of colour to earn a BA degree from the University of Cape Town. Both men believed a good education was the surest way to change a family's social and economic circumstances.`; // verified, condensed
