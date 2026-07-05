const fs = require('fs');
const path = require('path');

const root = process.cwd();

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    if (file === 'node_modules' || file === '.next' || file === '.git') continue;
    
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx')) {
      fixPage(fullPath);
    }
  }
}

function fixPage(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Fix PageHero
  // subtitle= -> description=
  // imagePath= -> image=
  content = content.replace(/<PageHero([^>]*?)subtitle=(["'])(.*?)\2([^>]*?)>/g, '<PageHero$1description=$2$3$2$4>');
  content = content.replace(/<PageHero([^>]*?)imagePath=(["'])(.*?)\2([^>]*?)>/g, '<PageHero$1image=$2$3$2$4>');

  // Fix SectionHeading
  content = content.replace(/<SectionHeading([^>]*?)subtitle=(["'])(.*?)\2([^>]*?)>/g, '<SectionHeading$1description=$2$3$2$4>');

  // Fix CTASection
  content = content.replace(/<CTASection([^>]*?)subtitle=(["'])(.*?)\2([^>]*?)buttonText=(["'])(.*?)\5([^>]*?)buttonLink=(["'])(.*?)\8([^>]*?)>/g, 
  '<CTASection$1description=$2$3$2$4primary={{ label: $5$6$5, href: $8$9$8 }}$7$10>');

  // Fix Breadcrumbs
  content = content.replace(/<Breadcrumbs\s*\/>/g, '<Breadcrumbs trail={[]} />');

  // Fix upcomingEvents
  content = content.replace(/import\s+{\s*upcomingEvents\s*}\s*from\s+["']@\/data\/events["']/g, 'import { events } from "@/data/events"');
  content = content.replace(/upcomingEvents\.map/g, 'events.map');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed:', filePath);
  }
}

processDirectory(root);
