import { BRAND, FOOTER_COLUMNS } from "./content";
import { Brand } from "./ui/Brand";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div>
          <div className="flex min-w-0 items-center gap-2.5">
            <Brand />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A computational biology platform engineering therapeutics, crops and living materials.
            Basel · Boston · Singapore.
          </p>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className="text-eyebrow">{column.title}</p>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#top"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 border-t border-border px-5 py-6 font-mono text-[0.7rem] text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <span>
          © {new Date().getFullYear()} {BRAND.legalName}
        </span>
        <span>Engineered with care for the scientific record</span>
      </div>
    </footer>
  );
}
