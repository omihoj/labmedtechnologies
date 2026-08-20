import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { contact } from "@/lib/site";
import { Logo } from "@/components/site/Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "All Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className={cn(
            "group flex items-center py-3 transition-colors",
            scrolled || open ? "text-foreground" : "text-ink-foreground",
          )}
        >
          <Logo
            variant={scrolled || open ? "dark" : "light"}
            markClassName="size-12"
            wordClassName="text-[0.8rem] sm:text-[0.95rem] font-semibold"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={cn(
                "relative py-6 text-sm font-medium transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-ink-foreground/75 hover:text-ink-foreground",
              )}
              activeProps={{
                className: cn(scrolled ? "text-foreground" : "text-ink-foreground"),
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-all duration-300 hover:brightness-110 hover:shadow-lift"
          >
            <Phone className="size-4" />
            {contact.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "lg:hidden p-2 -mr-2 transition-colors",
            scrolled || open ? "text-foreground" : "text-ink-foreground",
          )}
        >
          {open ? <Menu className="size-6 hidden" /> : null}
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-5 py-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-display text-lg text-foreground last:border-none"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={contact.phoneHref}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-4 py-3 text-sm font-medium text-accent-foreground"
          >
            <Phone className="size-4" /> {contact.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
