import { BRAND } from "../content";

export function Brand({ showTagline = false }: { showTagline?: boolean }) {
  return (
    <>
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground">
        {BRAND.initial}
      </span>
      <span className="truncate font-display text-lg tracking-tight">{BRAND.name}</span>
      {showTagline && <span className="hidden text-eyebrow sm:inline">{BRAND.tagline}</span>}
    </>
  );
}
