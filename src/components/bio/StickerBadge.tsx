import { ArrowRight } from "lucide-react";



export function StickerBadge() {


  return (
    <a
      href="#contact"
      className="group fixed bottom-5 right-5 z-50 hidden h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 hover:scale-105 md:grid"
      style={{ boxShadow: "var(--shadow-glow)" }}
      aria-label="Contact us"
    >

      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
}