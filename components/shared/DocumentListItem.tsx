import { FileText, Download } from "lucide-react";

export function DocumentListItem({
  title,
  meta,
  href = "#",
  external = false,
}: {
  title: string;
  meta: string;
  href?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between gap-4 rounded-xs border border-navy-800/10 bg-parchment-100 px-5 py-4 transition-shadow hover:shadow-card"
    >
      <span className="flex items-center gap-3">
        <FileText className="h-5 w-5 shrink-0 text-brass-600" aria-hidden="true" />
        <span>
          <span className="block font-semibold text-navy-800">{title}</span>
          <span className="block text-sm text-ink-muted">{meta}</span>
        </span>
      </span>
      <Download className="h-4 w-4 shrink-0 text-ink-muted transition-colors group-hover:text-brass-600" aria-hidden="true" />
    </a>
  );
}
