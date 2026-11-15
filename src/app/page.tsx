import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { RunningRibbons } from "@/components/sections/RunningRibbons";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Tools } from "@/components/sections/Tools";
import { ProjectsHorizontal } from "@/components/sections/ProjectsHorizontal";
import { ProjectScenesDetail } from "@/components/sections/ProjectScenesDetail";
import { FeaturedVideos } from "@/components/sections/FeaturedVideos";
import { Contact } from "@/components/sections/Contact";
import { FlowerCursor } from "@/components/effects/FlowerCursor";
import { BackgroundElements } from "@/components/common/BackgroundElements";
import { SmoothScroll } from "@/components/common/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-white text-[#3A2A28] overflow-x-hidden">
        {/* Global Cinematic Background Grain & Vertical 4-Column Grid */}
        <BackgroundElements />

        {/* Signature Interactive Lily Flower Cursor & Petal-Pop Particles */}
        <FlowerCursor />

        {/* Floating Pill Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Running Diagonal Marquee Ribbons */}
          <RunningRibbons />

          {/* About Me & Experience/Education Timeline */}
          <About />

          {/* Core Capabilities (Skills as Rows) */}
          <Skills />

          {/* Production Tools & Software (Overlapping Rotating Circles) */}
          <Tools />

          {/* Pinned Horizontal-Scroll Project Gallery (Centerpiece) */}
          <ProjectsHorizontal />

          {/* Detailed In-Depth Project Case Studies (Scenes 01 to 06) */}
          <ProjectScenesDetail />

          {/* Featured TikTok & Short-form Videos (Vertical 9:16 Cards) */}
          <FeaturedVideos />

          {/* Contact Banner & Cream Footer with Script Accent */}
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
}
