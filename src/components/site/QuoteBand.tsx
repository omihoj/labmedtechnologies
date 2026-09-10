import { Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function QuoteBand() {
  return (
    <section className="noise border-y border-border bg-surface">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:py-28">
        <Reveal>
          <Quote className="mx-auto size-8 text-accent" strokeWidth={1.25} />
          <p className="mt-8 text-balance font-display text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            "Our aim is simple — quality products, honest advice and service that keeps your
            laboratory running."
          </p>
          <p className="eyebrow mt-8 text-muted-foreground">Labmed Technologies</p>
        </Reveal>
      </div>
    </section>
  );
}
