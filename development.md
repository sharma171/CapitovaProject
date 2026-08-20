# Capitova Bio Systems: Development & Design Guide

## Overview
This document outlines the core technical architecture and the specific design and animation ideologies that power the Capitova Bio Systems web platform.

## The "Engineering Life, Atom by Atom" Experience

The core thesis of Capitova—"Engineering Life, Atom by Atom"—is not just a tagline; it is the central organizing principle for the landing page's design and scroll choreography. We utilized a layered approach to animation to immerse the user in this concept from the moment they arrive:

### 1. Parallax and Scroll-Linked Storytelling
As the user scrolls down the page, they don't just read static content; they scrub through time. By leveraging Framer Motion's `useScroll` and `useTransform` hooks tied to the `Lenis` smooth-scrolling engine, elements like the Hero text, microscopy backgrounds, and biological stages physically respond to the user's scroll depth. This creates a tactile relationship where scrolling feels like navigating down into the microscopic level.

### 2. The Hero Orbit and Data Overlays
At the very top of the page, the Hero Orbit component sets the stage by featuring continuous, infinite rotational animations (representing DNA rings, cellular structures, and processing cycles). We pair these organic, slow-drifting visual assets with rapid, highly-technical overlays (like the live 0.0004ms processing counter and scrolling ATGC sequences). This juxtaposition visually defines Capitova: the messy complexity of biology constrained by the raw, predictable power of high-speed computation.

### 3. Canvas-Based Interactive Physics
To truly sell the "Atom by Atom" concept, we integrated a custom, interactive `MolecularField` canvas in the background. Unlike CSS animations, this HTML5 Canvas implementation handles hundreds of individual drifting particles (atoms/molecules) that dynamically bond and react to the user's mouse cursor as a repulsive field. This interactive physics simulation reinforces the idea that life at the atomic scale is a manipulatable, computable medium.

---

## Technical Stack & Workflow

- **Framework**: TanStack Start & React 19 (Server-Side Rendering)
- **Styling**: Tailwind CSS v4 (using the modern `@theme` inline block and `oklch` color spaces)
- **Animations**: Framer Motion (for complex orchestration) and `tw-animate-css` (for CSS keyframes)
- **Data Fetching**: TanStack Query
- **Scroll Handling**: Lenis (for buttery-smooth, inertia-based scrolling)

### Workflow Commands
- `npm run dev` - Starts the Vite development server with Hot Module Replacement.
- `npm run build` - Compiles and builds both the client and server assets for production.
- `npm run start` - Runs the production Node.js server.
