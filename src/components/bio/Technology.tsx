import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import stageSequence from "@/assets/stage-sequence.jpg";
import stageSimulate from "@/assets/stage-simulate.jpg";
import stageSynthesise from "@/assets/stage-synthesise.jpg";
import stageValidate from "@/assets/stage-validate.jpg";
import { Reveal, RevealWords } from "./Reveal";

const stages = [
  {
    id: "sequence",
    label: "Sequence",
    image: stageSequence,
    alt: "Nanopore sequencing array with glowing amber data threads",
    detail:
      "Long-read nanopore arrays resolve full genomes in under four hours, streaming straight into our inference cluster.",
    metric: "4.2M bp/s",
  },
  {
    id: "simulate",
    label: "Simulate",
    image: stageSimulate,
    alt: "Translucent amber protein ribbons folding in simulation",
    detail:
      "Atomistic folding models predict structure, binding affinity and off-target risk before synthesis begins.",
    metric: "0.94 AUC",
  },
  {
    id: "synthesise",
    label: "Synthesise",
    image: stageSynthesise,
    alt: "Microfluidic chip being printed with enzymatic DNA droplets",
    detail:
      "Enzymatic DNA printing assembles validated constructs on-chip with base-perfect fidelity.",
    metric: "99.98%",
  },
  {
    id: "validate",
    label: "Validate",
    image: stageValidate,
    alt: "Organoid culture plate glowing under warm lab light",
    detail:
      "Automated organoid assays return functional readouts in days, closing the design loop continuously.",
    metric: "72 hrs",
  },
];

export function Technology() {
  const [active, setActive] = useState(stages[0]!.id);
  const current = stages.find((s) => s.id === active) ?? stages[0]!;

  return (
    <section
      id="technology"
      className="leaf-surface relative overflow-hidden border-y border-border py-24 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bio-grid opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal>
              <p className="text-eyebrow">Technology / research</p>
            </Reveal>
            <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.02]">
              <RevealWords text="One continuous loop from data to living matter." />
            </h2>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Hover or tap a panel — each stage expands into its own frame of the loop.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 flex h-[130vh] flex-col gap-3 sm:h-[112vh] md:h-[34rem] md:flex-row md:gap-4">
            {stages.map((stage, i) => {
              const isActive = stage.id === active;
              return (
                <motion.button
                  key={stage.id}
                  type="button"
                  layout
                  onMouseEnter={() => setActive(stage.id)}
                  onFocus={() => setActive(stage.id)}
                  onClick={() => setActive(stage.id)}
                  aria-pressed={isActive}
                  animate={{ flexGrow: isActive ? 3.2 : 1 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  style={{ flexBasis: 0, boxShadow: "var(--shadow-card)" }}
                  className={`group relative min-h-0 w-full cursor-pointer overflow-hidden rounded-[1.75rem] border text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive ? "border-primary/45" : "border-border hover:border-primary/25"
                  }`}
                >
                  <motion.img
                    src={stage.image}
                    alt={stage.alt}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    animate={{ scale: isActive ? 1.04 : 1.14, opacity: isActive ? 1 : 0.55 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/35 to-background/10" />
                  <motion.div
                    animate={{ opacity: isActive ? 0 : 0.45 }}
                    className="absolute inset-0 bg-background"
                  />

                  <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-xs text-primary">0{i + 1}</span>
                      <motion.span
                        animate={{ opacity: isActive ? 1 : 0.55 }}
                        className="font-mono text-[0.65rem] tracking-[0.2em] text-primary uppercase"
                      >
                        {stage.metric}
                      </motion.span>
                    </div>

                    <div>
                      <motion.h3
                        layout="position"
                        className={`font-display leading-[0.95] tracking-tight transition-colors ${
                          isActive
                            ? "text-[clamp(1.9rem,3.6vw,3rem)] text-foreground"
                            : "text-[clamp(1.5rem,2.4vw,2rem)] text-muted-foreground"
                        }`}
                      >
                        {stage.label}
                      </motion.h3>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-sm pt-3 text-sm leading-relaxed text-muted-foreground">
                              {stage.detail}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 flex items-center gap-4">
          <span className="text-eyebrow">stage · {current.label}</span>
          <span className="h-px flex-1 bg-border" />
          <AnimatePresence mode="wait">
            <motion.span
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="font-display text-2xl tracking-tight text-primary"
            >
              {current.metric}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}