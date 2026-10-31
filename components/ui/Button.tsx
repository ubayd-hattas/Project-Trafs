import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brass-500 text-navy-900 border-2 border-brass-500 hover:bg-brass-400 hover:border-brass-400",
  secondary:
    "bg-navy-800 text-parchment-100 border-2 border-navy-800 hover:bg-navy-600 hover:border-navy-600",
  ghost:
    "bg-transparent text-navy-800 border-2 border-navy-800 hover:bg-navy-800 hover:text-parchment-100",
  onDark:
    "bg-transparent text-parchment-100 border-2 border-parchment-100/70 hover:bg-parchment-100 hover:text-navy-900",
};

const base =
  "inline-flex items-center justify-center gap-2 min-h-[52px] px-6 py-3 text-[17px] font-bold transition-colors duration-150";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ActionButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: LinkButtonProps | ActionButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    // next/link is for pages on this site; tel:, mailto: and external URLs use a plain anchor.
    if (!href.startsWith("/")) {
      return (
        <a href={href} className={classes} {...anchorRest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
