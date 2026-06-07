import Link from "next/link";

import { RevealText } from "@/components/homepage/RevealText";

export function CTASection() {
  return (
    <section className="landing-section-deferred px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8">
      <div className="landing-panel landing-hero-glow mx-auto max-w-[1440px] px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <RevealText
            as="h2"
            delay={0}
            className="landing-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-text-slate"
          >
            Your next job search can feel a lot less overwhelming
          </RevealText>
          <RevealText
            as="p"
            delay={100}
            className="landing-lead mx-auto mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg"
          >
            Set up your profile, upload your resume, and start finding matches
            in minutes.
          </RevealText>
          <RevealText
            delay={200}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link href="/login" className="landing-button-primary">
              Get Started
              <span className="ml-2 text-xs">{">"}</span>
            </Link>
            <Link href="/login" className="landing-button-secondary">
              Find Your First Match
            </Link>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
