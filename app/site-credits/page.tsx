import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Site Credits",
};

export default function SiteCreditsPage() {
  return (
    <>
      <PageHero title="Site Credits" description="Colophon and acknowledgements." image="/placeholders/assembly.webp" />
      <div className="container-page py-12">
        <Breadcrumbs trail={[{ label: "Site Credits" }]} />
        <div className="mt-8 max-w-3xl">
          <p className="text-lg text-ink-light">
            This website is an independent redesign prototype created by Ubayd Hattas (Class of 2025). It is not the official Trafalgar High School website. 
          </p>
          <p className="mt-4 text-ink-light">
            Designed and built using Next.js, Tailwind CSS, and standard web technologies.
          </p>
        </div>
      </div>
    </>
  );
}
