import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, type MotionValue } from "motion/react";
import { ABOUT_LAB_IMAGE, ABOUT_METRICS, PILLARS, type Pillar } from "./content";
import { REVEAL_VIEWPORT, eased } from "./motion";
import { Reveal, RevealWords } from "./Reveal";
import { RadialGauge, SequenceBars, Sparkline } from "./DataViz";

function PillarImage({ pillar, parallaxY }: { pillar: Pillar; parallaxY: MotionValue<string> }) {
  return (
    <div className="relative h-[24rem] w-full md:h-[32rem]">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.img
          key={pillar.title}
          src={pillar.image}
          alt={pillar.alt}
          loading="lazy"
          width={1200}
          height={900}
          style={{ y: parallaxY }}
          initial={{ opacity: 0, scale: 1.22, filter: "blur(14px)" }}
          animate={{ opacity: 1, scale: 1.1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(14px)" }}
          transition={eased(0.85)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
}

function AboutMetrics() {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-[1.5rem] border border-border"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <motion.img
          src={ABOUT_LAB_IMAGE.src}
          alt={ABOUT_LAB_IMAGE.alt}
          loading="lazy"
          width={1000}
          height={1200}
          initial={{ scale: 1.14 }}
          whileInView={{ scale: 1.02 }}
          viewport={REVEAL_VIEWPORT}
          transition={eased(1.4)}
          className="h-44 w-full object-cover sm:h-52"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" />
        <div className="absolute inset-x-4 bottom-4">
          <p className="text-eyebrow">wet-lab validation</p>
          <SequenceBars bars={18} />
        </div>
      </motion.div>

      <div className="flex flex-col justify-between gap-4 rounded-[1.5rem] border border-border bg-surface p-5">
        <RadialGauge
          value={ABOUT_METRICS.modelAgreement}
          label="model-to-assay agreement"
          size={84}
        />
        <div>
          <p className="text-eyebrow">cycle velocity</p>
          <Sparkline
            points={ABOUT_METRICS.cycleVelocity}
            className="mt-3 h-9 w-full text-primary"
          />
        </div>
      </div>
    </div>
  );
}

function PillarRow({
  pillar,
  index,
  isActive,
  onSelect,
}: {
  pillar: Pillar;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
      aria-pressed={isActive}
      className={`group grid w-full grid-cols-[auto_auto_minmax(0,1fr)] items-center gap-4 border-b py-5 text-left transition-colors sm:gap-6 ${
        isActive ? "border-primary/50" : "border-border hover:border-primary/30"
      }`}
    >
      <span className="font-mono text-xs text-primary">0{index + 1}</span>

      
      <motion.span
        animate={{ width: isActive ? 108 : 74, opacity: isActive ? 1 : 0.6 }}
        transition={eased(0.6)}
        className="relative block h-16 shrink-0 overflow-hidden rounded-xl border border-border"
      >
        <motion.img
          src={pillar.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1200}
          height={900}
          animate={{ scale: isActive ? 1.02 : 1.18 }}
          transition={eased(0.8)}
          className="h-full w-full object-cover"
        />
      </motion.span>

      <div className="min-w-0">
        <h3
          className={`font-display text-xl tracking-tight transition-all duration-500 ${
            isActive ? "translate-x-1 text-foreground" : "text-muted-foreground"
          }`}
        >
          {pillar.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
      </div>
    </button>
  );
}

export function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activePillar = PILLARS[activeIndex]!;

  
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="innovation" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          
          <Reveal className="order-2 lg:order-1">
            <div
              ref={imageRef}
              className="relative overflow-hidden rounded-[2rem] border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <PillarImage pillar={activePillar} parallaxY={parallaxY} />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-border bg-background/50 px-4 py-2 text-eyebrow backdrop-blur-md">
                {activePillar.tag}
              </div>

              
              <div className="absolute inset-x-5 bottom-5 flex gap-2">
                {PILLARS.map((pillar, i) => (
                  <motion.span
                    key={pillar.title}
                    animate={{ opacity: i === activeIndex ? 1 : 0.25 }}
                    className="h-0.5 flex-1 origin-left rounded-full bg-primary"
                  />
                ))}
              </div>
            </div>

            <AboutMetrics />
          </Reveal>

          
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-eyebrow">Innovation</p>
            </Reveal>

            <h2 className="mt-6 max-w-xl font-display text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.02]">
              <RevealWords text="Biology is becoming a design discipline." />
            </h2>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                For over a decade we have compressed the distance between hypothesis and evidence.
                Our closed-loop platform turns discovery into an engineering problem — measurable,
                repeatable and radically faster than traditional research cycles.
              </p>
            </Reveal>

            <ul className="mt-12 space-y-0 border-t border-border">
              {PILLARS.map((pillar, i) => (
                <Reveal as="li" key={pillar.title} delay={i * 0.08}>
                  <PillarRow
                    pillar={pillar}
                    index={i}
                    isActive={i === activeIndex}
                    onSelect={() => setActiveIndex(i)}
                  />
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
