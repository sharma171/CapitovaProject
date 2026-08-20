import { Beaker, Brain, Dna, FlaskConical, Leaf, Microscope, Pill, Recycle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import aboutLab from "@/assets/about-lab.jpg";
import capAgri from "@/assets/cap-agri.jpg";
import capEnvironment from "@/assets/cap-environment.jpg";
import capGenome from "@/assets/cap-genome.jpg";
import capMaterials from "@/assets/cap-materials.jpg";
import capOmics from "@/assets/cap-omics.jpg";
import capTherapeutic from "@/assets/cap-therapeutic.jpg";
import pillarBuild from "@/assets/pillar-build.jpg";
import pillarDesign from "@/assets/pillar-design.jpg";
import pillarLearn from "@/assets/pillar-learn.jpg";
import stageSequence from "@/assets/stage-sequence.jpg";
import stageSimulate from "@/assets/stage-simulate.jpg";
import stageSynthesise from "@/assets/stage-synthesise.jpg";
import stageValidate from "@/assets/stage-validate.jpg";


export const BRAND = {
  name: "Capitova",
  initial: "C",
  tagline: "/ bio systems",
  email: "research@capitova.bio",
  legalName: "Capitova Bio Systems AG",
} as const;


export const NAV_LINKS = [
  { 
    label: "Innovation", 
    href: "#innovation",
    image: pillarDesign,
    description: "Generative models propose millions of candidate sequences before a single pipette moves."
  },
  { 
    label: "Technology", 
    href: "#technology",
    image: stageSequence,
    description: "Long-read nanopore arrays resolve full genomes in under four hours, streaming straight into our inference cluster."
  },
  { 
    label: "Capabilities", 
    href: "#capabilities",
    image: capGenome,
    description: "High-fidelity base and prime editing with quantified off-target profiles at every locus."
  },
  { 
    label: "Impact", 
    href: "#impact",
    image: aboutLab,
    description: "32k+ active researchers on the platform driving global biotech breakthroughs."
  },
  { 
    label: "Request access", 
    href: "#contact",
    image: capTherapeutic,
    description: "Join the Capitova platform and accelerate your research with our computational biology tools."
  },
];

export const FOOTER_COLUMNS = [
  { title: "Platform", links: ["Sequencing", "Simulation", "Biofoundry", "Data lineage"] },
  { title: "Company", links: ["About", "Careers", "Publications", "Press"] },
];


export const HERO_HEADLINE_WORDS = ["Engineering", "life,", "atom", "by", "atom"];

export const HERO_ACCENT_WORD_INDEX = 4;

export const HERO_CHIPS: { icon: LucideIcon; label: string }[] = [
  { icon: Dna, label: "genome editing" },
  { icon: FlaskConical, label: "synthetic bio" },
  { icon: Microscope, label: "protein design" },
];

export const HERO_MARQUEE_ITEMS = [
  "CRISPR 3.0",
  "mRNA scaffolds",
  "de novo proteins",
  "cell-free systems",
  "biofoundry automation",
  "multi-omics AI",
];

export const ORBIT_RINGS = [
  { size: 96, duration: 26, nodes: [0, 120, 240], reverse: false },
  { size: 72, duration: 18, nodes: [40, 200], reverse: true },
  { size: 48, duration: 12, nodes: [90, 270], reverse: false },
];


export const GROWTH_SLIDES = [
  { top: "Growing a", bottom: "Better Future" },
  { top: "By Engineering", bottom: "Living Systems" },
  { top: "Ultra Scalable,", bottom: "Sustainable & Safe" },
  { top: "For Therapeutics", bottom: "& Regenerative Care" },
];


export type Pillar = {
  title: string;
  body: string;
  image: string;
  alt: string;
  tag: string;
};

export const PILLARS: Pillar[] = [
  {
    title: "Design",
    body: "Generative models propose millions of candidate sequences before a single pipette moves.",
    image: pillarDesign,
    alt: "Researcher reviewing genomic sequence traces on a lab workstation",
    tag: "in silico",
  },
  {
    title: "Build",
    body: "Robotic biofoundries assemble and validate constructs in continuous 24-hour cycles.",
    image: pillarBuild,
    alt: "Automated pipetting head dispensing into a 96-well microplate",
    tag: "biofoundry",
  },
  {
    title: "Learn",
    body: "Every assay feeds back into the model, compounding accuracy with each iteration.",
    image: pillarLearn,
    alt: "Seedling leaf with water droplets in front of assay data screens",
    tag: "closed loop",
  },
];

export const ABOUT_LAB_IMAGE = {
  src: aboutLab,
  alt: "Gloved researcher holding a glowing amber cell-culture dish",
};

export const ABOUT_METRICS = {
  modelAgreement: 94,
  cycleVelocity: [6, 9, 8, 15, 19, 18, 27, 33],
};


export type Stage = {
  id: string;
  label: string;
  image: string;
  alt: string;
  detail: string;
  metric: string;
};

export const STAGES: Stage[] = [
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


export type Capability = {
  icon: LucideIcon;
  title: string;
  body: string;
  image: string;
  alt: string;
  trend: number[];
};

export const CAPABILITIES: Capability[] = [
  {
    icon: Pill,
    title: "Therapeutic discovery",
    body: "Target identification through pre-clinical candidates for oncology, immunology and rare disease.",
    image: capTherapeutic,
    alt: "Translucent amber therapeutic capsule lit against a dark field",
    trend: [4, 9, 7, 14, 12, 20, 26],
  },
  {
    icon: Dna,
    title: "Genome engineering",
    body: "High-fidelity base and prime editing with quantified off-target profiles at every locus.",
    image: capGenome,
    alt: "Glowing amber DNA double helix macro render",
    trend: [6, 8, 13, 11, 18, 24, 29],
  },
  {
    icon: Leaf,
    title: "Agricultural resilience",
    body: "Drought- and pathogen-tolerant cultivars developed with breeding cycles cut by two thirds.",
    image: capAgri,
    alt: "Golden wheat seedling with dew under warm light",
    trend: [3, 6, 6, 12, 17, 16, 24],
  },
  {
    icon: Beaker,
    title: "Living materials",
    body: "Engineered microbial consortia that grow structural, self-healing and pigmented materials.",
    image: capMaterials,
    alt: "Macro texture of engineered mycelium material",
    trend: [8, 7, 12, 15, 14, 22, 27],
  },
  {
    icon: Brain,
    title: "Multi-omics intelligence",
    body: "Unified models across genomic, proteomic and imaging data with full experimental lineage.",
    image: capOmics,
    alt: "Amber network of data nodes over a protein structure",
    trend: [5, 11, 10, 16, 21, 25, 32],
  },
  {
    icon: Recycle,
    title: "Environmental systems",
    body: "Enzymatic pathways for plastic depolymerisation and industrial carbon capture at scale.",
    image: capEnvironment,
    alt: "Amber enzymatic bioreactor bubbles in dark fluid",
    trend: [2, 5, 9, 8, 15, 19, 23],
  },
];


export type Stat = {
  value: number;
  suffix: string;
  label: string;
  trend: number[];
};

export const STATS: Stat[] = [
  {
    value: 32,
    suffix: "k+",
    label: "Active researchers on the platform",
    trend: [5, 9, 8, 14, 18, 22, 30],
  },
  {
    value: 148,
    suffix: "",
    label: "Peer-reviewed publications",
    trend: [3, 6, 10, 9, 16, 21, 26],
  },
  {
    value: 320,
    suffix: "+",
    label: "Bio-assets analysed daily",
    trend: [8, 7, 12, 17, 15, 24, 31],
  },
  {
    value: 96,
    suffix: "%",
    label: "Assay reproducibility rate",
    trend: [12, 14, 18, 17, 22, 25, 29],
  },
];
