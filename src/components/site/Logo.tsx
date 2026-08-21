import { cn } from "@/lib/utils";
import logoDark from "@/assets/labmed-logo.png.asset.json";
import logoLight from "@/assets/labmed-logo-light.png.asset.json";

export function Logo({
  className,
  variant = "dark",
  /** kept for call-site compatibility; sizing is driven by height classes */
  markClassName,
  wordClassName,
}: {
  className?: string;
  variant?: "dark" | "light";
  markClassName?: string;
  wordClassName?: string;
}) {
  void markClassName;
  void wordClassName;
  return (
    <img
      src={variant === "light" ? logoLight.url : logoDark.url}
      alt="Labmed Technologies"
      className={cn("h-10 w-auto object-contain sm:h-12", className)}
    />
  );
}
