import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export default function PoliciesPage() {
  return (
    <main>
      <PageHero title="Policies" description="School governance documents." image="/placeholders/principal.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs trail={[]} />
        <p className="mt-8">POPIA, admissions policy, and other downloads.</p>
      </div>
    </main>
  );
}
