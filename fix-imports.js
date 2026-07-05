const fs = require('fs');
const path = require('path');

const root = process.cwd();

// Component mapping to figure out the right path
const componentMap = {
  'Accordion': '@/components/ui/Accordion',
  'Badge': '@/components/ui/Badge',
  'Button': '@/components/ui/Button',
  'StatCounter': '@/components/ui/StatCounter',
  'Header': '@/components/layout/Header',
  'Footer': '@/components/layout/Footer', // Was Footer (2)
  'MobileNavDrawer': '@/components/layout/MobileNavDrawer',
  'Breadcrumbs': '@/components/shared/Breadcrumbs',
  'PageHero': '@/components/shared/PageHero',
  'SectionHeading': '@/components/shared/SectionHeading',
  'PlaceholderImage': '@/components/shared/PlaceholderImage',
  'CTASection': '@/components/shared/CTASection',
  'QuoteBlock': '@/components/shared/QuoteBlock',
  'AchievementBadgeCard': '@/components/home/AchievementBadgeCard',
  'AlumniStoryCard': '@/components/alumni/AlumniStoryCard',
  'EventCard': '@/components/news-events/EventCard',
  'NewsCard': '@/components/news-events/NewsCard',
  'DocumentListItem': '@/components/shared/DocumentListItem',
  'PhotoGallery': '@/components/gallery/PhotoGallery',
  'StaffCard': '@/components/about/StaffCard',
  'Timeline': '@/components/about/Timeline',
  'AdmissionsEnquiryForm': '@/components/admissions/AdmissionsEnquiryForm',
  'ContactForm': '@/components/contact/ContactForm',
  'HomeHero': '@/components/home/HomeHero'
};

const dataFiles = [
  'achievements', 'alumni', 'documents', 'events',
  'faq', 'gallery', 'navigation', 'news',
  'siteConfig', 'staff', 'studentLife', 'timeline'
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    if (file === 'node_modules' || file === '.next' || file === '.git') continue;
    
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixImports(fullPath);
    }
  }
}

function fixImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;
  
  // Replace relative data imports: from './datafile' or '../datafile' -> '@/data/datafile'
  for (const dataFile of dataFiles) {
    // Regex for matching the import of the specific data file
    const regex = new RegExp(`from\\s+['"]\\.?\\.?\\/?${dataFile}(\\.ts)?['"]`, 'g');
    content = content.replace(regex, `from '@/data/${dataFile}'`);
  }
  
  // Replace relative component imports
  for (const [comp, alias] of Object.entries(componentMap)) {
    const regex = new RegExp(`from\\s+['"]\\.?\\.?\\/?${comp}(\\.tsx)?['"]`, 'g');
    content = content.replace(regex, `from '${alias}'`);
    
    // Also catch "Footer (2)" specifically
    if (comp === 'Footer') {
        const regex2 = new RegExp(`from\\s+['"]\\.?\\.?\\/?Footer \\(2\\)(\\.tsx)?['"]`, 'g');
        content = content.replace(regex2, `from '${alias}'`);
    }
  }

  // Also replace imports of global.css inside layout.tsx to be `./globals.css` or `@/app/globals.css`
  if (filePath.endsWith('layout.tsx')) {
     content = content.replace(/import\s+['"]\.?\/?globals\.css['"]/g, `import '@/app/globals.css'`);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed imports in:', filePath);
  }
}

processDirectory(root);
