import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  body,
  image,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover opacity-45"
      />
      <div className="absolute inset-0 veil" />
      <div className="absolute inset-0 opacity-[0.07] grid-lines" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">
        <Reveal>
          <p className="eyebrow text-accent">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {body ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75">
              {body}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
