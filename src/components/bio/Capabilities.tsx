import { useState, useEffect } from "react";
import { Dna, Leaf, Pill, Recycle, Brain, Beaker, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import capTherapeutic from "@/assets/cap-therapeutic.jpg";
import capGenome from "@/assets/cap-genome.jpg";
import capAgri from "@/assets/cap-agri.jpg";
import capMaterials from "@/assets/cap-materials.jpg";
import capOmics from "@/assets/cap-omics.jpg";
import capEnvironment from "@/assets/cap-environment.jpg";
import { Reveal, RevealWords } from "./Reveal";
import { Sparkline } from "./DataViz";

const capabilities = [
  {
    icon: Pill,
    title: "Therapeutic discovery",
    body: "Target identification through pre-clinical candidates for oncology, immunology and rare disease.",
    expandedDetails: "Our platform integrates molecular dynamics simulations with generative AI to identify novel binding pockets and design high-affinity ligands. This dramatically accelerates the pre-clinical pipeline, converting years of wet-lab screening into weeks of computational refinement.",
    features: ["Generative ligand design", "Off-target prediction", "In silico toxicology", "Automated synthesis routing"],
    image: capTherapeutic,
    alt: "Translucent amber therapeutic capsule lit against a dark field",
    trend: [4, 9, 7, 14, 12, 20, 26],
  },
  {
    icon: Dna,
    title: "Genome engineering",
    body: "High-fidelity base and prime editing with quantified off-target profiles at every locus.",
    expandedDetails: "We design highly specific CRISPR-Cas systems tailored to your target genome. Our models predict on-target efficacy and comprehensively profile off-target risks, ensuring unprecedented precision for therapeutic and agricultural applications.",
    features: ["Custom nuclease design", "Base & prime editor optimization", "Genome-wide off-target profiling", "Delivery vehicle pairing"],
    image: capGenome,
    alt: "Glowing amber DNA double helix macro render",
    trend: [6, 8, 13, 11, 18, 24, 29],
  },
  {
    icon: Leaf,
    title: "Agricultural resilience",
    body: "Drought- and pathogen-tolerant cultivars developed with breeding cycles cut by two thirds.",
    expandedDetails: "By mapping complex polygenic traits and utilizing precision genome editing, we engineer crops that thrive in challenging climates. Our automated biofoundries validate these traits in high-throughput plant assays, ensuring field-ready performance.",
    features: ["Drought tolerance engineering", "Pathogen resistance pathways", "Nitrogen fixation optimization", "Accelerated breeding cycles"],
    image: capAgri,
    alt: "Golden wheat seedling with dew under warm light",
    trend: [3, 6, 6, 12, 17, 16, 24],
  },
  {
    icon: Beaker,
    title: "Living materials",
    body: "Engineered microbial consortia that grow structural, self-healing and pigmented materials.",
    expandedDetails: "We harness synthetic biology to program cells as microscopic factories for novel materials. From biodegradable packaging to self-healing concrete and sustainable textiles, our living materials offer unprecedented properties with zero environmental footprint.",
    features: ["Mycelium composites", "Bacterial cellulose engineering", "Bio-cementation", "Self-healing polymers"],
    image: capMaterials,
    alt: "Macro texture of engineered mycelium material",
    trend: [8, 7, 12, 15, 14, 22, 27],
  },
  {
    icon: Brain,
    title: "Multi-omics intelligence",
    body: "Unified models across genomic, proteomic and imaging data with full experimental lineage.",
    expandedDetails: "Our platform ingests massive, multimodal biological datasets to train foundation models of cellular behavior. By connecting genotype to phenotype across millions of data points, we unlock insights that remain invisible to traditional analysis methods.",
    features: ["Multi-modal foundation models", "Spatial transcriptomics analysis", "Automated feature extraction", "Predictive biomarker discovery"],
    image: capOmics,
    alt: "Amber network of data nodes over a protein structure",
    trend: [5, 11, 10, 16, 21, 25, 32],
  },
  {
    icon: Recycle,
    title: "Environmental systems",
    body: "Enzymatic pathways for plastic depolymerisation and industrial carbon capture at scale.",
    expandedDetails: "We design robust enzymes and metabolic pathways capable of breaking down persistent pollutants and capturing atmospheric carbon. Our directed evolution platform optimizes these systems for industrial conditions, enabling true circular bioeconomies.",
    features: ["Plastic depolymerization", "Carbon fixation pathways", "Heavy metal bioremediation", "Wastewater valorization"],
    image: capEnvironment,
    alt: "Amber enzymatic bioreactor bubbles in dark fluid",
    trend: [2, 5, 9, 8, 15, 19, 23],
  },
];

export function Capabilities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") setActiveIndex((prev) => (prev === null ? null : (prev - 1 + capabilities.length) % capabilities.length));
      if (e.key === "ArrowRight") setActiveIndex((prev) => (prev === null ? null : (prev + 1) % capabilities.length));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeIndex]);

  return (
    <section id="capabilities" className="py-24 md:py-36 relative">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-eyebrow">Capabilities</p>
          </Reveal>
          <h2 className="mt-6 font-display text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.02]">
            <RevealWords text="Six programmes, one platform." />
          </h2>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, body, image, alt, trend }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 0.08} className="bg-background">
              <motion.article
                layoutId={`cap-card-${i}`}
                onClick={() => setActiveIndex(i)}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative h-full cursor-pointer overflow-hidden bg-background transition-colors duration-500 hover:bg-surface-elevated"
              >
                <motion.div
                  variants={{ rest: { opacity: 0.14 }, hover: { opacity: 0.4 } }}
                  transition={{ duration: 0.6 }}
                  className="pointer-events-none absolute inset-0"
                >
                  <motion.img
                    src={image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    width={1200}
                    height={900}
                    variants={{ rest: { scale: 1.18 }, hover: { scale: 1.04 } }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/55" />
                </motion.div>

                <span
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px origin-left scale-x-0 bg-primary transition-transform duration-700 group-hover:scale-x-100"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex h-full flex-col p-8 md:p-10 pointer-events-none">
                  <div className="flex items-start justify-between gap-4">
                    <motion.span layoutId={`cap-icon-box-${i}`} className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background/60 text-primary backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </motion.span>
                    <motion.span
                      variants={{ rest: { opacity: 0, y: 6 }, hover: { opacity: 1, y: 0 } }}
                      transition={{ duration: 0.45 }}
                      className="grid h-9 w-9 place-items-center rounded-full border border-primary/50 text-primary"
                    >
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  </div>

                  <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                    <motion.img
                      layoutId={`cap-img-thumb-${i}`}
                      src={image}
                      alt={alt}
                      loading="lazy"
                      width={1200}
                      height={900}
                      variants={{ rest: { scale: 1.02 }, hover: { scale: 1.09 } }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-36 w-full object-cover md:h-40"
                    />
                  </div>

                  <motion.h3 layoutId={`cap-title-${i}`} className="mt-7 font-display text-2xl leading-tight tracking-tight">{title}</motion.h3>
                  <motion.p layoutId={`cap-body-${i}`} className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</motion.p>

                  <div className="mt-auto flex items-end justify-between gap-6 pt-8">
                    <span className="font-mono text-[0.65rem] text-muted-foreground/60">
                      PRG—0{i + 1}
                    </span>
                    <Sparkline points={trend} className="h-8 w-24 text-primary" />
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-background/95 backdrop-blur-3xl"
          >
            
            <button
              onClick={(e) => { e.stopPropagation(); setActiveIndex((prev) => (prev === null ? null : (prev - 1 + capabilities.length) % capabilities.length)); }}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-surface-elevated/50 hover:bg-primary text-foreground hover:text-primary-foreground backdrop-blur-md transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setActiveIndex((prev) => (prev === null ? null : (prev + 1) % capabilities.length)); }}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-surface-elevated/50 hover:bg-primary text-foreground hover:text-primary-foreground backdrop-blur-md transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-50 p-4 rounded-full bg-surface-elevated/50 hover:bg-destructive hover:text-destructive-foreground text-foreground backdrop-blur-md transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            
            <motion.div
              layoutId={`cap-card-${activeIndex}`}
              className="relative w-full max-w-6xl h-[90vh] max-h-[90vh] bg-surface rounded-[2rem] border border-border shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden shrink-0">
                <motion.img
                  layoutId={`cap-img-thumb-${activeIndex}`}
                  src={capabilities[activeIndex]!.image}
                  alt={capabilities[activeIndex]!.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-surface md:hidden block" />
              </div>

              <div className="md:w-1/2 h-full overflow-y-auto p-8 md:p-16 flex flex-col justify-center bg-surface">
                <div className="h-[100%]">
                  <div className="flex items-center gap-4 mb-6 shrink-0">
                    <motion.span layoutId={`cap-icon-box-${activeIndex}`} className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background/60 text-primary backdrop-blur-sm">
                      {(() => { const Icon = capabilities[activeIndex]!.icon; return <Icon className="h-5 w-5" />; })()}
                    </motion.span>
                    <span className="font-mono text-xs text-primary/80 tracking-widest uppercase">
                      Programme 0{activeIndex + 1}
                    </span>
                  </div>

                  <motion.h3 layoutId={`cap-title-${activeIndex}`} className="font-display text-4xl md:text-5xl leading-tight mb-4">
                    {capabilities[activeIndex]!.title}
                  </motion.h3>

                  <motion.p layoutId={`cap-body-${activeIndex}`} className="text-xl text-foreground/90 leading-relaxed mb-6">
                    {capabilities[activeIndex]!.body}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <p className="text-base text-muted-foreground leading-relaxed mb-8">
                      {capabilities[activeIndex]!.expandedDetails}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {capabilities[activeIndex]!.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-12 flex items-center justify-between p-6 rounded-2xl bg-surface-elevated/30 border border-border/50">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Performance Trend</p>
                        <p className="text-sm font-medium">Last 7 quarters</p>
                      </div>
                      <Sparkline points={capabilities[activeIndex]!.trend} className="h-10 w-32 text-primary" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}