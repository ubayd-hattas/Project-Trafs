import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
export const metadata: Metadata = {
  title: "Contact & visit",
  description:
    "Contact Trafalgar High School on 021 465 2969. Find us at 35 Kuiper Street, Zonnebloem, Cape Town.",
};
export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & visit"
        title="Contact the school"
        description="Call or email the school office, or visit us at 35 Kuiper Street, Zonnebloem."
      />
      <Breadcrumbs trail={[{ label: "Contact" }]} />
      <section className="editorial-section">
        <div className="container-page grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Contact details" title="School office" />
            <dl className="mt-8">
              <div className="py-5 border-b border-navy-800/15">
                <dt className="eyebrow">Telephone</dt>
                <dd>
                  <a
                    className="text-link text-2xl font-display"
                    href="tel:+27214652969"
                  >
                    {siteConfig.phone} <ArrowUpRight size={20} />
                  </a>
                </dd>
              </div>
              <div className="py-5 border-b border-navy-800/15">
                <dt className="eyebrow">Email</dt>
                <dd className="mt-3 text-lg break-all">
                  <a
                    className="font-bold underline decoration-brass-500 decoration-2"
                    href={"mailto:" + siteConfig.email}
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div className="py-5 border-b border-navy-800/15">
                <dt className="eyebrow">Office hours</dt>
                <dd className="mt-3 text-lg">{siteConfig.hours}</dd>
              </div>
              <div className="py-5">
                <dt className="eyebrow">Find us</dt>
                <dd className="mt-3 text-lg leading-8">
                  35 Kuiper Street
                  <br />
                  Zonnebloem, Cape Town
                </dd>
              </div>
            </dl>
            <p className="editorial-body mt-4">
              Please call ahead to arrange a visit or confirm office
              availability during school holidays.
            </p>
            <a
              className="text-link mt-5"
              href={siteConfig.mapsUrl}
            >
              Get directions in Google Maps <ArrowUpRight size={17} />
            </a>
          </div>
          <div>
            <figure>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/entrance.webp"
                  alt="The stone boundary wall and entrance to Trafalgar High School, with Table Mountain behind"
                  fill
                  sizes="(min-width:768px) 50vw,100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="photo-caption">
                Our school in Zonnebloem, Cape Town
              </figcaption>
            </figure>
            <Link href="/admissions" className="resource-row mt-5">
              <div>
                <h3>Admissions enquiries</h3>
                <p>Application guidance, documents and next steps.</p>
              </div>
              <ArrowRight className="shrink-0" />
            </Link>
            <Link href="/alumni" className="resource-row">
              <div>
                <h3>Alumni & community</h3>
                <p>
                  Reconnect with your school and discuss ways to contribute.
                </p>
              </div>
              <ArrowRight className="shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
