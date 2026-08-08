import { createFileRoute } from "@tanstack/react-router";
import { Check, Wrench, ClipboardCheck, FlaskConical } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import {
  images,
  testingServices,
  consultingServices,
  technicalServices,
} from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Laboratory Testing, Consulting & Technical Support" },
      {
        name: "description",
        content:
          "Laboratory testing, ISO/IEC 17025 consulting and technical service from Labmed Technologies — water, soils, concrete, microbiology and elemental analysis.",
      },
      {
        property: "og:title",
        content: "Services | Laboratory Testing, Consulting & Technical Support",
      },
      {
        property: "og:description",
        content:
          "A one-stop service for laboratory analysis, management systems and instrument maintenance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const commitments = [
  "Accurate analysis by highly skilled professionals, using state-of-the-art equipment and globally recognised methodology",
  "A cost-competitive service",
  "Quick turn-around time",
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Analysis, systems and support — from one team."
        body="Testing, ISO/IEC 17025 consulting and technical service designed around how your laboratory actually works."
        image={images.labAlt}
      />

      <section id="laboratory-testing" className="scroll-mt-24 border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <FlaskConical className="size-8 text-accent" strokeWidth={1.25} />
              <p className="eyebrow mt-8 text-accent">01 — Laboratory Testing</p>
              <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
                A one-stop service for all your laboratory analysis needs.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                We specialise in customised and personal service to ensure the suite of analysis
                methods selected are optimal and best for your analysis needs.
              </p>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-7">
              <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {testingServices.map((t) => (
                  <div
                    key={t}
                    className="group bg-background px-5 py-7 transition-colors duration-300 hover:bg-surface"
                  >
                    <span className="block text-sm font-medium leading-snug text-foreground">
                      {t}
                    </span>
                    <span className="mt-3 block h-px w-8 bg-accent transition-all duration-500 group-hover:w-14" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="consulting" className="scroll-mt-24 bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <ClipboardCheck className="size-8 text-accent" strokeWidth={1.25} />
              <p className="eyebrow mt-8 text-accent">02 — Consulting</p>
              <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
                ISO/IEC 17025 expertise, end to end.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Labmed Technologies is your ideal partner to guide your organisation in its journey
                to establishing a sound Laboratory Management System, both from a quality and
                technical view.
              </p>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-7">
              <ol className="divide-y divide-border border-y border-border">
                {consultingServices.map((c, i) => (
                  <li key={c} className="flex gap-6 py-6">
                    <span className="eyebrow pt-1 text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{c}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-10">
                <h3 className="eyebrow text-accent">We are committed to</h3>
                <ul className="mt-5 space-y-3">
                  {commitments.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="technical-services" className="scroll-mt-24 bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Wrench className="size-8 text-accent" strokeWidth={1.25} />
              <p className="eyebrow mt-8 text-accent">03 — Technical Services</p>
              <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
                Repair, maintenance and calibration you can plan around.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Technical Support offers a broad repair and maintenance programme, personal
                technical support and a selection of service level and maintenance contracts. You
                are guaranteed original spare parts.
              </p>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-7">
              <p className="text-sm leading-relaxed text-muted-foreground">
                In our products and services we hope to perform to the total satisfaction of our
                clients, ensuring you are empowered to make more accurate diagnostic decisions,
                advance research methods and results, and improve production performance. The
                ability to repair, maintain and calibrate laboratory instrumentation that we supply
                is an important aspect of our overall customer service policy.
              </p>
              <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
                {technicalServices.map((s) => (
                  <div key={s} className="bg-background px-6 py-8">
                    <span className="text-sm leading-snug text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
