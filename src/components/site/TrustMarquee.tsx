const items = [
  "Level 1 B-BBEE",
  "Chemicals",
  "Laboratory Supplies",
  "Medical Supplies",
  "Dental Supplies",
  "Beauty Supplies",
  "Office Supplies",
  "Agricultural Supplies",
  "Nationwide delivery",
  "Technical service & repairs",
];

export function TrustMarquee() {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border bg-surface py-4">
      <div className="marquee-track items-center gap-10">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="eyebrow flex shrink-0 items-center gap-10 text-muted-foreground"
          >
            {item}
            <span className="size-1 rounded-full bg-accent" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
