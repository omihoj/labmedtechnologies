import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { contact } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="gradient-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-12 lg:items-end lg:px-10 lg:py-28">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-accent">Let's work together</p>
          <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            An invaluable partner in meeting your quality requirements.
          </h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5 lg:justify-self-end">
          <p className="max-w-sm text-sm leading-relaxed text-ink-foreground/75">
            Speak to our team about products, testing, consulting or technical support.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all duration-300 hover:brightness-110"
            >
              Contact Us
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-sm border border-ink-foreground/25 px-6 py-3.5 text-sm font-medium transition-colors duration-300 hover:bg-ink-foreground/10"
            >
              {contact.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
