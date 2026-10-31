import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { galleryItems } from "@/data/gallery";
export const metadata: Metadata = {
  title: "School gallery",
  description:
    "Real photographs of Trafalgar’s campus, school life and heritage, with selections from the 2025 school archive.",
};
export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="The school gallery"
        title="Photographs of the school"
        description="The campus and school life. Each activity photograph is labelled with the year it was taken."
      />
      <Breadcrumbs trail={[{ label: "Gallery" }]} />
      <section className="editorial-section">
        <div className="container-page">
          <PhotoGallery items={galleryItems} />
        </div>
      </section>
    </>
  );
}
