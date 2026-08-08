import { createFileRoute } from "@tanstack/react-router";
import { Truck, Microscope, Sparkles, Handshake } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Labmed Technologies" },
      {
        name: "description",
        content:
          "Labmed Technologies is a leading South African supplier of laboratory, medical and agricultural products and services, backed by technical expertise and quality brands.",
      },
      { property: "og:title", content: "About Us | Labmed Technologies" },
      {
        property: "og:description",
        content:
          "Years of experience supplying laboratories, clinics and producers across South Africa and Africa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const highlights = [
  {
    icon: Microscope,
    title: "Quality Products & Technical Expertise",
    body: "We offer a wide range of quality products, backed by technical expertise. We carefully select the best brands and provide comprehensive support and after-sales service.",
  },
  {
    icon: Sparkles,
    title: "Quality Brands",
    body: "Our brand partners are at the forefront of innovation in their industries. We proudly stand alongside them in offering you outstanding products and services.",
  },
  {
    icon: Handshake,
    title: "Amazing Customer Service",
    body: "Customer satisfaction is of paramount importance to us, from the time of order through to after-sales service. Our aim is to understand your needs to ensure you receive true value from your investment. Getting this right is our business.",
  },
  {
    icon: Truck,
    title: "Fast, Efficient and Hassle-Free Service",
    body: "We believe in keeping things simple and straightforward for our customers. Our extensive experience has enabled us to forge strong relationships with water boards, municipalities, auditors, consultants, laboratories, food and beverage manufacturers, educational institutes, as well as primary producers such as farmers, dairies and mining companies.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A reliable partner for laboratories and scientific institutions."
        body="Labmed Technologies is one of South Africa's leading suppliers, operating across South Africa and surrounding African countries, supplying laboratory, medical and agricultural products and services."
        image={images.hero2}
      />

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-accent">Our approach</p>
            <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
              We understand our clients' needs and provide tailored solutions.
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-sm leading-relaxed text-muted-foreground lg:col-span-8">
            <p>
              With years of experience, Labmed Technologies is a reliable partner for laboratories
              and scientific institutions. We understand our clients' needs and provide tailored
              solutions across every discipline we serve.
            </p>
            <p>
              From consumables and analytical instrumentation to testing, consulting and technical
              support, we work to make sure the tools in your facility perform exactly as they
              should — and keep performing.
            </p>
            <p className="text-foreground">Labmed Technologies is a Level 1 Certified B-BBEE company.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 90} className="bg-background">
                <div className="h-full p-8 lg:p-12">
                  <h.icon className="size-8 text-accent" strokeWidth={1.25} />
                  <h2 className="mt-8 font-display text-xl font-semibold">{h.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-accent">Efficient Delivery</p>
            <h2 className="mt-5 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
              Delivered efficiently across South Africa and the rest of Africa.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Labmed Technologies delivers efficiently through our courier partners across South
              Africa and the rest of Africa. With years of experience, we eagerly anticipate
              continuing to be an invaluable partner in helping you meet your quality requirements.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <img
              src={images.hero3}
              alt="Clear water sample being analysed in laboratory glassware"
              loading="lazy"
              className="aspect-16/10 w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
