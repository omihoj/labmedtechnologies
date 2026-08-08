import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { images } from "@/lib/site";

const slides = [
  {
    image: images.hero1,
    eyebrow: "We provide Science Solutions",
    title: "Quality consumables and equipment",
    body: "Solutions and services to accelerate science together.",
  },
  {
    image: images.hero2,
    eyebrow: "Side by side with our clients",
    title: "Science is a journey to continuously grow, nurture and evolve",
    body: "We are passionate about working side by side with our clients and stakeholders to make a difference towards better health, well-being and a cleaner environment.",
  },
  {
    image: images.hero3,
    eyebrow: "South Africa & beyond",
    title: "One partner for laboratory, medical and agricultural supply",
    body: "Supplying laboratories, clinics, producers and institutions across South Africa and surrounding African countries.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 700) * 0.25);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-ink text-ink-foreground">
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          <img
            src={slide.image}
            alt=""
            aria-hidden
            className={cn(
              "size-full scale-110 object-cover transition-transform duration-[9000ms] ease-out",
              i === index ? "scale-100" : "scale-110",
            )}
            style={{ transform: `translate3d(0, ${offset}px, 0)` }}
            {...(i === 0 ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
          />
        </div>
      ))}

      <div className="absolute inset-0 veil" />
      <div className="absolute inset-0 opacity-[0.07] grid-lines" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-20 pt-36 lg:px-10 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            {slides.map((slide, i) => (
              <div
                key={slide.title}
                className={cn(
                  "transition-all duration-1000 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
                  i === index
                    ? "relative opacity-100 translate-y-0"
                    : "pointer-events-none absolute opacity-0 translate-y-6",
                )}
                aria-hidden={i !== index}
              >
                <p className="eyebrow text-accent">{slide.eyebrow}</p>
                <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/75">
                  {slide.body}
                </p>
              </div>
            ))}

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all duration-300 hover:shadow-lift hover:brightness-110"
              >
                Contact Us
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-sm border border-ink-foreground/25 px-6 py-3.5 text-sm font-medium text-ink-foreground transition-colors duration-300 hover:bg-ink-foreground/10"
              >
                View Our Products
              </Link>
            </div>
          </div>

          <div className="flex gap-2 lg:col-span-4 lg:justify-end">
            {slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-0.5 w-14 transition-all duration-500",
                  i === index ? "bg-accent" : "bg-ink-foreground/25 hover:bg-ink-foreground/50",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
