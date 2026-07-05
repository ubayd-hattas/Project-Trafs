const fs = require('fs');
const path = require('path');

const root = process.cwd();

const pagesToCreate = {
  'app/student-life/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";

export default function StudentLifePage() {
  return (
    <main>
      <PageHero 
        title="Student Life" 
        subtitle="Discover life beyond the classroom at Trafalgar High School." 
        imagePath="/placeholders/students.jpg"
      />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <SectionHeading title="A Vibrant Community" subtitle="Explore our extramurals." />
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-center">At Trafalgar, we believe in holistic education. Our students participate in various sporting, cultural, and leadership activities.</p>
      </div>
      <CTASection title="Join Our Community" subtitle="Apply today to become part of the legacy." buttonText="Apply Now" buttonLink="/admissions" />
    </main>
  );
}`,
  'app/student-life/sport/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function SportPage() {
  return (
    <main>
      <PageHero title="Sport" subtitle="Building character on the field." imagePath="/placeholders/sports.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">Content for sports codes, fixtures, and coaches will go here.</p>
      </div>
    </main>
  );
}`,
  'app/student-life/culture-arts/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function CultureArtsPage() {
  return (
    <main>
      <PageHero title="Culture & Arts" subtitle="Nurturing creativity." imagePath="/placeholders/choir.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">Information on choir, drama, debate, and music.</p>
      </div>
    </main>
  );
}`,
  'app/student-life/clubs-societies/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function ClubsPage() {
  return (
    <main>
      <PageHero title="Clubs & Societies" subtitle="Find your passion." imagePath="/placeholders/students.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">List of clubs and societies.</p>
      </div>
    </main>
  );
}`,
  'app/student-life/leadership/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function LeadershipPage() {
  return (
    <main>
      <PageHero title="Student Leadership" subtitle="Leading by example." imagePath="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">RCL, Prefects, and Head Boy/Girl information.</p>
      </div>
    </main>
  );
}`,
  'app/student-life/code-of-conduct/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function CodeOfConductPage() {
  return (
    <main>
      <PageHero title="Code of Conduct" subtitle="Our rules and expectations." imagePath="/placeholders/students.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">Downloadable policy and guidelines.</p>
      </div>
    </main>
  );
}`,
  'app/news-events/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function NewsEventsPage() {
  return (
    <main>
      <PageHero title="News & Events" subtitle="Stay updated with Trafalgar." imagePath="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">Hub for news, events, and newsletters.</p>
      </div>
    </main>
  );
}`,
  'app/news-events/news/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { NewsCard } from "@/components/news-events/NewsCard";
import { newsPosts } from "@/data/news";

export default function NewsPage() {
  return (
    <main>
      <PageHero title="Latest News" subtitle="School announcements and stories." imagePath="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {newsPosts.map((post: any) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}`,
  'app/news-events/events/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EventCard } from "@/components/news-events/EventCard";
import { upcomingEvents } from "@/data/events";

export default function EventsPage() {
  return (
    <main>
      <PageHero title="Events Calendar" subtitle="Upcoming activities." imagePath="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {upcomingEvents.map((event: any) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </main>
  );
}`,
  'app/news-events/newsletters/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function NewslettersPage() {
  return (
    <main>
      <PageHero title="Newsletters" subtitle="Termly updates." imagePath="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">Archive of downloadable newsletters.</p>
      </div>
    </main>
  );
}`,
  'app/achievements/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function AchievementsPage() {
  return (
    <main>
      <PageHero title="Achievements" subtitle="Celebrating excellence." imagePath="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">Hub for academic, sports, and cultural achievements.</p>
      </div>
    </main>
  );
}`,
  'app/achievements/academic/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { AchievementBadgeCard } from "@/components/home/AchievementBadgeCard";
import { recentAchievements } from "@/data/achievements";

export default function AcademicAchievementsPage() {
  const academic = recentAchievements.filter((a: any) => a.category === 'academic');
  return (
    <main>
      <PageHero title="Academic Achievements" subtitle="Top performers." imagePath="/placeholders/science-lab.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {academic.map((a: any) => (
            <AchievementBadgeCard key={a.id} achievement={a} />
          ))}
        </div>
      </div>
    </main>
  );
}`,
  'app/achievements/sport-culture/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { AchievementBadgeCard } from "@/components/home/AchievementBadgeCard";
