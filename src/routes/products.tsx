import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { categories, images } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "All Products | Labmed Technologies" },
      {
        name: "description",
        content:
          "Browse Labmed Technologies product categories: chemicals, laboratory, medical, dental, beauty, office and agricultural supplies.",
      },
      { property: "og:title", content: "All Products | Labmed Technologies" },
      {
        property: "og:description",
        content:
          "Seven supply ranges backed by technical expertise, quality brands and after-sales support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero
        eyebrow="All Products"
        title="Seven supply ranges, sourced from the world's leading brands."
        body="Our range is extensive — here are the categories we supply. Tell us what you need and our team will quote you directly."
        image={images.hero1}
      />

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-10">
          <Reveal className="flex flex-wrap gap-x-6 gap-y-3">
            {categories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="eyebrow text-muted-foreground transition-colors hover:text-accent"
              >
                {cat.name}
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          {categories.map((cat, i) => (
            <article
              key={cat.slug}
              id={cat.slug}
              className="scroll-mt-24 border-b border-border py-16 lg:py-24"
            >
              <div className="grid gap-10 lg:grid-cols-12">
                <Reveal className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover transition-transform duration-[1400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                    />
                  </div>
                </Reveal>
                <Reveal delay={100} className="lg:col-span-7">
                  <p className="eyebrow text-accent">
                    {String(i + 1).padStart(2, "0")} — Category
                  </p>
                  <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{cat.name}</h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {cat.blurb}
                  </p>
                  <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    search={{ category: cat.name }}
                    className="group mt-9 inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    Enquire about {cat.name}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
