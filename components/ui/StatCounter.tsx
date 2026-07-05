export function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  // Format: if value has a decimal, show one decimal place; otherwise show as integer
  const formatted = Number.isInteger(value) ? value.toLocaleString() : value.toFixed(1);

  return (
    <div className="text-center sm:text-left">
      <p className="font-display text-3xl text-navy-800 sm:text-4xl" aria-label={`${formatted}${suffix} ${label}`}>
        <span aria-hidden="true">{formatted}{suffix}</span>
      </p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">{label}</p>
    </div>
  );
}
