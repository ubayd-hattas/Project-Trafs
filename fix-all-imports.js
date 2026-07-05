const fs = require('fs');
const path = require('path');

const root = process.cwd();

const componentMap = {
  'Accordion': '@/components/ui/Accordion',
  'Badge': '@/components/ui/Badge',
  'Button': '@/components/ui/Button',
  'StatCounter': '@/components/ui/StatCounter',
  'Header': '@/components/layout/Header',
  'Footer': '@/components/layout/Footer',
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

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    if (file === 'node_modules' || file === '.next' || file === '.git') continue;
    
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixImportsAndTypes(fullPath);
    }
  }
}

function fixImportsAndTypes(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;
  
  // Fix module imports. Many were importing from '@/components/sections/...', '@/components/layout/...', etc.
  // We'll replace all `@/components/.*?/ComponentName` with the exact path from componentMap.
  for (const [comp, alias] of Object.entries(componentMap)) {
    const regex = new RegExp(`from\\s+['"]@/components/[^'"]+/${comp}['"]`, 'g');
    content = content.replace(regex, `from '${alias}'`);
    
    // Also handle relative imports if they still exist
    const regexRel = new RegExp(`from\\s+['"]\\.?\\.?\\/.*?\\/${comp}(\\.tsx)?['"]`, 'g');
    content = content.replace(regexRel, `from '${alias}'`);
  }

  // Handle forms
  content = content.replace(/from\s+['"]@\/components\/forms\/AdmissionsEnquiryForm['"]/g, `from '@/components/admissions/AdmissionsEnquiryForm'`);
  content = content.replace(/from\s+['"]@\/components\/forms\/ContactForm['"]/g, `from '@/components/contact/ContactForm'`);

  // Handle data imports
  content = content.replace(/from\s+['"]@\/lib\/data\/([^'"]+)['"]/g, `from '@/data/$1'`);
  content = content.replace(/from\s+['"]\.\.\/lib\/data\/([^'"]+)['"]/g, `from '@/data/$1'`);

  // Type fixes for implicitly any
  // e.g. (n) => ... to (n: any) =>
  content = content.replace(/\(n\)/g, '(n: any)');
  content = content.replace(/\(link\)/g, '(link: any)');
  content = content.replace(/\(g\)/g, '(g: any)');
  content = content.replace(/\(post\)/g, '(post: any)');
  content = content.replace(/\(a\)/g, '(a: any)');
  content = content.replace(/\(shot\)/g, '(shot: any)');
  content = content.replace(/\(story\)/g, '(story: any)');
  content = content.replace(/\(event\)/g, '(event: any)');
  content = content.replace(/\(col\)/g, '(col: any)');
  content = content.replace(/\(item\)/g, '(item: any)');
  content = content.replace(/\(child\)/g, '(child: any)');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed:', filePath);
  }
}

processDirectory(root);
