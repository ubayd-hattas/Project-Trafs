import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import Link from "next/link";
import { primaryNav, footerColumns } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Sitemap",
};

export default function SitemapPage() {
  return (
    <>
      <PageHero title="Sitemap" description="Navigate the Trafalgar High School website." image="/placeholders/assembly.webp" />
      <div className="container-page py-12">
        <Breadcrumbs trail={[{ label: "Sitemap" }]} />
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-xl text-navy-800 mb-4">Main Navigation</h2>
            <ul className="space-y-2">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-brass-600 hover:underline">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h2 className="font-display text-xl text-navy-800 mb-4">{col.title}</h2>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-brass-600 hover:underline">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
