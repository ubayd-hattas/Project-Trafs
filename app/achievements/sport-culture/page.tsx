import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { AchievementBadgeCard } from "@/components/home/AchievementBadgeCard";
import { achievements } from "@/data/achievements";

export default function SportCultureAchievementsPage() {
  const sportCulture = achievements.filter((a: any) => a.category !== 'academic');
  return (
    <main>
      <PageHero title="Sport & Culture Achievements" description="Winning beyond the classroom." image="/placeholders/sports.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs trail={[]} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {sportCulture.map((a: any) => (
            <AchievementBadgeCard key={a.id} achievement={a} />
          ))}
        </div>
      </div>
    </main>
  );
}
