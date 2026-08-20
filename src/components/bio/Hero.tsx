import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  HERO_ACCENT_WORD_INDEX,
  HERO_CHIPS,
  HERO_HEADLINE_WORDS,
  HERO_MARQUEE_ITEMS,
} from "./content";
import { eased } from "./motion";
import { MolecularField } from "./MolecularField";
import { HeroOrbit } from "./HeroOrbit";
import { PrimaryCtaLink, SecondaryCtaLink } from "./ui/CtaLink";

function HeroHeadline() {
  return (
    <h1 className="mt-6 font-display text-[clamp(2.9rem,8.4vw,6.6rem)] leading-[0.92] tracking-[-0.045em]">
      {HERO_HEADLINE_WORDS.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-[0.06em] align-bottom"
        >
          <motion.span
            className={`inline-block ${i === HERO_ACCENT_WORD_INDEX ? "text-gradient-amber" : ""}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={eased(1.1, 0.16 + i * 0.08)}
          >
            {word}
            {"\u00A0"}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

function HeroMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-border py-4">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap text-eyebrow">
        
        {[0, 1].map((copy) => (
          <span key={copy} className="flex gap-12">
            {HERO_MARQUEE_ITEMS.map((item) => (
              <span key={item} className="flex items-center gap-12">
                {item}
                <span className="text-primary">✳</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="hero-surface relative overflow-hidden pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bio-grid opacity-70" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <MolecularField />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] items-end gap-12 px-5 pb-14 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20">
        
        <motion.div style={{ y: copyY, opacity: copyOpacity }} className="max-w-2xl">
          <motion.p
            className="text-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Capitova Bio Systems — est. 2011
          </motion.p>

          <HeroHeadline />

          <motion.p
            className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            A computational biology platform where machine intelligence meets wet-lab precision —
            designing therapeutics, resilient crops and living materials at unprecedented speed.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.62 }}
          >
            <PrimaryCtaLink href="#innovation">Explore the platform</PrimaryCtaLink>
            <SecondaryCtaLink href="#technology">Watch the science</SecondaryCtaLink>
          </motion.div>

          <ul className="mt-12 flex flex-wrap gap-2.5">
            {HERO_CHIPS.map(({ icon: Icon, label }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 + i * 0.09 }}
                className="flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2.5 text-xs text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/60 hover:text-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {label}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        
        <motion.div
          style={{ y: visualY, scale: visualScale }}
          className="relative"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={eased(1.4, 0.25)}
        >
          <HeroOrbit />

          <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface/70 px-5 py-4 backdrop-blur-xl">
            <div className="min-w-0">
              <p className="font-display text-xl tracking-tight">Helix-7 sequencer</p>
              <p className="truncate text-xs text-muted-foreground">
                Live run · 4.2 M base pairs / second
              </p>
            </div>
            
            <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15">
              <span className="h-2 w-2 animate-ping rounded-full bg-primary" />
              <span className="absolute h-2 w-2 rounded-full bg-primary" />
            </span>
          </div>
        </motion.div>
      </div>

      <HeroMarquee />
    </section>
  );
}
