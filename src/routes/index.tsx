import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Boxes, HeartHandshake, ArrowRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { images, contact } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Labmed Technologies | Laboratory & Medical Supplies South Africa" },
      {
        name: "description",
        content:
          "Labmed Technologies supplies quality laboratory, medical, dental, beauty, office and agricultural consumables, equipment and services across South Africa and Africa.",
      },
      {
        property: "og:title",
        content: "Labmed Technologies | Laboratory & Medical Supplies South Africa",
      },
      {
        property: "og:description",
        content:
          "Quality consumables and equipment — solutions and services to accelerate science together.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Labmed Technologies",
          telephone: contact.phone,
          email: contact.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "583 Heatherview, Akasia",
            addressLocality: "Pretoria",
            postalCode: "0182",
            addressCountry: "ZA",
          },
          openingHours: "Mo-Fr 08:00-16:30",
        }),
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    icon: Award,
    title: "Product Quality",
    body: "Labmed Technologies has partnered with the world's leading brands to offer the best quality.",
  },
  {
    icon: Boxes,
    title: "Latest Product Range",
    body: "The only thing more diverse than our product range is the potential it holds for you to realise your vision.",
  },
  {
    icon: HeartHandshake,
    title: "Amazing Customer Service",
    body: "Customer satisfaction is of paramount importance to us, from the time of order through to after-sales service.",
  },
];

const services = [
  {
    title: "Laboratory Testing",
    body: "A one-stop service for all your laboratory analysis needs, from water and soils to microbiology.",
  },
  {
    title: "Consulting",
    body: "ISO/IEC 17025 expertise to build, document and maintain a sound laboratory management system.",
  },
  {
    title: "Technical Services",
    body: "Repair, maintenance and calibration with original spare parts and service level agreements.",
  },
];

function Home() {
  return (
    <>
      <Hero />

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-accent">Who we are</p>
            <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
              One of South Africa's leading consumables and equipment suppliers.
            </h2>
            <div className="mt-8 inline-flex items-center gap-3 border border-border px-4 py-3">
              <span className="grid size-8 place-items-center bg-accent font-display text-xs font-bold text-accent-foreground">
                4
              </span>
              <span className="text-sm text-muted-foreground">
                Level 4 Certified B-BBEE company
              </span>
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-5 text-sm leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              Labmed Technologies is one of South Africa's leading laboratory, medical, dental,
              office and beauty consumables and equipment suppliers. We provide supplies and
              scientific equipment in South Africa and surrounding African countries.
            </p>
            <p>
              We strive to provide the highest quality consumables and equipment at competitive
              prices. Our sales staff are knowledgeable about our products and have a strong
              emphasis on personal service.
            </p>
            <p>
              We understand the importance of delivering not only the necessary equipment but also
              the ancillaries and accessories that complement these analytical methods. Moreover,
              we are committed to ensuring customer satisfaction by offering comprehensive pre and
              post-sales support, as well as reliable service and maintenance for a wide range of
              analytical instruments.
            </p>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 pt-2 font-display text-sm font-semibold text-foreground"
            >
              View our products
              <ArrowRight className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-accent">Product categories</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Seven ranges. One supplier.
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 font-display text-sm font-semibold"
            >
              All products
              <ArrowRight className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="mt-12">
            <CategoryGrid />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-px bg-border px-0 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="bg-background">
              <div className="h-full px-6 py-14 lg:px-10">
                <p.icon className="size-8 text-accent" strokeWidth={1.25} />
                <h3 className="eyebrow mt-8 text-foreground">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden">
              <img
                src={images.labAlt}
                alt="Laboratory analyst loading samples into an analytical instrument"
                loading="lazy"
                className="aspect-4/5 w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-accent">Services</p>
              <h2 className="mt-4 text-balance font-display text-3xl font-bold sm:text-4xl">
                Beyond supply — analysis, systems and support.
              </h2>
            </Reveal>
            <div className="mt-10 divide-y divide-border border-y border-border">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <Link to="/services" className="group flex items-start gap-6 py-6">
                    <span className="eyebrow pt-1 text-muted-foreground">0{i + 1}</span>
                    <span>
                      <span className="block font-display text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                        {s.title}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                        {s.body}
                      </span>
                    </span>
                    <ArrowRight className="ml-auto mt-1 size-5 shrink-0 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
