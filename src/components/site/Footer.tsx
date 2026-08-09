import { Link } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { contact, categories } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-sm bg-accent font-display text-sm font-bold text-accent-foreground">
              L
            </span>
            <span className="font-display text-lg font-bold">LABMED TECHNOLOGIES</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            Quality consumables, equipment and scientific services across South Africa and
            surrounding African countries. Level 4 Certified B-BBEE.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h2 className="eyebrow text-accent">Products</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/70">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products"
                  hash={c.slug}
                  className="transition-colors hover:text-ink-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="eyebrow text-accent">Company</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/70">
            <li>
              <Link to="/about" className="transition-colors hover:text-ink-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:text-ink-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-ink-foreground">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="eyebrow text-accent">Get in touch</h2>
          <ul className="mt-5 space-y-4 text-sm text-ink-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                {contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={contact.phoneHref} className="hover:text-ink-foreground">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-accent" />
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink-foreground"
              >
                {contact.cell} (WhatsApp)
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`mailto:${contact.email}`} className="break-all hover:text-ink-foreground">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{contact.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Labmed Technologies. All rights reserved.</p>
          <p>Level 4 Certified B-BBEE Company</p>
        </div>
      </div>
    </footer>
  );
}
