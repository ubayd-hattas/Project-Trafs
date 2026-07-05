import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function DonatePage() {
  return (
    <main>
      <PageHero title="Donate" description="Make a difference." image="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs trail={[]} />
        <p className="mt-8">Banking details and donation process.</p>
      </div>
    </main>
  );
}
