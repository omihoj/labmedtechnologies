import { Reveal } from "@/components/site/Reveal";

const stats = [
  { value: "7", label: "Product ranges" },
  { value: "9", label: "Testing disciplines" },
  { value: "ISO 17025", label: "Consulting expertise" },
  { value: "Level 4", label: "Certified B-BBEE" },
];

export function StatsBand() {
  return (
    <section className="gradient-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 px-0 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="gradient-ink">
            <div className="px-6 py-12 lg:px-10">
              <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {s.value}
              </p>
              <p className="eyebrow mt-3 text-ink-foreground/65">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
