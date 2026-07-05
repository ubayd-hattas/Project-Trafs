import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { AchievementBadgeCard } from "@/components/home/AchievementBadgeCard";
import { achievements } from "@/data/achievements";

export default function AcademicAchievementsPage() {
  const academic = achievements.filter((a: any) => a.category === 'academic');
  return (
    <main>
      <PageHero title="Academic Achievements" description="Top performers." image="/placeholders/science-lab.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs trail={[]} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {academic.map((a: any) => (
            <AchievementBadgeCard key={a.id} achievement={a} />
          ))}
        </div>
      </div>
    </main>
  );
}
