import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" description="A visual journey." image="/placeholders/assembly.webp" />
      <div className="container-page py-12">
        <Breadcrumbs trail={[{ label: "Gallery" }]} />
        <p className="mt-8 mb-10 max-w-2xl text-lg text-ink-light">
          Explore scenes from our classrooms, sports fields, and historic archives. These images capture the vibrant daily life and enduring legacy of Trafalgar High School.
        </p>
        <PhotoGallery items={galleryItems} />
      </div>
    </>
  );
}

