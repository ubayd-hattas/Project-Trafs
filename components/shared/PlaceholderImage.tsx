import Image from "next/image";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

/**
 * Thin wrapper around next/image used for every image on the site.
 * All current sources point at generated SVG placeholders in /public/placeholders —
 * see PLACEHOLDERS.md. Swapping in real photography later only requires changing
 * the `src` values in the relevant lib/data file, not this component.
 */
export function PlaceholderImage({
  src,
  alt,
  fill,
  width,
  height,
  priority,
  className,
  sizes,
}: PlaceholderImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        sizes={sizes ?? "100vw"}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      priority={priority}
      className={className}
      sizes={sizes}
    />
  );
}
