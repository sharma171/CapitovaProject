import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/react+tanstack__react-query.mjs";
import { AnimatePresence, useInView, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "../_libs/framer-motion+[...].mjs";
import { motion } from "../_libs/motion.mjs";
import { ArrowDown, ArrowRight, ArrowUpRight, Beaker, Brain, ChevronLeft, ChevronRight, Dna, FlaskConical, Leaf, Microscope, Pill, Recycle, X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DnQgU6t_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var about_lab_default = "/assets/about-lab-Cm1iLkCX.jpg";
var cap_agri_default = "/assets/cap-agri-C2eAapoO.jpg";
var cap_environment_default = "/assets/cap-environment-M-GlNWOI.jpg";
var cap_genome_default = "/assets/cap-genome-CVc_KY5l.jpg";
var cap_materials_default = "/assets/cap-materials-wiQujCa-.jpg";
var cap_omics_default = "/assets/cap-omics-BkcotaDP.jpg";
var cap_therapeutic_default = "/assets/cap-therapeutic-zn-atkgG.jpg";
var pillar_build_default = "/assets/pillar-build-nqPIsKCX.jpg";
var pillar_design_default = "/assets/pillar-design-Zmbllof2.jpg";
var pillar_learn_default = "/assets/pillar-learn-DGrK1BES.jpg";
var stage_sequence_default = "/assets/stage-sequence-OO29XLYQ.jpg";
var stage_simulate_default = "/assets/stage-simulate-Dhmu-4qL.jpg";
var stage_synthesise_default = "/assets/stage-synthesise-Dy7SsQ3u.jpg";
var stage_validate_default = "/assets/stage-validate-BUCcBBLO.jpg";
var BRAND = {
	name: "Capitova",
	initial: "C",
	tagline: "/ bio systems",
	email: "research@capitova.bio",
	legalName: "Capitova Bio Systems AG"
};
var NAV_LINKS = [
	{
		label: "Innovation",
		href: "#innovation",
		image: pillar_design_default,
		description: "Generative models propose millions of candidate sequences before a single pipette moves."
	},
	{
		label: "Technology",
		href: "#technology",
		image: stage_sequence_default,
		description: "Long-read nanopore arrays resolve full genomes in under four hours, streaming straight into our inference cluster."
	},
	{
		label: "Capabilities",
		href: "#capabilities",
		image: cap_genome_default,
		description: "High-fidelity base and prime editing with quantified off-target profiles at every locus."
	},
	{
		label: "Impact",
		href: "#impact",
		image: about_lab_default,
		description: "32k+ active researchers on the platform driving global biotech breakthroughs."
	},
	{
		label: "Request access",
		href: "#contact",
		image: cap_therapeutic_default,
		description: "Join the Capitova platform and accelerate your research with our computational biology tools."
	}
];
var FOOTER_COLUMNS = [{
	title: "Platform",
	links: [
		"Sequencing",
		"Simulation",
		"Biofoundry",
		"Data lineage"
	]
}, {
	title: "Company",
	links: [
		"About",
		"Careers",
		"Publications",
		"Press"
	]
}];
var HERO_HEADLINE_WORDS = [
	"Engineering",
	"life,",
	"atom",
	"by",
	"atom"
];
var HERO_CHIPS = [
	{
		icon: Dna,
		label: "genome editing"
	},
	{
		icon: FlaskConical,
		label: "synthetic bio"
	},
	{
		icon: Microscope,
		label: "protein design"
	}
];
var HERO_MARQUEE_ITEMS = [
	"CRISPR 3.0",
	"mRNA scaffolds",
	"de novo proteins",
	"cell-free systems",
	"biofoundry automation",
	"multi-omics AI"
];
var ORBIT_RINGS = [
	{
		size: 96,
		duration: 26,
		nodes: [
			0,
			120,
			240
		],
		reverse: false
	},
	{
		size: 72,
		duration: 18,
		nodes: [40, 200],
		reverse: true
	},
	{
		size: 48,
		duration: 12,
		nodes: [90, 270],
		reverse: false
	}
];
var PILLARS = [
	{
		title: "Design",
		body: "Generative models propose millions of candidate sequences before a single pipette moves.",
		image: pillar_design_default,
		alt: "Researcher reviewing genomic sequence traces on a lab workstation",
		tag: "in silico"
	},
	{
		title: "Build",
		body: "Robotic biofoundries assemble and validate constructs in continuous 24-hour cycles.",
		image: pillar_build_default,
		alt: "Automated pipetting head dispensing into a 96-well microplate",
		tag: "biofoundry"
	},
	{
		title: "Learn",
		body: "Every assay feeds back into the model, compounding accuracy with each iteration.",
		image: pillar_learn_default,
		alt: "Seedling leaf with water droplets in front of assay data screens",
		tag: "closed loop"
	}
];
var ABOUT_LAB_IMAGE = {
	src: about_lab_default,
	alt: "Gloved researcher holding a glowing amber cell-culture dish"
};
var ABOUT_METRICS = {
	modelAgreement: 94,
	cycleVelocity: [
		6,
		9,
		8,
		15,
		19,
		18,
		27,
		33
	]
};
var STATS = [
	{
		value: 32,
		suffix: "k+",
		label: "Active researchers on the platform",
		trend: [
			5,
			9,
			8,
			14,
			18,
			22,
			30
		]
	},
	{
		value: 148,
		suffix: "",
		label: "Peer-reviewed publications",
		trend: [
			3,
			6,
			10,
			9,
			16,
			21,
			26
		]
	},
	{
		value: 320,
		suffix: "+",
		label: "Bio-assets analysed daily",
		trend: [
			8,
			7,
			12,
			17,
			15,
			24,
			31
		]
	},
	{
		value: 96,
		suffix: "%",
		label: "Assay reproducibility rate",
		trend: [
			12,
			14,
			18,
			17,
			22,
			25,
			29
		]
	}
];
var EASE_OUT_EXPO = [
	.16,
	1,
	.3,
	1
];
var DURATION = {
	fast: .35,
	base: .6,
	slow: .9,
	cinematic: 1.4
};
var REVEAL_VIEWPORT = {
	once: true,
	margin: "0px 0px -10% 0px"
};
var REVEAL_VIEWPORT_TIGHT = {
	once: true,
	margin: "-12% 0px -12% 0px"
};
var eased = (duration, delay = 0) => ({
	duration,
	delay,
	ease: EASE_OUT_EXPO
});
var prefersReducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Brand({ showTagline = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground",
			children: BRAND.initial
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate font-display text-lg tracking-tight",
			children: BRAND.name
		}),
		showTagline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden text-eyebrow sm:inline",
			children: BRAND.tagline
		})
	] });
}
var clipAt = (radius) => `circle(${radius} at calc(100% - 5rem) 3rem)`;
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [hoveredLink, setHoveredLink] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 transition-all duration-500 ${open ? "z-[60]" : "z-50"} ${scrolled && !open ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-4 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#top",
				className: "flex min-w-0 items-center gap-2.5",
				"aria-label": `${BRAND.name} home`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { showTagline: true })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen((isOpen) => !isOpen),
				"aria-expanded": open,
				"aria-label": open ? "Close menu" : "Open menu",
				className: "relative z-[60] inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5",
				children: ["Menu", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `inline-block transition-transform duration-500 ${open ? "rotate-45" : ""}`,
					"aria-hidden": "true",
					children: "+"
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.nav, {
		"aria-label": "Main",
		initial: { clipPath: clipAt("0%") },
		animate: { clipPath: clipAt("150%") },
		exit: { clipPath: clipAt("0%") },
		transition: eased(.8),
		className: "fixed inset-0 z-[55] bg-background/98 backdrop-blur-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 bio-grid opacity-60",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex h-full max-w-[1400px] flex-col lg:flex-row lg:items-center px-5 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col justify-center h-full gap-1 lg:w-1/2",
				children: NAV_LINKS.map((link, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
						href: link.href,
						onClick: () => setOpen(false),
						onMouseEnter: () => setHoveredLink(link.href),
						onMouseLeave: () => setHoveredLink(null),
						initial: { y: "110%" },
						animate: { y: "0%" },
						transition: eased(.8, .16 + i * .07),
						className: "block font-display text-[clamp(2.2rem,7vw,5rem)] leading-[1.05] tracking-[-0.045em] text-foreground transition-colors duration-300 hover:text-primary",
						children: link.label
					})
				}, link.href))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden lg:flex lg:w-1/2 h-full items-center justify-center pl-10 pointer-events-none",
				children: (() => {
					const activeHref = hoveredLink || NAV_LINKS[0].href;
					const activeData = NAV_LINKS.find((l) => l.href === activeHref) || NAV_LINKS[0];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 max-w-lg w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { clipPath: "inset(100% 0% 0% 0%)" },
							animate: { clipPath: "inset(0% 0% 0% 0%)" },
							transition: eased(1.2, .2),
							className: "relative w-full aspect-video overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
									src: typeof activeData.image === "string" ? activeData.image : activeData.image?.src || activeData.image,
									alt: activeData.label,
									initial: {
										opacity: 0,
										scale: 1.1
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: .95
									},
									transition: eased(.6),
									className: "absolute inset-0 w-full h-full object-cover"
								}, activeData.href)
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: {
										opacity: 0,
										y: -20
									},
									transition: eased(.6),
									className: "text-lg text-muted-foreground leading-relaxed",
									children: activeData.description
								}, activeData.href)
							})
						})]
					});
				})()
			})]
		})]
	}, "overlay") })] });
}
function MolecularField({ className }) {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		let width = 0;
		let height = 0;
		let nodes = [];
		const pointer = {
			x: -9999,
			y: -9999
		};
		const seed = () => {
			const rect = canvas.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			canvas.width = width * dpr;
			canvas.height = height * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const count = Math.min(78, Math.max(28, Math.round(width * height / 14e3)));
			nodes = Array.from({ length: count }, () => ({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - .5) * .28,
				vy: (Math.random() - .5) * .28,
				r: 1 + Math.random() * 2.2
			}));
		};
		seed();
		const observer = new ResizeObserver(seed);
		observer.observe(canvas);
		const onPointer = (event) => {
			const rect = canvas.getBoundingClientRect();
			pointer.x = event.clientX - rect.left;
			pointer.y = event.clientY - rect.top;
		};
		const onLeave = () => {
			pointer.x = -9999;
			pointer.y = -9999;
		};
		window.addEventListener("pointermove", onPointer, { passive: true });
		window.addEventListener("pointerleave", onLeave);
		let raf = 0;
		const draw = () => {
			ctx.clearRect(0, 0, width, height);
			for (const node of nodes) {
				if (!reduced) {
					node.x += node.vx;
					node.y += node.vy;
				}
				if (node.x < 0 || node.x > width) node.vx *= -1;
				if (node.y < 0 || node.y > height) node.vy *= -1;
				const dx = node.x - pointer.x;
				const dy = node.y - pointer.y;
				const dist = Math.hypot(dx, dy);
				if (dist < 130 && dist > .01) {
					const push = (130 - dist) / 130;
					node.x += dx / dist * push * 2.4;
					node.y += dy / dist * push * 2.4;
				}
			}
			for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
				const a = nodes[i];
				const b = nodes[j];
				const dist = Math.hypot(a.x - b.x, a.y - b.y);
				if (dist > 132) continue;
				ctx.strokeStyle = `rgba(196, 214, 255, ${(1 - dist / 132) * .3})`;
				ctx.lineWidth = .6;
				ctx.beginPath();
				ctx.moveTo(a.x, a.y);
				ctx.lineTo(b.x, b.y);
				ctx.stroke();
			}
			for (const node of nodes) {
				const near = Math.hypot(node.x - pointer.x, node.y - pointer.y) < 150;
				ctx.fillStyle = near ? "rgba(247, 183, 90, 0.95)" : "rgba(205, 220, 255, 0.62)";
				ctx.beginPath();
				ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
				ctx.fill();
			}
			raf = requestAnimationFrame(draw);
		};
		raf = requestAnimationFrame(draw);
		return () => {
			cancelAnimationFrame(raf);
			observer.disconnect();
			window.removeEventListener("pointermove", onPointer);
			window.removeEventListener("pointerleave", onLeave);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		"aria-hidden": "true",
		className,
		style: {
			width: "100%",
			height: "100%",
			display: "block"
		}
	});
}
var hero_microscopy_default = "/assets/hero-microscopy-BDF__s6Z.jpg";
var HELIX_RUNG_COUNT = 22;
var NODE_GLOW = "0 0 26px 6px oklch(0.8 0.145 76 / 0.6)";
function HeroOrbit() {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden rounded-[2rem] border border-border",
		style: { boxShadow: "var(--shadow-card)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[clamp(24rem,56vh,34rem)] w-full lg:h-[38rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: hero_microscopy_default,
					alt: "Phase-contrast microscopy field of live bacterial cells",
					width: 1200,
					height: 1600,
					initial: {
						scale: 1.16,
						opacity: 0
					},
					animate: {
						scale: 1.04,
						opacity: 1
					},
					transition: eased(1.8),
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/45" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/60" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square w-[76%] max-w-[26rem]",
						children: [ORBIT_RINGS.map((ring, ringIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute left-1/2 top-1/2 rounded-full border border-primary/25",
							style: {
								width: `${ring.size}%`,
								height: `${ring.size}%`,
								x: "-50%",
								y: "-50%"
							},
							animate: reduced ? {} : { rotate: ring.reverse ? -360 : 360 },
							transition: {
								duration: ring.duration,
								repeat: Infinity,
								ease: "linear"
							},
							children: ring.nodes.map((angle, nodeIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0",
								style: { transform: `rotate(${angle}deg)` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									className: `absolute left-1/2 top-0 block h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${(ringIndex + nodeIndex) % 2 === 0 ? "bg-primary" : "bg-accent"}`,
									style: { boxShadow: NODE_GLOW },
									animate: reduced ? {} : {
										scale: [
											1,
											1.45,
											1
										],
										opacity: [
											.7,
											1,
											.7
										]
									},
									transition: {
										duration: 2.4 + nodeIndex * .4,
										repeat: Infinity,
										ease: "easeInOut"
									}
								})
							}, angle))
						}, ring.size)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "absolute left-1/2 top-1/2 grid aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full border border-primary/60 bg-background/80 backdrop-blur-md",
							animate: reduced ? {} : { boxShadow: ["0 0 0 0 oklch(0.8 0.145 76 / 0.28)", "0 0 0 22px oklch(0.8 0.145 76 / 0)"] },
							transition: {
								duration: 2.8,
								repeat: Infinity,
								ease: "easeOut"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 grid place-items-center opacity-60",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-full w-full flex-col justify-between py-2",
									children: Array.from({ length: HELIX_RUNG_COUNT }, (_, rung) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										className: "mx-auto block h-[1.5px] rounded-full bg-primary/70",
										animate: reduced ? { width: "60%" } : {
											width: [
												"12%",
												"78%",
												"12%"
											],
											opacity: [
												.25,
												1,
												.25
											]
										},
										transition: {
											duration: 3,
											repeat: Infinity,
											ease: "easeInOut",
											delay: rung * .12
										}
									}, rung))
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[0.7rem] tracking-[0.3em] text-primary",
									children: "DNA"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[0.6rem] tracking-[0.3em] text-muted-foreground",
									children: "ATCG"
								})]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-5 top-5 border-l border-primary/70 pl-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-eyebrow",
						children: "live system"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "font-mono text-xs text-foreground",
						animate: reduced ? {} : { opacity: [
							1,
							.45,
							1
						] },
						transition: {
							duration: 1.8,
							repeat: Infinity
						},
						children: "0.0004 ms"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-16 right-5 border-r border-primary/70 pr-3 text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-eyebrow",
						children: "seq / 2040"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-foreground",
						children: "42M bp"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 bottom-0 overflow-hidden border-t border-border bg-background/55 py-3 backdrop-blur-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "marquee-track flex w-max gap-8 whitespace-nowrap font-mono text-[0.65rem] tracking-[0.45em] text-muted-foreground",
						children: Array.from({ length: 8 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A T G C" }, i))
					})
				})
			]
		})
	});
}
function PrimaryCtaLink({ href, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		className: "group inline-flex items-center gap-3 rounded-full bg-primary py-3.5 pl-6 pr-2 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5",
		style: { boxShadow: "var(--shadow-glow)" },
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/12 transition-transform duration-300 group-hover:rotate-45",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
		})]
	});
}
function SecondaryCtaLink({ href, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm transition-colors hover:border-primary hover:text-primary",
		children
	});
}
function HeroHeadline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "mt-6 font-display text-[clamp(2.9rem,8.4vw,6.6rem)] leading-[0.92] tracking-[-0.045em]",
		children: HERO_HEADLINE_WORDS.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block overflow-hidden pb-[0.06em] align-bottom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				className: `inline-block ${i === 4 ? "text-gradient-amber" : ""}`,
				initial: { y: "110%" },
				animate: { y: "0%" },
				transition: eased(1.1, .16 + i * .08),
				children: [word, "\xA0"]
			})
		}, `${word}-${i}`))
	});
}
function HeroMarquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden border-y border-border py-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max gap-12 whitespace-nowrap text-eyebrow",
			children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex gap-12",
				children: HERO_MARQUEE_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-12",
					children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "✳"
					})]
				}, item))
			}, copy))
		})
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const visualY = useTransform(scrollYProgress, [0, 1], [0, 90]);
	const visualScale = useTransform(scrollYProgress, [0, 1], [1, .94]);
	const copyY = useTransform(scrollYProgress, [0, 1], [0, -70]);
	const copyOpacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "top",
		className: "hero-surface relative overflow-hidden pt-28 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 bio-grid opacity-70",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MolecularField, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-[1400px] items-end gap-12 px-5 pb-14 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: {
						y: copyY,
						opacity: copyOpacity
					},
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "text-eyebrow",
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .8,
								delay: .1
							},
							children: "Capitova Bio Systems — est. 2011"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroHeadline, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "mt-7 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg",
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .9,
								delay: .5
							},
							children: "A computational biology platform where machine intelligence meets wet-lab precision — designing therapeutics, resilient crops and living materials at unprecedented speed."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "mt-9 flex flex-wrap items-center gap-3",
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .9,
								delay: .62
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryCtaLink, {
								href: "#innovation",
								children: "Explore the platform"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryCtaLink, {
								href: "#technology",
								children: "Watch the science"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-12 flex flex-wrap gap-2.5",
							children: HERO_CHIPS.map(({ icon: Icon, label }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
								initial: {
									opacity: 0,
									y: 14
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .8 + i * .09
								},
								className: "flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2.5 text-xs text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/60 hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-3.5 w-3.5 text-primary",
									"aria-hidden": "true"
								}), label]
							}, label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: {
						y: visualY,
						scale: visualScale
					},
					className: "relative",
					initial: {
						opacity: 0,
						scale: .94
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: eased(1.4, .25),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroOrbit, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface/70 px-5 py-4 backdrop-blur-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl tracking-tight",
								children: "Helix-7 sequencer"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: "Live run · 4.2 M base pairs / second"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 animate-ping rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute h-2 w-2 rounded-full bg-primary" })]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroMarquee, {})
		]
	});
}
var slides = [
	{
		top: "Growing a",
		bottom: "Better Future"
	},
	{
		top: "By Engineering",
		bottom: "Living Systems"
	},
	{
		top: "Ultra Scalable,",
		bottom: "Sustainable & Safe"
	},
	{
		top: "For Therapeutics",
		bottom: "& Regenerative Care"
	}
];
function ScrollStage() {
	const ref = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const progress = (0, import_react.useRef)(0);
	const [index, setIndex] = (0, import_react.useState)(0);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"]
	});
	const veil = useTransform(scrollYProgress, [
		0,
		.12,
		.88,
		1
	], [
		1,
		0,
		0,
		1
	]);
	useMotionValueEvent(scrollYProgress, "change", (v) => {
		progress.current = v;
		const next = Math.min(slides.length - 1, Math.max(0, Math.floor(v * slides.length)));
		setIndex((prev) => prev === next ? prev : next);
	});
	(0, import_react.useEffect)(() => {
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
		const branch = (x, y, angle, len, depth, grown, time) => {
			if (depth === 0 || grown <= 0) return;
			const a = angle + Math.sin(time / 1400 + depth) * .045 * depth;
			const l = len * Math.min(1, grown);
			const x2 = x + Math.cos(a) * l;
			const y2 = y + Math.sin(a) * l;
			ctx.strokeStyle = `oklch(0.8 0.145 76 / ${.14 + depth * .07})`;
			ctx.lineWidth = depth * .9;
			ctx.lineCap = "round";
			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.lineTo(x2, y2);
			ctx.stroke();
			if (grown >= 1) {
				ctx.fillStyle = `oklch(0.72 0.11 215 / ${.1 + depth * .06})`;
				ctx.beginPath();
				ctx.arc(x2, y2, depth * .9, 0, Math.PI * 2);
				ctx.fill();
			}
			const child = grown - 1;
			branch(x2, y2, a - .42, l * .76, depth - 1, child, time);
			branch(x2, y2, a + .42, l * .76, depth - 1, child, time);
		};
		let raf = 0;
		const draw = (time) => {
			ctx.clearRect(0, 0, w, h);
			const p = progress.current;
			const depth = 8;
			const grown = .4 + p * depth;
			const len = Math.min(h * .3, 210) * (.72 + p * .4);
			branch(w / 2, h * .98, -Math.PI / 2, len, depth, grown, time);
			for (let i = 0; i < 44; i++) {
				const seed = i * 12.9898;
				const fx = (Math.sin(seed) + 1) / 2 * w;
				const speed = .02 + (Math.cos(seed) + 1) / 2 * .05;
				const fy = h - (time * speed / 30 + i * 90) % (h * 1.1);
				ctx.fillStyle = `oklch(0.86 0.13 88 / ${.1 + p * .35})`;
				ctx.beginPath();
				ctx.arc(fx, fy, 1.1 + i % 3 * .5, 0, Math.PI * 2);
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
	const slide = slides[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		id: "growth",
		className: "relative h-[400vh]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 h-screen overflow-hidden bg-surface",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 bio-grid opacity-50",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					"aria-hidden": "true",
					className: "absolute inset-0 h-full w-full"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { opacity: veil },
					className: "pointer-events-none absolute inset-0 bg-background",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid h-full place-items-center px-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "sr-only",
						children: "Our mission"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: [slide.top, slide.bottom].map((line, li) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								y: "108%",
								opacity: 0
							},
							animate: {
								y: "0%",
								opacity: 1
							},
							transition: {
								duration: .9,
								delay: li * .08,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "font-display text-[clamp(2.4rem,7.4vw,6rem)] leading-[0.98] tracking-[-0.045em] text-primary",
							children: line
						})
					}, `${index}-${li}`)) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "absolute left-5 top-1/2 hidden -translate-y-1/2 flex-col gap-2.5 md:flex",
					"aria-hidden": "true",
					children: slides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { className: `h-1.5 w-1.5 rounded-full transition-all duration-500 ${i === index ? "scale-150 bg-primary" : "bg-foreground/25"}` }, s.bottom))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-primary md:left-6 md:translate-x-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
						className: "h-5 w-5 animate-bounce",
						"aria-hidden": "true"
					})
				})
			]
		})
	});
}
var revealVariants = {
	hidden: (y) => ({
		opacity: 0,
		y,
		filter: "blur(6px)"
	}),
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: DURATION.slow,
			ease: EASE_OUT_EXPO
		}
	}
};
function Reveal({ children, delay = 0, y = 28, className, as = "div" }) {
	const MotionTag = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionTag, {
		className,
		custom: y,
		variants: revealVariants,
		initial: "hidden",
		whileInView: "visible",
		viewport: REVEAL_VIEWPORT_TIGHT,
		transition: { delay },
		children
	});
}
function RevealWords({ text, className }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, REVEAL_VIEWPORT);
	const hidden = {
		y: "110%",
		opacity: 0
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className,
		children: text.split(" ").map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block overflow-hidden pb-[0.08em] align-bottom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				className: "inline-block",
				initial: hidden,
				animate: inView ? {
					y: "0%",
					opacity: 1
				} : hidden,
				transition: eased(1, i * .055),
				children: [word, "\xA0"]
			})
		}, `${word}-${i}`))
	});
}
function Sparkline({ points, className }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "0px 0px -10% 0px"
	});
	const w = 100;
	const h = 32;
	const max = Math.max(...points);
	const min = Math.min(...points);
	const span = max - min || 1;
	const d = points.map((p, i) => {
		const x = i / (points.length - 1) * w;
		const y = h - (p - min) / span * 28 - 2;
		return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
	}).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		ref,
		viewBox: `0 0 ${w} ${h}`,
		preserveAspectRatio: "none",
		"aria-hidden": "true",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
			d,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			initial: {
				pathLength: 0,
				opacity: 0
			},
			animate: inView ? {
				pathLength: 1,
				opacity: 1
			} : {},
			transition: {
				duration: 1.6,
				ease: [
					.16,
					1,
					.3,
					1
				]
			}
		})
	});
}
function RadialGauge({ value, label, size = 96 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "0px 0px -10% 0px"
	});
	const r = 42;
	const c = 2 * Math.PI * r;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			viewBox: "0 0 100 100",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "50",
					cy: "50",
					r,
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "3",
					opacity: "0.15"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					cx: "50",
					cy: "50",
					r,
					fill: "none",
					className: "text-primary",
					stroke: "currentColor",
					strokeWidth: "3",
					strokeLinecap: "round",
					strokeDasharray: c,
					transform: "rotate(-90 50 50)",
					initial: { strokeDashoffset: c },
					animate: inView ? { strokeDashoffset: c * (1 - value / 100) } : {},
					transition: {
						duration: 1.6,
						ease: [
							.16,
							1,
							.3,
							1
						]
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "50",
					y: "55",
					textAnchor: "middle",
					className: "fill-foreground font-mono text-[1.35rem]",
					children: value
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-[7rem] text-xs leading-relaxed text-muted-foreground",
			children: label
		})]
	});
}
function SequenceBars({ bars = 22 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-10 items-end gap-1",
		"aria-hidden": "true",
		children: Array.from({ length: bars }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "w-1 flex-1 rounded-full bg-primary/70",
			animate: { height: [
				"18%",
				"92%",
				"34%",
				"70%",
				"18%"
			] },
			transition: {
				duration: 2.6 + i % 5 * .35,
				repeat: Infinity,
				ease: "easeInOut",
				delay: i * .06
			}
		}, i))
	});
}
function PillarImage({ pillar, parallaxY }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative h-[24rem] w-full md:h-[32rem]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "popLayout",
			initial: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: pillar.image,
				alt: pillar.alt,
				loading: "lazy",
				width: 1200,
				height: 900,
				style: { y: parallaxY },
				initial: {
					opacity: 0,
					scale: 1.22,
					filter: "blur(14px)"
				},
				animate: {
					opacity: 1,
					scale: 1.1,
					filter: "blur(0px)"
				},
				exit: {
					opacity: 0,
					scale: 1.04,
					filter: "blur(14px)"
				},
				transition: eased(.85),
				className: "absolute inset-0 h-full w-full object-cover"
			}, pillar.title)
		})
	});
}
function AboutMetrics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			whileHover: { y: -4 },
			transition: { duration: .4 },
			className: "relative overflow-hidden rounded-[1.5rem] border border-border",
			style: { boxShadow: "var(--shadow-card)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: ABOUT_LAB_IMAGE.src,
					alt: ABOUT_LAB_IMAGE.alt,
					loading: "lazy",
					width: 1e3,
					height: 1200,
					initial: { scale: 1.14 },
					whileInView: { scale: 1.02 },
					viewport: REVEAL_VIEWPORT,
					transition: eased(1.4),
					className: "h-44 w-full object-cover sm:h-52"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-4 bottom-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-eyebrow",
						children: "wet-lab validation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SequenceBars, { bars: 18 })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-between gap-4 rounded-[1.5rem] border border-border bg-surface p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadialGauge, {
				value: ABOUT_METRICS.modelAgreement,
				label: "model-to-assay agreement",
				size: 84
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-eyebrow",
				children: "cycle velocity"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, {
				points: ABOUT_METRICS.cycleVelocity,
				className: "mt-3 h-9 w-full text-primary"
			})] })]
		})]
	});
}
function PillarRow({ pillar, index, isActive, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onMouseEnter: onSelect,
		onFocus: onSelect,
		onClick: onSelect,
		"aria-pressed": isActive,
		className: `group grid w-full grid-cols-[auto_auto_minmax(0,1fr)] items-center gap-4 border-b py-5 text-left transition-colors sm:gap-6 ${isActive ? "border-primary/50" : "border-border hover:border-primary/30"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-xs text-primary",
				children: ["0", index + 1]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				animate: {
					width: isActive ? 108 : 74,
					opacity: isActive ? 1 : .6
				},
				transition: eased(.6),
				className: "relative block h-16 shrink-0 overflow-hidden rounded-xl border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: pillar.image,
					alt: "",
					"aria-hidden": "true",
					loading: "lazy",
					width: 1200,
					height: 900,
					animate: { scale: isActive ? 1.02 : 1.18 },
					transition: eased(.8),
					className: "h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: `font-display text-xl tracking-tight transition-all duration-500 ${isActive ? "translate-x-1 text-foreground" : "text-muted-foreground"}`,
					children: pillar.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
					children: pillar.body
				})]
			})
		]
	});
}
function About() {
	const imageRef = (0, import_react.useRef)(null);
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const activePillar = PILLARS[activeIndex];
	const { scrollYProgress } = useScroll({
		target: imageRef,
		offset: ["start end", "end start"]
	});
	const parallaxY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "innovation",
		className: "relative py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-5 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "order-2 lg:order-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: imageRef,
						className: "relative overflow-hidden rounded-[2rem] border border-border",
						style: { boxShadow: "var(--shadow-card)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillarImage, {
								pillar: activePillar,
								parallaxY
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-5 top-5 rounded-full border border-border bg-background/50 px-4 py-2 text-eyebrow backdrop-blur-md",
								children: activePillar.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-5 bottom-5 flex gap-2",
								children: PILLARS.map((pillar, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									animate: { opacity: i === activeIndex ? 1 : .25 },
									className: "h-0.5 flex-1 origin-left rounded-full bg-primary"
								}, pillar.title))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutMetrics, {})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-1 lg:order-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-eyebrow",
							children: "Innovation"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 max-w-xl font-display text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.02]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, { text: "Biology is becoming a design discipline." })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
								children: "For over a decade we have compressed the distance between hypothesis and evidence. Our closed-loop platform turns discovery into an engineering problem — measurable, repeatable and radically faster than traditional research cycles."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-12 space-y-0 border-t border-border",
							children: PILLARS.map((pillar, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								as: "li",
								delay: i * .08,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillarRow, {
									pillar,
									index: i,
									isActive: i === activeIndex,
									onSelect: () => setActiveIndex(i)
								})
							}, pillar.title))
						})
					]
				})]
			})
		})
	});
}
var stages = [
	{
		id: "sequence",
		label: "Sequence",
		image: stage_sequence_default,
		alt: "Nanopore sequencing array with glowing amber data threads",
		detail: "Long-read nanopore arrays resolve full genomes in under four hours, streaming straight into our inference cluster.",
		metric: "4.2M bp/s"
	},
	{
		id: "simulate",
		label: "Simulate",
		image: stage_simulate_default,
		alt: "Translucent amber protein ribbons folding in simulation",
		detail: "Atomistic folding models predict structure, binding affinity and off-target risk before synthesis begins.",
		metric: "0.94 AUC"
	},
	{
		id: "synthesise",
		label: "Synthesise",
		image: stage_synthesise_default,
		alt: "Microfluidic chip being printed with enzymatic DNA droplets",
		detail: "Enzymatic DNA printing assembles validated constructs on-chip with base-perfect fidelity.",
		metric: "99.98%"
	},
	{
		id: "validate",
		label: "Validate",
		image: stage_validate_default,
		alt: "Organoid culture plate glowing under warm lab light",
		detail: "Automated organoid assays return functional readouts in days, closing the design loop continuously.",
		metric: "72 hrs"
	}
];
function Technology() {
	const [active, setActive] = (0, import_react.useState)(stages[0].id);
	const current = stages.find((s) => s.id === active) ?? stages[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "technology",
		className: "leaf-surface relative overflow-hidden border-y border-border py-24 md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 bio-grid opacity-50",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1400px] px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-eyebrow",
						children: "Technology / research"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 max-w-2xl font-display text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.02]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, { text: "One continuous loop from data to living matter." })
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: "Hover or tap a panel — each stage expands into its own frame of the loop."
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 flex h-[130vh] flex-col gap-3 sm:h-[112vh] md:h-[34rem] md:flex-row md:gap-4",
					children: stages.map((stage, i) => {
						const isActive = stage.id === active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							type: "button",
							layout: true,
							onMouseEnter: () => setActive(stage.id),
							onFocus: () => setActive(stage.id),
							onClick: () => setActive(stage.id),
							"aria-pressed": isActive,
							animate: { flexGrow: isActive ? 3.2 : 1 },
							transition: {
								duration: .75,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							style: {
								flexBasis: 0,
								boxShadow: "var(--shadow-card)"
							},
							className: `group relative min-h-0 w-full cursor-pointer overflow-hidden rounded-[1.75rem] border text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary ${isActive ? "border-primary/45" : "border-border hover:border-primary/25"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
									src: stage.image,
									alt: stage.alt,
									loading: "lazy",
									width: 1024,
									height: 1280,
									animate: {
										scale: isActive ? 1.04 : 1.14,
										opacity: isActive ? 1 : .55
									},
									transition: {
										duration: 1,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "absolute inset-0 h-full w-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/92 via-background/35 to-background/10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									animate: { opacity: isActive ? 0 : .45 },
									className: "absolute inset-0 bg-background"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex h-full flex-col justify-between p-5 md:p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-xs text-primary",
											children: ["0", i + 1]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											animate: { opacity: isActive ? 1 : .55 },
											className: "font-mono text-[0.65rem] tracking-[0.2em] text-primary uppercase",
											children: stage.metric
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h3, {
										layout: "position",
										className: `font-display leading-[0.95] tracking-tight transition-colors ${isActive ? "text-[clamp(1.9rem,3.6vw,3rem)] text-foreground" : "text-[clamp(1.5rem,2.4vw,2rem)] text-muted-foreground"}`,
										children: stage.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
										initial: false,
										children: isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											initial: {
												height: 0,
												opacity: 0
											},
											animate: {
												height: "auto",
												opacity: 1
											},
											exit: {
												height: 0,
												opacity: 0
											},
											transition: {
												duration: .5,
												ease: [
													.16,
													1,
													.3,
													1
												]
											},
											className: "overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "max-w-sm pt-3 text-sm leading-relaxed text-muted-foreground",
												children: stage.detail
											})
										})
									})] })]
								})
							]
						}, stage.id);
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-eyebrow",
							children: ["stage · ", current.label]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -10
								},
								transition: { duration: .35 },
								className: "font-display text-2xl tracking-tight text-primary",
								children: current.metric
							}, current.id)
						})
					]
				})
			]
		})]
	});
}
var capabilities = [
	{
		icon: Pill,
		title: "Therapeutic discovery",
		body: "Target identification through pre-clinical candidates for oncology, immunology and rare disease.",
		expandedDetails: "Our platform integrates molecular dynamics simulations with generative AI to identify novel binding pockets and design high-affinity ligands. This dramatically accelerates the pre-clinical pipeline, converting years of wet-lab screening into weeks of computational refinement.",
		features: [
			"Generative ligand design",
			"Off-target prediction",
			"In silico toxicology",
			"Automated synthesis routing"
		],
		image: cap_therapeutic_default,
		alt: "Translucent amber therapeutic capsule lit against a dark field",
		trend: [
			4,
			9,
			7,
			14,
			12,
			20,
			26
		]
	},
	{
		icon: Dna,
		title: "Genome engineering",
		body: "High-fidelity base and prime editing with quantified off-target profiles at every locus.",
		expandedDetails: "We design highly specific CRISPR-Cas systems tailored to your target genome. Our models predict on-target efficacy and comprehensively profile off-target risks, ensuring unprecedented precision for therapeutic and agricultural applications.",
		features: [
			"Custom nuclease design",
			"Base & prime editor optimization",
			"Genome-wide off-target profiling",
			"Delivery vehicle pairing"
		],
		image: cap_genome_default,
		alt: "Glowing amber DNA double helix macro render",
		trend: [
			6,
			8,
			13,
			11,
			18,
			24,
			29
		]
	},
	{
		icon: Leaf,
		title: "Agricultural resilience",
		body: "Drought- and pathogen-tolerant cultivars developed with breeding cycles cut by two thirds.",
		expandedDetails: "By mapping complex polygenic traits and utilizing precision genome editing, we engineer crops that thrive in challenging climates. Our automated biofoundries validate these traits in high-throughput plant assays, ensuring field-ready performance.",
		features: [
			"Drought tolerance engineering",
			"Pathogen resistance pathways",
			"Nitrogen fixation optimization",
			"Accelerated breeding cycles"
		],
		image: cap_agri_default,
		alt: "Golden wheat seedling with dew under warm light",
		trend: [
			3,
			6,
			6,
			12,
			17,
			16,
			24
		]
	},
	{
		icon: Beaker,
		title: "Living materials",
		body: "Engineered microbial consortia that grow structural, self-healing and pigmented materials.",
		expandedDetails: "We harness synthetic biology to program cells as microscopic factories for novel materials. From biodegradable packaging to self-healing concrete and sustainable textiles, our living materials offer unprecedented properties with zero environmental footprint.",
		features: [
			"Mycelium composites",
			"Bacterial cellulose engineering",
			"Bio-cementation",
			"Self-healing polymers"
		],
		image: cap_materials_default,
		alt: "Macro texture of engineered mycelium material",
		trend: [
			8,
			7,
			12,
			15,
			14,
			22,
			27
		]
	},
	{
		icon: Brain,
		title: "Multi-omics intelligence",
		body: "Unified models across genomic, proteomic and imaging data with full experimental lineage.",
		expandedDetails: "Our platform ingests massive, multimodal biological datasets to train foundation models of cellular behavior. By connecting genotype to phenotype across millions of data points, we unlock insights that remain invisible to traditional analysis methods.",
		features: [
			"Multi-modal foundation models",
			"Spatial transcriptomics analysis",
			"Automated feature extraction",
			"Predictive biomarker discovery"
		],
		image: cap_omics_default,
		alt: "Amber network of data nodes over a protein structure",
		trend: [
			5,
			11,
			10,
			16,
			21,
			25,
			32
		]
	},
	{
		icon: Recycle,
		title: "Environmental systems",
		body: "Enzymatic pathways for plastic depolymerisation and industrial carbon capture at scale.",
		expandedDetails: "We design robust enzymes and metabolic pathways capable of breaking down persistent pollutants and capturing atmospheric carbon. Our directed evolution platform optimizes these systems for industrial conditions, enabling true circular bioeconomies.",
		features: [
			"Plastic depolymerization",
			"Carbon fixation pathways",
			"Heavy metal bioremediation",
			"Wastewater valorization"
		],
		image: cap_environment_default,
		alt: "Amber enzymatic bioreactor bubbles in dark fluid",
		trend: [
			2,
			5,
			9,
			8,
			15,
			19,
			23
		]
	}
];
function Capabilities() {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (activeIndex === null) return;
			if (e.key === "Escape") setActiveIndex(null);
			if (e.key === "ArrowLeft") setActiveIndex((prev) => prev === null ? null : (prev - 1 + capabilities.length) % capabilities.length);
			if (e.key === "ArrowRight") setActiveIndex((prev) => prev === null ? null : (prev + 1) % capabilities.length);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [activeIndex]);
	(0, import_react.useEffect)(() => {
		if (activeIndex !== null) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [activeIndex]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "capabilities",
		className: "py-24 md:py-36 relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-eyebrow",
					children: "Capabilities"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.02]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, { text: "Six programmes, one platform." })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
				children: capabilities.map(({ icon: Icon, title, body, image, alt, trend }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i % 3 * .08,
					className: "bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						layoutId: `cap-card-${i}`,
						onClick: () => setActiveIndex(i),
						whileHover: "hover",
						initial: "rest",
						animate: "rest",
						className: "group relative h-full cursor-pointer overflow-hidden bg-background transition-colors duration-500 hover:bg-surface-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: {
									rest: { opacity: .14 },
									hover: { opacity: .4 }
								},
								transition: { duration: .6 },
								className: "pointer-events-none absolute inset-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
									src: image,
									alt: "",
									"aria-hidden": "true",
									loading: "lazy",
									width: 1200,
									height: 900,
									variants: {
										rest: { scale: 1.18 },
										hover: { scale: 1.04 }
									},
									transition: {
										duration: 1.1,
										ease: [
											.16,
											1,
											.3,
											1
										]
									},
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/55" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pointer-events-none absolute inset-x-0 top-0 z-10 h-px origin-left scale-x-0 bg-primary transition-transform duration-700 group-hover:scale-x-100",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex h-full flex-col p-8 md:p-10 pointer-events-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											layoutId: `cap-icon-box-${i}`,
											className: "grid h-11 w-11 place-items-center rounded-full border border-border bg-background/60 text-primary backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "h-4.5 w-4.5",
												"aria-hidden": "true"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											variants: {
												rest: {
													opacity: 0,
													y: 6
												},
												hover: {
													opacity: 1,
													y: 0
												}
											},
											transition: { duration: .45 },
											className: "grid h-9 w-9 place-items-center rounded-full border border-primary/50 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
												className: "h-4 w-4",
												"aria-hidden": "true"
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 overflow-hidden rounded-2xl border border-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
											layoutId: `cap-img-thumb-${i}`,
											src: image,
											alt,
											loading: "lazy",
											width: 1200,
											height: 900,
											variants: {
												rest: { scale: 1.02 },
												hover: { scale: 1.09 }
											},
											transition: {
												duration: 1,
												ease: [
													.16,
													1,
													.3,
													1
												]
											},
											className: "h-36 w-full object-cover md:h-40"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h3, {
										layoutId: `cap-title-${i}`,
										className: "mt-7 font-display text-2xl leading-tight tracking-tight",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
										layoutId: `cap-body-${i}`,
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: body
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-auto flex items-end justify-between gap-6 pt-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-[0.65rem] text-muted-foreground/60",
											children: ["PRG—0", i + 1]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, {
											points: trend,
											className: "h-8 w-24 text-primary"
										})]
									})
								]
							})
						]
					})
				}, title))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: activeIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: { duration: .3 },
			className: "fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-background/95 backdrop-blur-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						setActiveIndex((prev) => prev === null ? null : (prev - 1 + capabilities.length) % capabilities.length);
					},
					className: "absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-surface-elevated/50 hover:bg-primary text-foreground hover:text-primary-foreground backdrop-blur-md transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-6 h-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						setActiveIndex((prev) => prev === null ? null : (prev + 1) % capabilities.length);
					},
					className: "absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-surface-elevated/50 hover:bg-primary text-foreground hover:text-primary-foreground backdrop-blur-md transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-6 h-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActiveIndex(null),
					className: "absolute top-6 right-6 md:top-10 md:right-10 z-50 p-4 rounded-full bg-surface-elevated/50 hover:bg-destructive hover:text-destructive-foreground text-foreground backdrop-blur-md transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					layoutId: `cap-card-${activeIndex}`,
					className: "relative w-full max-w-6xl h-[90vh] max-h-[90vh] bg-surface rounded-[2rem] border border-border shadow-2xl overflow-hidden flex flex-col md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:w-1/2 h-64 md:h-full relative overflow-hidden shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								layoutId: `cap-img-thumb-${activeIndex}`,
								src: capabilities[activeIndex].image,
								alt: capabilities[activeIndex].alt,
								className: "absolute inset-0 w-full h-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent to-surface hidden md:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-transparent to-surface md:hidden block" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:w-1/2 h-full overflow-y-auto p-8 md:p-16 flex flex-col justify-center bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-[100%]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 mb-6 shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										layoutId: `cap-icon-box-${activeIndex}`,
										className: "grid h-12 w-12 place-items-center rounded-full border border-border bg-background/60 text-primary backdrop-blur-sm",
										children: (() => {
											const Icon = capabilities[activeIndex].icon;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" });
										})()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs text-primary/80 tracking-widest uppercase",
										children: ["Programme 0", activeIndex + 1]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h3, {
									layoutId: `cap-title-${activeIndex}`,
									className: "font-display text-4xl md:text-5xl leading-tight mb-4",
									children: capabilities[activeIndex].title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									layoutId: `cap-body-${activeIndex}`,
									className: "text-xl text-foreground/90 leading-relaxed mb-6",
									children: capabilities[activeIndex].body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										delay: .2,
										duration: .5
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-base text-muted-foreground leading-relaxed mb-8",
											children: capabilities[activeIndex].expandedDetails
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
											children: capabilities[activeIndex].features.map((feature, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-3 text-sm text-foreground/80",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" }), feature]
											}, idx))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-12 flex items-center justify-between p-6 rounded-2xl bg-surface-elevated/30 border border-border/50",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground uppercase tracking-widest mb-1",
												children: "Performance Trend"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium",
												children: "Last 7 quarters"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, {
												points: capabilities[activeIndex].trend,
												className: "h-10 w-32 text-primary"
											})]
										})
									]
								})
							]
						})
					})]
				})
			]
		}) })]
	});
}
var COUNT_DURATION_MS = 1600;
var easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
function Counter({ value, suffix }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, REVEAL_VIEWPORT);
	const [display, setDisplay] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		if (prefersReducedMotion()) {
			setDisplay(value);
			return;
		}
		const start = performance.now();
		let raf = 0;
		const tick = (now) => {
			const progress = Math.min((now - start) / COUNT_DURATION_MS, 1);
			setDisplay(Math.round(value * easeOutCubic(progress)));
			if (progress < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "font-display text-[clamp(3rem,7vw,5.5rem)] leading-none tracking-tight",
		children: [display, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-primary",
			children: suffix
		})]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "impact",
		className: "relative overflow-hidden border-y border-border bg-surface py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1400px] px-5 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-eyebrow",
					children: "Impact"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-xl font-display text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.02]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, { text: "Measured in evidence, not promises." })
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .12,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-sm leading-relaxed text-muted-foreground",
						children: "Figures reflect trailing twelve-month activity across our Basel, Boston and Singapore biofoundries."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-16 grid gap-px overflow-hidden border-t border-border sm:grid-cols-2 lg:grid-cols-4",
				children: STATS.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border py-10 sm:border-r sm:pr-8 sm:last:border-r-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								value: stat.value,
								suffix: stat.suffix
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "mt-5 max-w-[15rem] text-sm leading-relaxed text-muted-foreground",
								children: stat.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, {
								points: stat.trend,
								className: "mt-6 h-8 w-full max-w-[15rem] text-primary"
							})
						]
					})
				}, stat.label))
			})]
		})
	});
}
var cta_particles_default = "/assets/cta-particles-CoUxFQdR.jpg";
function FinalCta() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const backdropY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
	const backdropOpacity = useTransform(scrollYProgress, [
		0,
		.5,
		1
	], [
		.35,
		.7,
		.35
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "contact",
		className: "relative overflow-hidden py-28 md:py-44",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: cta_particles_default,
				alt: "",
				"aria-hidden": "true",
				loading: "lazy",
				width: 1920,
				height: 1088,
				style: {
					y: backdropY,
					opacity: backdropOpacity
				},
				className: "absolute inset-0 h-[120%] w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-[1400px] px-5 text-center md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-eyebrow",
						children: ["Partner with ", BRAND.name]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mx-auto mt-7 max-w-4xl font-display text-[clamp(2.4rem,6.6vw,5.2rem)] leading-[0.98]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, { text: "Let's build the biology of the next century." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .12,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground",
							children: "Research partnerships, platform access and co-development programmes — tell us what you are trying to prove."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-11 flex flex-wrap items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryCtaLink, {
								href: `mailto:${BRAND.email}`,
								children: BRAND.email
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondaryCtaLink, {
								href: "#technology",
								children: "Read the technical brief"
							})]
						})
					})
				]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-w-0 items-center gap-2.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground",
				children: "A computational biology platform engineering therapeutics, crops and living materials. Basel · Boston · Singapore."
			})] }), FOOTER_COLUMNS.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": column.title,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-eyebrow",
					children: column.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: column.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: link
					}) }, link))
				})]
			}, column.title))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] flex-col gap-2 border-t border-border px-5 py-6 font-mono text-[0.7rem] text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				BRAND.legalName
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Engineered with care for the scientific record" })]
		})]
	});
}
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let raf = 0;
		let destroy;
		import("../_libs/lenis.mjs").then((n) => n.lenis_exports).then(({ default: Lenis }) => {
			const lenis = new Lenis({
				duration: 1.15,
				wheelMultiplier: .9
			});
			const loop = (time) => {
				lenis.raf(time);
				raf = requestAnimationFrame(loop);
			};
			raf = requestAnimationFrame(loop);
			const onAnchor = (event) => {
				const anchor = event.target?.closest("a[href^=\"#\"]");
				if (!anchor) return;
				const target = document.querySelector(anchor.hash);
				if (!target) return;
				event.preventDefault();
				lenis.scrollTo(target, { offset: -80 });
			};
			document.addEventListener("click", onAnchor);
			destroy = () => {
				document.removeEventListener("click", onAnchor);
				lenis.destroy();
			};
		});
		return () => {
			cancelAnimationFrame(raf);
			destroy?.();
		};
	}, []);
	return null;
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 26,
		restDelta: .001
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": "true",
		style: { scaleX },
		className: "fixed inset-x-0 top-0 z-[55] h-0.5 origin-left bg-primary"
	});
}
function StickerBadge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "#contact",
		className: "group fixed bottom-5 right-5 z-50 hidden h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 hover:scale-105 md:grid",
		style: { boxShadow: "var(--shadow-glow)" },
		"aria-label": "Contact us",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
			className: "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1",
			"aria-hidden": "true"
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickerBadge, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollStage, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Technology, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Capabilities, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
