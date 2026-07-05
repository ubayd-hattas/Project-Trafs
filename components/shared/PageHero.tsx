import { PlaceholderImage } from '@/components/shared/PlaceholderImage';

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/placeholders/hero.webp",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-parchment-100">
      <div className="absolute inset-0">
        <PlaceholderImage
          src={image}
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        {/* Overlay reduced from /80 to /60 so the background photography is visible */}
        <div className="absolute inset-0 bg-navy-800/60" />
      </div>
      <div className="container-page relative py-16 sm:py-20">
        {eyebrow ? (
          <p className="eyebrow text-brass-300 mb-3" aria-hidden="true">{eyebrow}</p>
        ) : null}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-parchment-100 max-w-3xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-parchment-200/85 text-lg leading-relaxed">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
