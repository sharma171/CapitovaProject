import { motion, useReducedMotion } from "motion/react";
import heroMicroscopy from "@/assets/hero-microscopy.jpg";
import { ORBIT_RINGS } from "./content";
import { eased } from "./motion";

const HELIX_RUNG_COUNT = 22;
const NODE_GLOW = "0 0 26px 6px oklch(0.8 0.145 76 / 0.6)";

export function HeroOrbit() {
  const reduced = useReducedMotion();

  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border border-border"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="relative h-[clamp(24rem,56vh,34rem)] w-full lg:h-[38rem]">
        
        <motion.img
          src={heroMicroscopy}
          alt="Phase-contrast microscopy field of live bacterial cells"
          width={1200}
          height={1600}
          initial={{ scale: 1.16, opacity: 0 }}
          animate={{ scale: 1.04, opacity: 1 }}
          transition={eased(1.8)}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/60" />

        
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative aspect-square w-[76%] max-w-[26rem]">
            {ORBIT_RINGS.map((ring, ringIndex) => (
              <motion.div
                key={ring.size}
                className="absolute left-1/2 top-1/2 rounded-full border border-primary/25"
                style={{
                  width: `${ring.size}%`,
                  height: `${ring.size}%`,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={reduced ? {} : { rotate: ring.reverse ? -360 : 360 }}
                transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
              >
                {ring.nodes.map((angle, nodeIndex) => (
                  
                  <div
                    key={angle}
                    className="absolute inset-0"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <motion.span
                      className={`absolute left-1/2 top-0 block h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                        (ringIndex + nodeIndex) % 2 === 0 ? "bg-primary" : "bg-accent"
                      }`}
                      style={{ boxShadow: NODE_GLOW }}
                      animate={reduced ? {} : { scale: [1, 1.45, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{
                        duration: 2.4 + nodeIndex * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            ))}

            
            <motion.div
              className="absolute left-1/2 top-1/2 grid aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full border border-primary/60 bg-background/80 backdrop-blur-md"
              animate={
                reduced
                  ? {}
                  : {
                      boxShadow: [
                        "0 0 0 0 oklch(0.8 0.145 76 / 0.28)",
                        "0 0 0 22px oklch(0.8 0.145 76 / 0)",
                      ],
                    }
              }
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
            >
              <div className="absolute inset-0 grid place-items-center opacity-60">
                <div className="flex h-full w-full flex-col justify-between py-2">
                  {Array.from({ length: HELIX_RUNG_COUNT }, (_, rung) => (
                    <motion.span
                      key={rung}
                      className="mx-auto block h-[1.5px] rounded-full bg-primary/70"
                      animate={
                        reduced
                          ? { width: "60%" }
                          : { width: ["12%", "78%", "12%"], opacity: [0.25, 1, 0.25] }
                      }
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: rung * 0.12,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="relative text-center">
                <p className="font-mono text-[0.7rem] tracking-[0.3em] text-primary">DNA</p>
                <p className="font-mono text-[0.6rem] tracking-[0.3em] text-muted-foreground">
                  ATCG
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        
        <div className="absolute left-5 top-5 border-l border-primary/70 pl-3">
          <p className="text-eyebrow">live system</p>
          <motion.p
            className="font-mono text-xs text-foreground"
            animate={reduced ? {} : { opacity: [1, 0.45, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            0.0004 ms
          </motion.p>
        </div>
        <div className="absolute bottom-16 right-5 border-r border-primary/70 pr-3 text-right">
          <p className="text-eyebrow">seq / 2040</p>
          <p className="font-mono text-xs text-foreground">42M bp</p>
        </div>

        
        <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-border bg-background/55 py-3 backdrop-blur-md">
          <div className="marquee-track flex w-max gap-8 whitespace-nowrap font-mono text-[0.65rem] tracking-[0.45em] text-muted-foreground">
            {Array.from({ length: 8 }, (_, i) => (
              <span key={i}>A T G C</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
