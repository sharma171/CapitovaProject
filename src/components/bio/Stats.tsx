import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { STATS } from "./content";
import { REVEAL_VIEWPORT, prefersReducedMotion } from "./motion";
import { Reveal, RevealWords } from "./Reveal";
import { Sparkline } from "./DataViz";

const COUNT_DURATION_MS = 1600;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, REVEAL_VIEWPORT);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setDisplay(value);
      return;
    }

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / COUNT_DURATION_MS, 1);
      setDisplay(Math.round(value * easeOutCubic(progress)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span
      ref={ref}
      className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none tracking-tight"
    >
      {display}
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden border-y border-border bg-surface py-24 md:py-36"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal>
              <p className="text-eyebrow">Impact</p>
            </Reveal>
            <h2 className="mt-6 max-w-xl font-display text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.02]">
              <RevealWords text="Measured in evidence, not promises." />
            </h2>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Figures reflect trailing twelve-month activity across our Basel, Boston and Singapore
              biofoundries.
            </p>
          </Reveal>
        </div>

        <dl className="mt-16 grid gap-px overflow-hidden border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="border-b border-border py-10 sm:border-r sm:pr-8 sm:last:border-r-0">
                <dd>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mt-5 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
                  {stat.label}
                </dt>
                <Sparkline
                  points={stat.trend}
                  className="mt-6 h-8 w-full max-w-[15rem] text-primary"
                />
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
