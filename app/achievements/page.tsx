import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function AchievementsPage() {
  return (
    <main>
      <PageHero title="Achievements" description="Celebrating excellence." image="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs trail={[]} />
        <p className="mt-8">Hub for academic, sports, and cultural achievements.</p>
      </div>
    </main>
  );
}
