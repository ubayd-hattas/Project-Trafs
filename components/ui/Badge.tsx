const toneClasses = {
  navy: "bg-navy-800 text-parchment-100",
  brass: "bg-brass-500/15 text-brass-700",
  parchment: "bg-parchment-300 text-navy-800",
} as const;

export function Badge({
  children,
  tone = "brass",
}: {
  children: React.ReactNode;
  tone?: keyof typeof toneClasses;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em] ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
