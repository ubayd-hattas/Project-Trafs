import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ResourceLinkCard } from "@/components/shared/ResourceLinkCard";

export const metadata: Metadata = {
  title: "Policies",
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero title="Policies" description="School governance documents." image="/placeholders/principal.webp" />
      <div className="container-page py-12">
        <Breadcrumbs trail={[{ label: "Policies" }]} />
        <div className="mt-8 max-w-3xl">
          <p className="mb-8 text-lg text-ink-light">
            Trafalgar High School is committed to providing a safe, equitable, and transparent environment for all learners and staff. Please find our core policy documents below.
          </p>
          
          <div className="mb-10 rounded-xs bg-parchment-200 p-6 border border-navy-800/10">
            <h2 className="font-display text-xl text-navy-800 mb-2">POPIA Compliance</h2>
            <p className="text-ink-dark text-sm">
              In accordance with the Protection of Personal Information Act (POPIA), Trafalgar High School takes every reasonable precaution to protect the personal information of our learners, parents, and staff. Information collected is used solely for educational and administrative purposes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <ResourceLinkCard
              resource={{
                name: "Admissions Policy",
                description: "Official admissions criteria and guidelines.",
                href: "https://trafalgarhighschool.co.za/admission-policy/",
              }}
            />
            <ResourceLinkCard
              resource={{
                name: "Admissions Procedure",
                description: "Step-by-step procedure for new applications.",
                href: "https://trafalgarhighschool.co.za/admission-procedure/",
              }}
            />
            <ResourceLinkCard
              resource={{
                name: "WCED Portal",
                description: "Western Cape Education Department official admissions portal.",
                href: "https://wcedonline.westerncape.gov.za/admissions-202122",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

