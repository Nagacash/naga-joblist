import Link from "next/link";

import { HeroVideo } from "@/components/homepage/HeroVideo";
import { LandingMediaFrame } from "@/components/homepage/LandingMediaFrame";
import { RevealText } from "@/components/homepage/RevealText";
import { ScrollHint } from "@/components/homepage/ScrollHint";

export function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
      <div className="landing-panel landing-hero-glow mx-auto max-w-[1440px] overflow-hidden">
        <div className="px-6 pb-20 pt-16 text-center sm:px-10 sm:pb-24 sm:pt-20 lg:px-16 lg:pb-28 lg:pt-24">
          <div className="mx-auto max-w-4xl">
            <RevealText
              as="h1"
              id="hero-heading"
              immediate
              delay={0}
              className="landing-display text-[clamp(2.75rem,7vw,4.625rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-text-slate"
            >
              Job hunting is hard.
              <br />
              Your tools shouldn&apos;t be.
            </RevealText>
            <RevealText
              as="p"
              immediate
              delay={100}
              className="landing-lead mx-auto mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg"
            >
              Naga Codex Job Pilot by Maurice Holda — find better job matches,
              tailor your resume for every role, and keep everything organized
              in one place.
            </RevealText>
            <RevealText
              immediate
              delay={200}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link href="/login" className="landing-button-primary">
                Get Started
                <span className="ml-2 text-xs" aria-hidden="true">
                  {">"}
                </span>
              </Link>
              <Link href="/login" className="landing-button-secondary">
                Find Your First Match
              </Link>
            </RevealText>
          </div>

          <RevealText
            as="figure"
            immediate
            delay={300}
            className="mx-auto mt-12 max-w-[1114px] sm:mt-14 lg:mt-16"
          >
            <LandingMediaFrame>
              <div className="landing-hero-video-stage">
                <HeroVideo />
              </div>
            </LandingMediaFrame>
            <figcaption className="sr-only">
              Product preview of the Naga Codex Job Pilot dashboard
            </figcaption>
          </RevealText>

          <RevealText immediate delay={450}>
            <ScrollHint />
          </RevealText>
        </div>
      </div>
    </section>
  );
}
