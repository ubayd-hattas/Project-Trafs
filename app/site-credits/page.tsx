import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { isOfficialSite } from "@/data/siteMode";

export const metadata: Metadata = {
  title: "Site credits",
};

export default function SiteCreditsPage() {
  return (
    <>
      <PageHero
        title="Site credits"
        description="Who built this website and how."
        image="/placeholders/assembly.webp"
      />
      <div className="container-page py-12">
        <Breadcrumbs trail={[{ label: "Site credits" }]} />
        <div className="mt-8 max-w-3xl">
          <p className="text-lg text-ink-light">
            This website was designed and built by Ubayd Hattas (Head Boy,
            Class of 2025) and given to the school at no cost.
            {isOfficialSite
              ? null
              : " It is a proposal and not yet the official school website."}
          </p>
          <p className="mt-4 text-ink-light">
            Built with Next.js and Tailwind CSS. Headings are set in Libre
            Caslon and body text in Atkinson Hyperlegible, a typeface made by
            the Braille Institute for readers with low vision. Colours are
            taken from the school crest.
          </p>
        </div>
      </div>
    </>
  );
}
