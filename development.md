# Capitova Bio Systems: Development & Design Guide

## Overview
This document outlines the core technical architecture and the specific design and animation ideologies that power the Capitova Bio Systems web platform.

## Design and Animation Ideology

The visual language of Capitova is intentionally crafted to break away from traditional corporate biotech websites, aiming instead for an experience that feels like specialized laboratory software. 

### 1. The "Lab-Night" Aesthetic
Capitova employs a dark, highly contrasted visual language we refer to as the "Lab-Night" aesthetic. Instead of generic blacks or grays, the color palette is anchored in deep, clinical purples and blues (`oklch(0.16 0.028 265)`), juxtaposed with highly saturated, luminous accent colors like amber, gold, and lilac. This creates a mood that is both strictly scientific and intensely modern—evoking glowing analytical readouts in a sterile, low-light laboratory environment.

### 2. Biological Fluidity Meets Mathematical Precision
The motion design across the platform is deliberately calculated to mimic biological processes—such as drifting cells, unfolding proteins, or steady fluid flow. However, we avoid chaotic or randomized movement. All animations (powered by Framer Motion and custom CSS keyframes) utilize strict easing curves. Our primary easing function (`cubic-bezier(0.16, 1, 0.3, 1)`) ensures that elements snap into place rapidly but settle with a long, smooth tail, conveying a sense of highly engineered precision.

### 3. Native "App-Like" Micro-Interactions
To elevate the user experience from a static marketing site to an interactive platform, Capitova leans heavily on shared element transitions (Layout Animations) and context-aware interactions. When users interact with components—such as expanding a capability card into the full-screen modal or opening the navigation overlay—elements do not simply "fade in". They seamlessly morph, scale, and crossfade continuously from their point of origin. This creates an unbroken spatial model in the user's mind, making the web experience feel like a premium native desktop application.

### 4. Data-Driven UI Elements
Scientific claims must be backed by data. To reflect this core tenet in the UI, dynamic data visualizations (such as the React `Sparkline` and `RadialGauge` components) are integrated directly alongside marketing copy. These visualizations are animated on scroll and tied directly to the viewport, reinforcing the message that Capitova's underlying technology is active, quantifiable, and continuously running.

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
