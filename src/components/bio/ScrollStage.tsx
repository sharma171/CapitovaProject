import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { ArrowDown } from "lucide-react";

const slides = [
  { top: "Growing a", bottom: "Better Future" },
  { top: "By Engineering", bottom: "Living Systems" },
  { top: "Ultra Scalable,", bottom: "Sustainable & Safe" },
  { top: "For Therapeutics", bottom: "& Regenerative Care" },
];

export function ScrollStage() {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progress = useRef(0);
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const veil = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [1, 0, 0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    progress.current = v;
    const next = Math.min(slides.length - 1, Math.max(0, Math.floor(v * slides.length)));
    setIndex((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const branch = (
      x: number,
      y: number,
      angle: number,
      len: number,
      depth: number,
      grown: number,
      time: number,
    ) => {
      if (depth === 0 || grown <= 0) return;
      const sway = Math.sin(time / 1400 + depth) * 0.045 * depth;
      const a = angle + sway;
      const l = len * Math.min(1, grown);
      const x2 = x + Math.cos(a) * l;
      const y2 = y + Math.sin(a) * l;

      ctx.strokeStyle = `oklch(0.8 0.145 76 / ${0.14 + depth * 0.07})`;
      ctx.lineWidth = depth * 0.9;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      if (grown >= 1) {
        ctx.fillStyle = `oklch(0.72 0.11 215 / ${0.1 + depth * 0.06})`;
        ctx.beginPath();
        ctx.arc(x2, y2, depth * 0.9, 0, Math.PI * 2);
        ctx.fill();
      }

      const child = grown - 1;
      branch(x2, y2, a - 0.42, l * 0.76, depth - 1, child, time);
      branch(x2, y2, a + 0.42, l * 0.76, depth - 1, child, time);
    };

    let raf = 0;
    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      const p = progress.current;
      const depth = 8;
      const grown = 0.4 + p * depth;
      const len = Math.min(h * 0.3, 210) * (0.72 + p * 0.4);
      branch(w / 2, h * 0.98, -Math.PI / 2, len, depth, grown, time);

      
      for (let i = 0; i < 44; i++) {
        const seed = i * 12.9898;
        const fx = ((Math.sin(seed) + 1) / 2) * w;
        const speed = 0.02 + ((Math.cos(seed) + 1) / 2) * 0.05;
        const fy = h - (((time * speed) / 30 + i * 90) % (h * 1.1));
        ctx.fillStyle = `oklch(0.86 0.13 88 / ${0.1 + p * 0.35})`;
        ctx.beginPath();
        ctx.arc(fx, fy, 1.1 + (i % 3) * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  const slide = slides[index]!;

  return (
    <section ref={ref} id="growth" className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-surface">
        <div className="pointer-events-none absolute inset-0 bio-grid opacity-50" aria-hidden="true" />
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        />
        <motion.div
          style={{ opacity: veil }}
          className="pointer-events-none absolute inset-0 bg-background"
          aria-hidden="true"
        />

        <div className="relative grid h-full place-items-center px-6 text-center">
          <h2 className="sr-only">Our mission</h2>
          <div>
            {[slide.top, slide.bottom].map((line, li) => (
              <div key={`${index}-${li}`} className="overflow-hidden">
                <motion.p
                  initial={{ y: "108%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: li * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-[clamp(2.4rem,7.4vw,6rem)] leading-[0.98] tracking-[-0.045em] text-primary"
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </div>
        </div>

        <ul
          className="absolute left-5 top-1/2 hidden -translate-y-1/2 flex-col gap-2.5 md:flex"
          aria-hidden="true"
        >
          {slides.map((s, i) => (
            <li
              key={s.bottom}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                i === index ? "scale-150 bg-primary" : "bg-foreground/25"
              }`}
            />
          ))}
        </ul>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary md:left-6 md:translate-x-0">
          <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}