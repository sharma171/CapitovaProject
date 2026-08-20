import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BRAND, NAV_LINKS } from "./content";
import { eased } from "./motion";
import { Brand } from "./ui/Brand";

const clipAt = (radius: string) => `circle(${radius} at calc(100% - 5rem) 3rem)`;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 transition-all duration-500 ${
          open ? "z-[60]" : "z-50"
        } ${
          scrolled && !open
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-4 md:px-10">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-2.5"
            aria-label={`${BRAND.name} home`}
          >
            <Brand showTagline />
          </a>

          <button
            type="button"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-[60] inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Menu
            <span
              className={`inline-block transition-transform duration-500 ${open ? "rotate-45" : ""}`}
              aria-hidden="true"
            >
              +
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="overlay"
            aria-label="Main"
            initial={{ clipPath: clipAt("0%") }}
            animate={{ clipPath: clipAt("150%") }}
            exit={{ clipPath: clipAt("0%") }}
            transition={eased(0.8)}
            className="fixed inset-0 z-[55] bg-background/98 backdrop-blur-2xl"
          >
            <div
              className="pointer-events-none absolute inset-0 bio-grid opacity-60"
              aria-hidden="true"
            />

            <div className="relative mx-auto flex h-full max-w-[1400px] flex-col lg:flex-row lg:items-center px-5 md:px-10">
              <ul className="flex flex-col justify-center h-full gap-1 lg:w-1/2">
                {NAV_LINKS.map((link, i) => (
                  <li key={link.href} className="overflow-hidden">
                    <motion.a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={eased(0.8, 0.16 + i * 0.07)}
                      className="block font-display text-[clamp(2.2rem,7vw,5rem)] leading-[1.05] tracking-[-0.045em] text-foreground transition-colors duration-300 hover:text-primary"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>

              <div className="hidden lg:flex lg:w-1/2 h-full items-center justify-center pl-10 pointer-events-none">
                {(() => {
                  const activeHref = hoveredLink || NAV_LINKS[0]!.href;
                  const activeData = NAV_LINKS.find((l) => l.href === activeHref) || NAV_LINKS[0]!;

                  return (
                    <div className="flex flex-col gap-6 max-w-lg w-full">
                      
                      <motion.div
                        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                        transition={eased(1.2, 0.2)}
                        className="relative w-full aspect-video overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-glow"
                      >
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={activeData.href}
                            src={typeof activeData.image === 'string' ? activeData.image : (activeData.image as any)?.src || activeData.image}
                            alt={activeData.label}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={eased(0.6)}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </AnimatePresence>
                      </motion.div>

                      
                      <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={activeData.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={eased(0.6)}
                            className="text-lg text-muted-foreground leading-relaxed"
                          >
                            {activeData.description}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
