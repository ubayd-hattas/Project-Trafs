import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" description="How we handle your data." image="/placeholders/assembly.webp" />
      <div className="container-page py-12">
        <Breadcrumbs trail={[{ label: "Privacy Policy" }]} />
        <div className="mt-8 max-w-3xl">
          <p className="text-lg text-ink-light">
            In accordance with the Protection of Personal Information Act (POPIA), our comprehensive privacy policy is currently being updated. For immediate enquiries regarding data protection, please contact the school administration.
          </p>
        </div>
      </div>
    </>
  );
}
