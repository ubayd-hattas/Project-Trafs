const fs = require('fs');
const path = require('path');

const root = path.join(process.cwd());

// Mapping of component files to their new directories inside 'components/'
const componentMap = {
  'Accordion.tsx': 'ui',
  'Badge.tsx': 'ui',
  'Button.tsx': 'ui',
  'StatCounter.tsx': 'ui',
  'Header.tsx': 'layout',
  'Footer (2).tsx': 'layout/Footer.tsx', // Needs renaming
  'MobileNavDrawer.tsx': 'layout',
  'Breadcrumbs.tsx': 'shared',
  'PageHero.tsx': 'shared',
  'SectionHeading.tsx': 'shared',
  'PlaceholderImage.tsx': 'shared',
  'CTASection.tsx': 'shared',
  'QuoteBlock.tsx': 'shared',
  'AchievementBadgeCard.tsx': 'home', // or shared
  'AlumniStoryCard.tsx': 'alumni',
  'EventCard.tsx': 'news-events',
  'NewsCard.tsx': 'news-events',
  'DocumentListItem.tsx': 'shared',
  'PhotoGallery.tsx': 'gallery',
  'StaffCard.tsx': 'about',
  'Timeline.tsx': 'about',
  'AdmissionsEnquiryForm.tsx': 'admissions',
  'ContactForm.tsx': 'contact',
  'HomeHero.tsx': 'home',
};

// Data files map
const dataFiles = [
  'achievements.ts', 'alumni.ts', 'documents.ts', 'events.ts',
  'faq.ts', 'gallery.ts', 'navigation.ts', 'news.ts',
  'siteConfig.ts', 'staff.ts', 'studentLife.ts', 'timeline.ts'
];

// Pages map (original name to new relative path inside app/)
const pagesMap = {
  'page (8).tsx': 'page.tsx',
  'page (9).tsx': 'about/page.tsx',
  'page (10).tsx': 'about/our-history/page.tsx',
  'page (11).tsx': 'about/mission-vision/page.tsx',
  'page (12).tsx': 'about/principal-message/page.tsx',
  'page (13).tsx': 'about/staff/page.tsx',
  'page (14).tsx': 'about/school-governing-body/page.tsx',
  'page (15).tsx': 'about/facilities/page.tsx',
  'page (16).tsx': 'admissions/page.tsx',
  'page (17).tsx': 'admissions/how-to-apply/page.tsx',
  'page (18).tsx': 'admissions/requirements/page.tsx',
  'page (19).tsx': 'admissions/fees/page.tsx',
  'page (20).tsx': 'admissions/key-dates/page.tsx',
  'page (21).tsx': 'admissions/faq/page.tsx',
  'page (22).tsx': 'academics/page.tsx',
  'page (23).tsx': 'academics/curriculum/page.tsx',
  'page (24).tsx': 'academics/matric-results/page.tsx',
  'page (25).tsx': 'academics/past-papers/page.tsx',
  'page (26).tsx': 'academics/academic-support/page.tsx',
  'layout.tsx': 'layout.tsx',
  'globals.css': 'globals.css'
};

const dirsToCreate = [
  'app',
  'app/about', 'app/about/our-history', 'app/about/mission-vision', 'app/about/principal-message', 'app/about/staff', 'app/about/school-governing-body', 'app/about/facilities',
  'app/admissions', 'app/admissions/how-to-apply', 'app/admissions/requirements', 'app/admissions/fees', 'app/admissions/key-dates', 'app/admissions/faq',
  'app/academics', 'app/academics/curriculum', 'app/academics/matric-results', 'app/academics/past-papers', 'app/academics/academic-support',
  'app/student-life', 'app/student-life/sport', 'app/student-life/culture-arts', 'app/student-life/clubs-societies', 'app/student-life/leadership', 'app/student-life/code-of-conduct',
  'app/news-events', 'app/news-events/news', 'app/news-events/events', 'app/news-events/newsletters',
  'app/achievements', 'app/achievements/academic', 'app/achievements/sport-culture', 'app/achievements/alumni-success',
  'app/alumni', 'app/alumni/association', 'app/alumni/stories', 'app/alumni/reunions-events', 'app/alumni/give-back',
  'app/giving', 'app/giving/donate', 'app/giving/partnerships-sponsorship',
  'app/gallery', 'app/contact', 'app/policies',
  'components',
  'components/ui', 'components/layout', 'components/shared', 'components/home', 'components/about', 'components/alumni', 'components/news-events', 'components/gallery', 'components/admissions', 'components/contact',
  'data',
  'public/placeholders'
];

dirsToCreate.forEach(dir => {
  const p = path.join(root, dir);
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p, { recursive: true });
  }
});

// Move components
for (const [file, destDir] of Object.entries(componentMap)) {
  const src = path.join(root, file);
  if (fs.existsSync(src)) {
    let destName = file;
    let finalDestDir = destDir;
    if (destDir.includes('/')) {
        const parts = destDir.split('/');
        finalDestDir = parts[0];
        destName = parts[1];
    }
    const dest = path.join(root, 'components', finalDestDir, destName);
    fs.renameSync(src, dest);
  }
}

// Move data
for (const file of dataFiles) {
  const src = path.join(root, file);
  if (fs.existsSync(src)) {
    const dest = path.join(root, 'data', file);
    fs.renameSync(src, dest);
  }
}

// Move pages
for (const [file, destFile] of Object.entries(pagesMap)) {
  const src = path.join(root, file);
  if (fs.existsSync(src)) {
    const dest = path.join(root, 'app', destFile);
    fs.renameSync(src, dest);
  }
}

console.log('Files moved successfully.');

// Now we need a second script to rewrite imports. Let's do a basic one.
// The easiest way is to let the user or an IDE update imports, but we can do a naive replace:
// from "./Component" -> "@/components/.../Component"
// Let's create an alias mapping to help Next.js resolve `@/*`.
// `tsconfig.json` needs `"paths": { "@/*": ["./*"] }`.
