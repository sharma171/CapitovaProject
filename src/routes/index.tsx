import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/bio/Nav";
import { Hero } from "@/components/bio/Hero";
import { ScrollStage } from "@/components/bio/ScrollStage";
import { About } from "@/components/bio/About";
import { Technology } from "@/components/bio/Technology";
import { Capabilities } from "@/components/bio/Capabilities";
import { Stats } from "@/components/bio/Stats";
import { FinalCta } from "@/components/bio/FinalCta";
import { Footer } from "@/components/bio/Footer";
import { SmoothScroll } from "@/components/bio/SmoothScroll";
import { ScrollProgress } from "@/components/bio/ScrollProgress";
import { StickerBadge } from "@/components/bio/StickerBadge";

const title = "Capitova — Engineering Life, Atom by Atom";
const description =
  "Capitova is a computational biology platform pairing machine intelligence with wet-lab precision to design therapeutics, resilient crops and living materials.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      
      <Nav />
      <StickerBadge />
      <main>
        <Hero />
        <ScrollStage />
        <About />
        <Technology />
        <Capabilities />
        <Stats />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
