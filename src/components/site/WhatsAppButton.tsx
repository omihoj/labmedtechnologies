import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-medium text-ink-foreground shadow-lift transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5"
    >
      <MessageCircle className="size-5 text-accent" />
      <span className="hidden sm:inline">Chat With Us</span>
    </a>
  );
}
