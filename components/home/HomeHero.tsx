import Image from "next/image";
import { PlaceholderImage } from '@/components/shared/PlaceholderImage';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-parchment-100" aria-label="Welcome to Trafalgar High School">
      {/* Background image — reduced overlay so the photography is visible */}
      <div className="absolute inset-0">
        <PlaceholderImage
          src="/placeholders/hero.webp"
          alt="Trafalgar High School campus"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/55 to-navy-900/25" />
      </div>

      <div className="container-page relative py-28 sm:py-36 lg:py-44">
        <div className="max-w-2xl animate-fadeUp">
          {/* Logo badge */}
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brass-400/50 bg-white/10 backdrop-blur-sm overflow-hidden">
              <Image
                src="/placeholders/icon.png"
                alt={`${siteConfig.name} crest`}
                width={44}
                height={44}
                className="object-contain"
              />
            </span>
            <p className="eyebrow text-brass-300">{siteConfig.motto}</p>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-parchment-100">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-parchment-200/85 leading-relaxed">
            Founded in {siteConfig.foundedYear} as South Africa&rsquo;s first co-educational school for people of
            colour, Trafalgar has spent more than a century turning difficulty into distinction — in the
            classroom, on the field, and long after learners leave Zonnebloem.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/admissions/how-to-apply" variant="primary">
              Apply Now
            </Button>
            <Button
              href="/about/our-history"
              variant="ghost"
              className="border-parchment-100/30 text-parchment-100 hover:border-parchment-100/60 hover:bg-parchment-100/10"
            >
              Discover Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade into body background */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-parchment to-transparent" />
    </section>
  );
}
