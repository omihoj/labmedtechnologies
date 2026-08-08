import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CategoryGrid() {
  return (
    <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat, i) => (
        <Reveal key={cat.slug} delay={i * 70} className="bg-background">
          <Link
            to="/products"
            hash={cat.slug}
            className="group relative block h-full overflow-hidden bg-background"
          >
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[1200ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/10 transition-opacity duration-500 group-hover:opacity-0" />
            </div>
            <div className="flex items-start justify-between gap-4 p-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{cat.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.blurb}</p>
              </div>
              <ArrowUpRight className="mt-1 size-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        </Reveal>
      ))}
      <Reveal delay={categories.length * 70} className="bg-background">
        <Link
          to="/contact"
          className="group flex h-full min-h-56 flex-col justify-between gap-6 gradient-ink p-8 text-ink-foreground"
        >
          <p className="eyebrow text-accent">Can't find it?</p>
          <div>
            <h3 className="font-display text-2xl font-semibold leading-tight">
              Tell us what you need and we'll source it.
            </h3>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-ink-foreground/80">
              Request a quote
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      </Reveal>
    </div>
  );
}
