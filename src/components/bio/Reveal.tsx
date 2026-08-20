import { motion, useInView, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";
import { DURATION, EASE_OUT_EXPO, REVEAL_VIEWPORT, REVEAL_VIEWPORT_TIGHT, eased } from "./motion";

type RevealProps = {
  children: ReactNode;
    delay?: number;
    y?: number;
  className?: string;
    as?: "div" | "section" | "li" | "span";
};

const revealVariants: Variants = {
  hidden: (y: number) => ({ opacity: 0, y, filter: "blur(6px)" }),
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.slow, ease: EASE_OUT_EXPO },
  },
};

export function Reveal({ children, delay = 0, y = 28, className, as = "div" }: RevealProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      custom={y}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT_TIGHT}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, REVEAL_VIEWPORT);
  const hidden = { y: "110%", opacity: 0 };

  return (
    <span ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-[0.08em] align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={hidden}
            animate={inView ? { y: "0%", opacity: 1 } : hidden}
            transition={eased(1, i * 0.055)}
          >
            {word}
            {"\u00A0"}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
