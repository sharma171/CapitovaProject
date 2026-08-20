import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function Sparkline({
  points,
  className,
}: {
  points: number[];
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const w = 100;
  const h = 32;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = max - min || 1;
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / span) * (h - 4) - 2;
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <motion.path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

export function RadialGauge({
  value,
  label,
  size = 96,
}: {
  value: number;
  label: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const r = 42;
  const c = 2 * Math.PI * r;

  return (
    <div ref={ref} className="flex items-center gap-3">
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeWidth="3" opacity="0.15" />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          className="text-primary"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={c}
          transform="rotate(-90 50 50)"
          initial={{ strokeDashoffset: c }}
          animate={inView ? { strokeDashoffset: c * (1 - value / 100) } : {}}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <text
          x="50"
          y="55"
          textAnchor="middle"
          className="fill-foreground font-mono text-[1.35rem]"
        >
          {value}
        </text>
      </svg>
      <p className="max-w-[7rem] text-xs leading-relaxed text-muted-foreground">{label}</p>
    </div>
  );
}

export function SequenceBars({ bars = 22 }: { bars?: number }) {
  return (
    <div className="flex h-10 items-end gap-1" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          className="w-1 flex-1 rounded-full bg-primary/70"
          animate={{ height: ["18%", "92%", "34%", "70%", "18%"] }}
          transition={{
            duration: 2.6 + (i % 5) * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.06,
          }}
        />
      ))}
    </div>
  );
}