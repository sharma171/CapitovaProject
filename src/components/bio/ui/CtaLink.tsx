import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function PrimaryCtaLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-primary py-3.5 pl-6 pr-2 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
      style={{ boxShadow: "var(--shadow-glow)" }}
    >
      {children}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/12 transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}

export function SecondaryCtaLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}
