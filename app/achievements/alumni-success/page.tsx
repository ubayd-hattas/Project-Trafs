import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function AlumniSuccessAchievementsPage() {
  return (
    <main>
      <PageHero title="Alumni Success" description="Our proud heritage." image="/placeholders/history.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs trail={[]} />
        <p className="mt-8">Highlights of notable alumni achievements.</p>
      </div>
    </main>
  );
}
