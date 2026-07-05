import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Contact Us" description="Get in touch." image="/placeholders/assembly.jpg" />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs trail={[]} />
        <div className="mt-8 max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
