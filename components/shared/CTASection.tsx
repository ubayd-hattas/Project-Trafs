import { Button } from '@/components/ui/Button';

type CTALink = { label: string; href: string };

export function CTASection({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description?: string;
  primary: CTALink;
  secondary?: CTALink;
}) {
  return (
    <section className="bg-brass-500/10 py-16 sm:py-20">
      <div className="container-page flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="section-heading">{title}</h2>
          {description ? <p className="prose-body mt-3">{description}</p> : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={primary.href} variant="primary">
            {primary.label}
          </Button>
          {secondary ? (
            <Button href={secondary.href} variant="ghost">
              {secondary.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
