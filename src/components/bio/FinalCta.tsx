import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ctaParticles from "@/assets/cta-particles.jpg";
import { BRAND } from "./content";
import { Reveal, RevealWords } from "./Reveal";
import { PrimaryCtaLink, SecondaryCtaLink } from "./ui/CtaLink";

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const backdropY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const backdropOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.7, 0.35]);

  return (
    <section ref={ref} id="contact" className="relative overflow-hidden py-28 md:py-44">
      <motion.img
        src={ctaParticles}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1088}
        style={{ y: backdropY, opacity: backdropOpacity }}
        className="absolute inset-0 h-[120%] w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 text-center md:px-10">
        <Reveal>
          <p className="text-eyebrow">Partner with {BRAND.name}</p>
        </Reveal>

        <h2 className="mx-auto mt-7 max-w-4xl font-display text-[clamp(2.4rem,6.6vw,5.2rem)] leading-[0.98]">
          <RevealWords text="Let's build the biology of the next century." />
        </h2>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            Research partnerships, platform access and co-development programmes — tell us what you
            are trying to prove.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCtaLink href={`mailto:${BRAND.email}`}>{BRAND.email}</PrimaryCtaLink>
            <SecondaryCtaLink href="#technology">Read the technical brief</SecondaryCtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
