import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import { CTASection } from "@/components/shared/CTASection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" description="Get in touch." image="/placeholders/assembly.webp" />
      <div className="container-page py-12">
        <Breadcrumbs trail={[{ label: "Contact Us" }]} />
        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-navy-800">Visit or reach out</h2>
            <div className="mt-6 space-y-4 text-ink-dark">
              <p><strong>Address:</strong><br/>{siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}</p>
              <p><strong>Phone:</strong><br/><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-brass-600 transition-colors">{siteConfig.phone}</a></p>
              <p><strong>Email:</strong><br/><a href={`mailto:${siteConfig.email}`} className="hover:text-brass-600 transition-colors">{siteConfig.email}</a></p>
              <p><strong>School hours:</strong><br/>{siteConfig.hours}</p>
            </div>
            <div className="mt-8 aspect-video w-full overflow-hidden rounded-xs bg-parchment-300">
              <iframe
                title="Trafalgar High School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3310.2229555135114!2d18.428564075704172!3d-33.93539827320138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d8a0c24e03b%3A0x6b8f3a3e6c0f2a7!2sTrafalgar%20High%20School!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div>
            <div className="mb-6 rounded-xs bg-navy-800/5 p-4 border border-navy-800/10">
              <p className="text-sm font-semibold text-navy-800">This form is a prototype. For urgent enquiries, call {siteConfig.phone}.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <CTASection
        title="Join the Trafalgar Family"
        description="Learn more about our admissions process and requirements."
        primary={{ label: "Admissions", href: "/admissions" }}
      />
    </>
  );
}


