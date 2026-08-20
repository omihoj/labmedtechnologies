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
  { x1: 63, y1: 8, x2: 60, y2: 22, w: 7, n: 16, minR: 1.2, maxR: 2.6 },
  // body tube, angled down-left
  { x1: 61, y1: 20, x2: 47, y2: 50, w: 12, n: 54, minR: 1.6, maxR: 3.4 },
  // arm / focus knob mass
  { x1: 52, y1: 44, x2: 66, y2: 62, w: 13, n: 40, minR: 1.6, maxR: 3.2 },
  // stage
  { x1: 30, y1: 63, x2: 70, y2: 63, w: 8, n: 42, minR: 1.4, maxR: 3.0 },
  // side arm extending left (sparse tip)
  { x1: 44, y1: 56, x2: 24, y2: 57, w: 5, n: 16, minR: 1.0, maxR: 2.2 },
  // pillar
  { x1: 52, y1: 66, x2: 52, y2: 80, w: 10, n: 24, minR: 1.5, maxR: 3.0 },
  // base
  { x1: 26, y1: 85, x2: 76, y2: 85, w: 11, n: 54, minR: 1.6, maxR: 3.6 },
];

const NAVY = "#1B3A4B";
const MINT = "#5EEAA0";

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

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Labmed Technologies" className={className}>
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.fill} opacity={d.o} />
      ))}
    </svg>
  );
}

export function Logo({
  className,
  wordClassName,
  markClassName,
}: {
  className?: string;
  wordClassName?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoMark className={cn("size-10 shrink-0", markClassName)} />
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