import { recentAchievements } from "@/data/achievements";

export default function SportCultureAchievementsPage() {
  const sportCulture = recentAchievements.filter((a: any) => a.category !== 'academic');
  return (
    <main>
      <PageHero title="Sport & Culture Achievements" subtitle="Winning beyond the classroom." imagePath="/placeholders/sports.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {sportCulture.map((a: any) => (
            <AchievementBadgeCard key={a.id} achievement={a} />
          ))}
        </div>
      </div>
    </main>
  );
}`,
  'app/achievements/alumni-success/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function AlumniSuccessAchievementsPage() {
  return (
    <main>
      <PageHero title="Alumni Success" subtitle="Our proud heritage." imagePath="/placeholders/history.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">Highlights of notable alumni achievements.</p>
      </div>
    </main>
  );
}`,
  'app/alumni/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function AlumniPage() {
  return (
    <main>
      <PageHero title="Alumni" subtitle="Once a Trafalgar student, always a Trafalgar student." imagePath="/placeholders/history.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">Hub for alumni relations.</p>
      </div>
    </main>
  );
}`,
  'app/alumni/association/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function AlumniAssociationPage() {
  return (
    <main>
      <PageHero title="Alumni Association" subtitle="Connect with the network." imagePath="/placeholders/history.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">Details on joining the association.</p>
      </div>
    </main>
  );
}`,
  'app/alumni/stories/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { AlumniStoryCard } from "@/components/alumni/AlumniStoryCard";
import { featuredAlumni } from "@/data/alumni";

export default function AlumniStoriesPage() {
  return (
    <main>
      <PageHero title="Alumni Stories" subtitle="Inspiring journeys." imagePath="/placeholders/history.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {featuredAlumni.map((story: any) => (
            <AlumniStoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </main>
  );
}`,
  'app/alumni/reunions-events/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function AlumniEventsPage() {
  return (
    <main>
      <PageHero title="Reunions & Events" subtitle="Gatherings of past students." imagePath="/placeholders/history.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">Information on upcoming reunions.</p>
      </div>
    </main>
  );
}`,
  'app/alumni/give-back/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function AlumniGiveBackPage() {
  return (
    <main>
      <PageHero title="Give Back" subtitle="Support the next generation." imagePath="/placeholders/history.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">Opportunities to mentor or speak.</p>
      </div>
    </main>
  );
}`,
  'app/giving/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function GivingPage() {
  return (
    <main>
      <PageHero title="Giving" subtitle="Support our vision." imagePath="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">Hub for donations and partnerships.</p>
      </div>
    </main>
  );
}`,
  'app/giving/donate/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function DonatePage() {
  return (
    <main>
      <PageHero title="Donate" subtitle="Make a difference." imagePath="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">Banking details and donation process.</p>
      </div>
    </main>
  );
}`,
  'app/giving/partnerships-sponsorship/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function PartnershipsPage() {
  return (
    <main>
      <PageHero title="Partnerships & Sponsorship" subtitle="Corporate support." imagePath="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">Details for organizations looking to sponsor.</p>
      </div>
    </main>
  );
}`,
  'app/gallery/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { galleryCategories } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <main>
      <PageHero title="Gallery" subtitle="A visual journey." imagePath="/placeholders/gallery-1.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <PhotoGallery categories={galleryCategories} />
      </div>
    </main>
  );
}`,
  'app/contact/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Contact Us" subtitle="Get in touch." imagePath="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <div className="mt-8 max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}`,
  'app/policies/page.tsx': `import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function PoliciesPage() {
  return (
    <main>
      <PageHero title="Policies" subtitle="School governance documents." imagePath="/placeholders/principal.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs />
        <p className="mt-8">POPIA, admissions policy, and other downloads.</p>
      </div>
    </main>
  );
}`
};

for (const [filePath, content] of Object.entries(pagesToCreate)) {
  const fullPath = path.join(root, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  // Only write if it doesn't exist, to avoid overwriting anything we just fixed, but in this case these are the *missing* pages.
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content);
    console.log('Created:', filePath);
  }
}
