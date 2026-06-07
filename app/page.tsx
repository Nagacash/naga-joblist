import type { Metadata } from "next";

import { CTASection } from "@/components/homepage/CTASection";
import { Features } from "@/components/homepage/Features";
import { Hero } from "@/components/homepage/Hero";
import { HowItWorks } from "@/components/homepage/HowItWorks";
import { SuccessStory } from "@/components/homepage/SuccessStory";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Naga Codex Job Pilot | AI Job Search by Maurice Holda",
  description:
    "Naga Codex Job Pilot helps developers find matched tech jobs, research companies, and stay organized. Built by Maurice Holda for job seekers in Germany, the UK, and Europe.",
  path: "/",
  absoluteTitle: true,
});

const dividerClassName =
  "landing-divider mx-auto h-10 max-w-[1440px] border-x border-border bg-surface";

export default function HomePage() {
  return (
    <div className="flex min-h-full flex-col">
      <a href="#main-content" className="landing-skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="landing-page flex-1 pb-0">
        <Hero />
        <HowItWorks />
        <div className="px-4 sm:px-6 lg:px-8">
          <div className={dividerClassName} />
        </div>
        <Features />
        <div className="px-4 sm:px-6 lg:px-8">
          <div className={dividerClassName} />
        </div>
        <SuccessStory />
        <div className="px-4 sm:px-6 lg:px-8">
          <div className={dividerClassName} />
        </div>
        <CTASection />
      </main>
      <div className="landing-page-footer px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
}
