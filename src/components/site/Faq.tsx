import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Reveal";

const faqs = [
  {
    q: "Do you deliver outside Pretoria?",
    a: "Yes. We deliver across South Africa and to surrounding African countries. Delivery costs and lead times are confirmed with your quote.",
  },
  {
    q: "Can I order products that aren't listed?",
    a: "Absolutely. Our listed ranges are a summary — tell us what you need and we will source it for you.",
  },
  {
    q: "Do you service and repair equipment?",
    a: "We offer on-site and in-house repairs, preventative maintenance and service agreements using original spare parts.",
  },
  {
    q: "How quickly will I get a quote?",
    a: "Most enquiries are answered the same working day, Monday to Friday between 08:00 and 16:30.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-4xl px-5 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <p className="eyebrow text-accent">Questions</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Good to know</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 70}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-semibold text-foreground">{f.q}</span>
                  <Plus
                    className={cn(
                      "mt-1 size-5 shrink-0 text-accent transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
