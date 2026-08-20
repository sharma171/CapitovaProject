
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DURATION = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
  cinematic: 1.4,
} as const;

export const REVEAL_VIEWPORT = { once: true, margin: "0px 0px -10% 0px" } as const;

export const REVEAL_VIEWPORT_TIGHT = { once: true, margin: "-12% 0px -12% 0px" } as const;

export const eased = (duration: number, delay = 0) => ({
  duration,
  delay,
  ease: EASE_OUT_EXPO,
});

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
