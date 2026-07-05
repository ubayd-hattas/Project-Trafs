import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-navy-800/10 bg-parchment-100">
      <ol className="container-page flex flex-wrap items-center gap-1.5 py-3 text-xs text-ink-muted">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="flex items-center gap-1 hover:text-navy-800" aria-label="Home">
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </li>
        {trail.map((crumb, i) => (
          <li key={crumb.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            {crumb.href && i !== trail.length - 1 ? (
              <Link href={crumb.href} className="hover:text-navy-800">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-navy-800">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
