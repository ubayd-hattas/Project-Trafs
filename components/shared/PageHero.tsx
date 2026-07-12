import { PlaceholderImage } from '@/components/shared/PlaceholderImage';

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/placeholders/hero.webp",
  overlayStrength = "medium",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  overlayStrength?: "light" | "medium" | "dark";
}) {
  const overlayConfig = {
    light: { opacity: "opacity-65", bg: "bg-navy-800/35" },
    medium: { opacity: "opacity-55", bg: "bg-navy-800/50" },
    dark: { opacity: "opacity-45", bg: "bg-navy-800/65" },
  };

  const { opacity, bg } = overlayConfig[overlayStrength];

  return (
    <section className="relative overflow-hidden bg-navy-800 text-parchment-100">
      <div className="absolute inset-0">
        <PlaceholderImage
          src={image}
          alt=""
          fill
          className={`object-cover ${opacity}`}
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${bg}`} />
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
