import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MessageCircle, MapPin, Clock, Send, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { contact, categories, images } from "@/lib/site";

type ContactSearch = { category?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch =>
    typeof search["category"] === "string" ? { category: search["category"] } : {},
  head: () => ({
    meta: [
      { title: "Contact Us | Labmed Technologies Pretoria" },
      {
        name: "description",
        content:
          "Contact Labmed Technologies in Akasia, Pretoria. Call or WhatsApp 064 936 6549 or send us an enquiry for laboratory, medical and agricultural supplies.",
      },
      { property: "og:title", content: "Contact Us | Labmed Technologies Pretoria" },
      {
        property: "og:description",
        content: "Talk to our team about products, testing, consulting or technical support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
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
  component: Contact,
});

const field =
  "w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

function Contact() {
  const { category } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: category ?? "",
    message: "",
  });

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
    `Enquiry${values.category ? ` — ${values.category}` : ""}`,
  )}&body=${encodeURIComponent(
    `Name: ${values.name}\nCompany: ${values.company}\nEmail: ${values.email}\nPhone: ${values.phone}\nCategory: ${values.category}\n\n${values.message}`,
  )}`;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.location.href = mailto;
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to a team that knows the products."
        body="Send us an enquiry and we'll come back to you with a quote, availability and technical guidance."
        image={images.chem}
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-accent">Details</p>
            <h2 className="mt-4 font-display text-3xl font-bold">Labmed Technologies</h2>

            <ul className="mt-10 divide-y divide-border border-y border-border">
              <li className="flex gap-4 py-5">
                <Phone className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.5} />
                <span>
                  <span className="eyebrow block text-muted-foreground">Telephone</span>
                  <a href={contact.phoneHref} className="mt-1 block text-sm hover:text-accent">
                    {contact.phoneDisplay}
                  </a>
                </span>
              </li>
              <li className="flex gap-4 py-5">
                <MessageCircle className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.5} />
                <span>
                  <span className="eyebrow block text-muted-foreground">Cell / WhatsApp</span>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-sm hover:text-accent"
                  >
                    {contact.cellDisplay}
                  </a>
                </span>
              </li>
              <li className="flex gap-4 py-5">
                <Mail className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.5} />
                <span>
                  <span className="eyebrow block text-muted-foreground">E-mail</span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block break-all text-sm hover:text-accent"
                  >
                    {contact.email}
                  </a>
                </span>
              </li>
              <li className="flex gap-4 py-5">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.5} />
                <span>
                  <span className="eyebrow block text-muted-foreground">Physical Address</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {contact.address.join(", ")}
                  </span>
                </span>
              </li>
              <li className="flex gap-4 py-5">
                <Clock className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.5} />
                <span>
                  <span className="eyebrow block text-muted-foreground">Office Hours</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{contact.hours}</span>
                </span>
              </li>
            </ul>

            <div className="mt-10 overflow-hidden border border-border">
              <iframe
                title="Labmed Technologies location in Akasia, Pretoria"
                src="https://www.google.com/maps?q=583%20Heatherview%20Akasia%20Pretoria&output=embed"
                loading="lazy"
                className="h-72 w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="border border-border p-7 shadow-soft lg:p-10">
              <p className="eyebrow text-accent">Enquiry form</p>
              <h2 className="mt-4 font-display text-2xl font-bold">Send us a message</h2>

              {sent ? (
                <div className="mt-8 flex items-start gap-3 border border-accent/40 bg-surface p-5">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Thank you — your e-mail client has been opened with your enquiry. You can also
                    reach us directly on{" "}
                    <a href={contact.whatsapp} className="text-accent" target="_blank" rel="noreferrer">
                      WhatsApp
                    </a>{" "}
                    or at{" "}
                    <a href={`mailto:${contact.email}`} className="text-accent">
                      {contact.email}
                    </a>
                    .
                  </p>
                </div>
              ) : null}

              <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="eyebrow text-muted-foreground">Name*</span>
                  <input
                    required
                    className={field}
                    value={values.name}
                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                    placeholder="Your full name"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="eyebrow text-muted-foreground">Company</span>
                  <input
                    className={field}
                    value={values.company}
                    onChange={(e) => setValues({ ...values, company: e.target.value })}
                    placeholder="Organisation"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="eyebrow text-muted-foreground">E-mail*</span>
                  <input
                    required
                    type="email"
                    className={field}
                    value={values.email}
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                    placeholder="you@company.co.za"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="eyebrow text-muted-foreground">Phone</span>
                  <input
                    className={field}
                    value={values.phone}
                    onChange={(e) => setValues({ ...values, phone: e.target.value })}
                    placeholder="Contact number"
                  />
                </label>
                <label className="grid gap-2 sm:col-span-2">
                  <span className="eyebrow text-muted-foreground">Category of interest</span>
                  <select
                    className={field}
                    value={values.category}
                    onChange={(e) => setValues({ ...values, category: e.target.value })}
                  >
                    <option value="">Select a category</option>
                    {categories.map((c) => (
                      <option key={c.slug} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                    <option value="Laboratory Testing">Laboratory Testing</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Technical Services">Technical Services</option>
                  </select>
                </label>
                <label className="grid gap-2 sm:col-span-2">
                  <span className="eyebrow text-muted-foreground">Message*</span>
                  <textarea
                    required
                    rows={6}
                    className={field}
                    value={values.message}
                    onChange={(e) => setValues({ ...values, message: e.target.value })}
                    placeholder="Tell us what you need"
                  />
                </label>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all duration-300 hover:brightness-110 hover:shadow-lift"
                  >
                    Send enquiry
                    <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
