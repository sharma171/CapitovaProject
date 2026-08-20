# Capitova

A highly aesthetic, interactive landing page for a computational biology platform built with modern Bio Technologies Company.

## Technology Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) & React 19
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://motion.dev/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Language**: TypeScript

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher recommended) — [Download here](https://nodejs.org/) or [install via nvm](https://github.com/nvm-sh/nvm).
- **npm** (comes with Node.js)

## Setup & Installation

1. **Clone the repository** (if you haven't already):
   ```sh
   git clone <repository-url>
   cd CapitovaProject
   ```

2. **Install dependencies**:
   Run the following command to install all required packages:
   ```sh
   npm install
   ```

3. **Start the development server**:
   Launch the local development environment with hot-module replacement (HMR):
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:5173`  (or 3000 another port if 5173 is in use).

## Building for Production

To create an optimized production build:

1. **Run the build script**:
   ```sh
   npm run build
   ```
   This will compile the client and server assets into the `dist/` directory.

2. **Start the production server**:
   ```sh
   npm run start
   ```

## Development Commands

- `npm run dev` - Starts the Vite development server.
- `npm run build` - Builds the application for production.
- `npm run start` - Runs the compiled production server.
- `npm run lint` - Runs ESLint to check for code issues.
- `npm run format` - (If configured) Formats code using Prettier.

## Project Structure

- `src/components/bio/` - Domain-specific UI components (Nav, Hero, Capabilities, etc.)
- `src/components/ui/` - Generic, reusable UI primitives (buttons, modals, etc.)
- `src/routes/` - File-based routing handled by TanStack Router.
- `src/styles.css` - Global CSS containing the Tailwind v4 `@theme` definitions and animations.
