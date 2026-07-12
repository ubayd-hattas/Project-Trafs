import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Parents' Portal",
};

export default function ParentsPortalPage() {
  return (
    <>
      <PageHero title="Parents' Portal" description="Resources for Trafalgar parents." image="/placeholders/assembly.webp" />
      <div className="container-page py-12">
        <Breadcrumbs trail={[{ label: "Parents' Portal" }]} />
        <div className="mt-8 max-w-3xl">
          <p className="text-lg text-ink-light">
            The Parents&rsquo; Portal is currently under construction. Please check back later for term dates, newsletters, and learner reports.
          </p>
        </div>
      </div>
    </>
  );
}
