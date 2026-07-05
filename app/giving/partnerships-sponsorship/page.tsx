import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function PartnershipsPage() {
  return (
    <main>
      <PageHero title="Partnerships & Sponsorship" description="Corporate support." image="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs trail={[]} />
        <p className="mt-8">Details for organizations looking to sponsor.</p>
      </div>
    </main>
  );
}
