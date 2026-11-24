// Nguyen Phuong Nguyen Portfolio - Next.js
import { PinkTopBar } from "@/components/pdf-layout/PinkTopBar";
import { Page1HeroAbout } from "@/components/pdf-layout/Page1HeroAbout";
import { ProjectsHorizontal } from "@/components/sections/ProjectsHorizontal";
import { Page2Influencer } from "@/components/pdf-layout/Page2Influencer";
import { Page3Projects } from "@/components/pdf-layout/Page3Projects";
import { Page4ThankYou } from "@/components/pdf-layout/Page4ThankYou";
import { PagePagination } from "@/components/pdf-layout/PagePagination";
import { FlowerCursor } from "@/components/effects/FlowerCursor";
import { FallingFlowersBackground } from "@/components/effects/FallingFlowersBackground";
import { BackgroundElements } from "@/components/common/BackgroundElements";
import { SmoothScroll } from "@/components/common/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#FFFFFF] text-[#2E2220] overflow-x-hidden selection:bg-[#F2C4C4] selection:text-[#2E2220]">
        {/* Subtle Background Grain & Vertical Guides */}
        <BackgroundElements />

        {/* Ambient Falling Flowers Background (from Overview to end of page) */}
        <FallingFlowersBackground />

        {/* Signature Interactive Lily Flower Cursor & Petal-Pop Particles */}
        <FlowerCursor />

        {/* Sticky Pink Bar matching PDF Top Bar */}
        <PinkTopBar />

        {/* Floating Quick Page Jumper (Page 1 to 4) */}
        <PagePagination />

        {/* Main Content matching the 4-page PDF layout 1-to-1 */}
        <main className="w-full block">
          {/* Page 1: Hero, Portrait, Education, Tools, Skills, Bio, Experiences, Moon Contact, Featured Projects */}
          <Page1HeroAbout />

          {/* Pinned Horizontal-Scroll Project Gallery (Six Scenes, One Story) */}
          <ProjectsHorizontal />

          {/* Page 2: Project 01 - Influencer Marketing (KOC Booking, Collaborations, Videos, Seeding, Result, Learnings) */}
          <Page2Influencer />

          {/* Page 3: Project 02 (VFIS), Project 03 (MLAND), Project 04 (Marathon), Project 05 (Culture Start), Personal (Threads) */}
          <Page3Projects />

          {/* Page 4: Closing, High-Key Night Portrait, Contact Info, Thank You */}
          <Page4ThankYou />
        </main>
      </div>
    </SmoothScroll>
  );
}
