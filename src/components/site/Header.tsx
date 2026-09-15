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
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 sm:px-5 lg:flex lg:justify-between lg:px-10">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className={cn(
            "group flex min-w-0 items-center py-2 pr-2 transition-colors lg:py-2.5",
            scrolled || open ? "text-foreground" : "text-ink-foreground",
          )}
        >
          <Logo
            variant={scrolled || open ? "dark" : "light"}
            className="max-h-16 max-w-[25rem] object-left sm:max-h-18 lg:w-[17rem]"
          />
        </Link>

        <nav className="hidden shrink-0 items-center gap-6 lg:flex xl:gap-8">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={cn(
                "link-underline relative py-6 text-sm font-medium transition-colors",
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
            href={contact.telHref}
            className={cn(
              "hidden items-center gap-2 text-sm font-medium transition-colors xl:inline-flex",
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-ink-foreground/75 hover:text-ink-foreground",
            )}
          >
            <Phone className="size-4" />
            {contact.telDisplay}
          </a>
          <a
            href={contact.phoneHref}
            className="sheen inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-all duration-300 hover:brightness-110 hover:shadow-lift"
          >
            <Phone className="size-4" />
            {contact.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-sm transition-colors lg:hidden",
            scrolled || open ? "text-foreground" : "text-ink-foreground",
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "overflow-hidden border-t bg-background transition-[max-height,opacity] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "max-h-[calc(100vh-4rem)] border-border opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3" aria-label="Mobile navigation">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3.5 font-display text-base font-medium text-muted-foreground transition-colors last:border-none hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-2 py-4">
            <a
              href={contact.phoneHref}
              className="inline-flex min-w-0 items-center justify-center gap-2 rounded-sm bg-accent px-3 py-3 text-sm font-medium text-accent-foreground"
            >
              <Phone className="size-4 shrink-0" /> <span className="truncate">{contact.phoneDisplay}</span>
            </a>
            <a
              href={contact.telHref}
              className="inline-flex min-w-0 items-center justify-center gap-2 rounded-sm border border-border px-3 py-3 text-sm font-medium text-foreground"
            >
              <Phone className="size-4 shrink-0 text-accent" /> <span className="truncate">{contact.telDisplay}</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
