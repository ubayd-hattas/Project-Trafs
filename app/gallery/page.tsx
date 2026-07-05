import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { galleryItems } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <main>
      <PageHero title="Gallery" description="A visual journey." image="/placeholders/gallery-1.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs trail={[]} />
        <PhotoGallery items={galleryItems} />
      </div>
    </main>
  );
}
