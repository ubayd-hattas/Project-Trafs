import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";
export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="hero-copy">
        <Image
          src="/images/crest.png"
          alt=""
          width={300}
          height={350}
          className="hero-watermark"
        />
        <p className="eyebrow">Zonnebloem, Cape Town · Since 1912</p>
        <h1>
          A public high school with roots in <em>District Six.</em>
        </h1>
        <p className="hero-intro">
          Trafalgar teaches Grades 8 to 12. It opened in 1912 so that young
          people of colour in Cape Town could finish high school.
        </p>
        <div className="hero-actions">
          <Button href="/admissions" variant="primary">
            How to apply
          </Button>
          <Button href={siteConfig.phoneHref} variant="onDark">
            <Phone size={18} aria-hidden="true" />
            Call {siteConfig.phone}
          </Button>
        </div>
        <p className="hero-ribbon" lang="la">
          {siteConfig.motto}
        </p>
        <p className="hero-ribbon-translation">
          Our motto: “{siteConfig.mottoTranslation}.”
        </p>
      </div>
      <figure className="hero-photo">
        <Image
          src="/images/campus.webp"
          alt="The main Trafalgar High School building in Zonnebloem, with its arched red doorway"
          fill
          priority
          sizes="(min-width: 768px) 52vw, 100vw"
          className="object-cover"
        />
        <figcaption>35 Kuiper Street, Zonnebloem</figcaption>
      </figure>
    </section>
  );
}
