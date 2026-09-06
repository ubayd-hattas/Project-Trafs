import Image from "next/image";
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  overlayStrength: _overlayStrength,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  overlayStrength?: "light" | "medium" | "dark";
}) {
  const photo = image?.startsWith("/images/") ? image : undefined;
  return (
    <section className={"page-hero " + (photo ? "page-hero-photo" : "")}>
      <div className="container-page">
        <div className="page-hero-copy">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
      </div>
      {photo && (
        <div className="page-hero-image">
          <Image
            src={photo}
            alt=""
            fill
            priority
            sizes="(min-width:1024px) 38vw, (min-width:768px) 35vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
    </section>
  );
}
