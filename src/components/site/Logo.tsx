import { cn } from "@/lib/utils";

/** Deterministic PRNG so SSR and client render identical dots. */
function makeRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

type Capsule = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  w: number;
  n: number;
  minR: number;
  maxR: number;
};

/** Microscope silhouette described as overlapping capsules (viewBox 0 0 100 100). */
const parts: Capsule[] = [
  // eyepiece (sparse, fading tip)
  { x1: 66, y1: 8, x2: 62, y2: 22, w: 6, n: 14, minR: 1.1, maxR: 2.2 },
  // body tube, angled down-left
  { x1: 63, y1: 20, x2: 48, y2: 52, w: 9, n: 48, minR: 1.5, maxR: 3.0 },
  // arm sweeping to the pillar
  { x1: 52, y1: 46, x2: 66, y2: 66, w: 10, n: 34, minR: 1.5, maxR: 3.0 },
  // stage
  { x1: 26, y1: 64, x2: 74, y2: 64, w: 6, n: 52, minR: 1.4, maxR: 2.8 },
  // side arm extending left (sparse tip)
  { x1: 46, y1: 54, x2: 22, y2: 55, w: 4.5, n: 18, minR: 0.9, maxR: 2.0 },
  // pillar
  { x1: 60, y1: 66, x2: 58, y2: 82, w: 8, n: 26, minR: 1.4, maxR: 2.8 },
  // base
  { x1: 22, y1: 87, x2: 78, y2: 87, w: 10, n: 70, minR: 1.5, maxR: 3.4 },
];

const NAVY = "#1B3A4B";
const MINT = "#5EEAA0";
const LIGHT = "#CFE3E8";

const dots = (() => {
  const rng = makeRng(20260820);
  const out: { cx: number; cy: number; r: number; fill: string; o: number }[] = [];
  for (const p of parts) {
    const dx = p.x2 - p.x1;
    const dy = p.y2 - p.y1;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;
    for (let i = 0; i < p.n; i++) {
      const t = rng();
      const spread = (rng() - 0.5) * p.w;
      const jitter = (rng() - 0.5) * 2.2;
      out.push({
        cx: p.x1 + dx * t + nx * spread + jitter,
        cy: p.y1 + dy * t + ny * spread + jitter,
        r: p.minR + rng() * (p.maxR - p.minR),
        fill: rng() < 0.6 ? NAVY : MINT,
        o: 0.55 + rng() * 0.45,
      });
    }
  }
  return out;
})();

export function LogoMark({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Labmed Technologies" className={className}>
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill={d.fill === NAVY && variant === "light" ? LIGHT : d.fill}
          opacity={d.o}
        />
      ))}
    </svg>
  );
}

export function Logo({
  className,
  wordClassName,
  markClassName,
  variant = "dark",
}: {
  className?: string;
  wordClassName?: string;
  markClassName?: string;
  variant?: "dark" | "light";
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark variant={variant} className={cn("size-10 shrink-0", markClassName)} />
      <span
        className={cn(
          "font-serif text-[0.95rem] leading-none tracking-[0.18em] uppercase",
          wordClassName,
        )}
      >
        Labmed Technologies
      </span>
    </span>
  );
}
