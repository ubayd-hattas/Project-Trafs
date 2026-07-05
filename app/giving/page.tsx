import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function GivingPage() {
  return (
    <main>
      <PageHero title="Giving" description="Support our vision." image="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs trail={[]} />
        <p className="mt-8">Hub for donations and partnerships.</p>
      </div>
    </main>
  );
}
