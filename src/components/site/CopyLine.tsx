import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyLine({ value, label = "Copy" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`${label} ${value}`}
      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-accent"
    >
      {copied ? <Check className="size-3.5 text-accent" /> : <Copy className="size-3.5" />}
      {copied ? "Copied" : label}
    </button>
  );
}
