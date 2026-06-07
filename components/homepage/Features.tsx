import Image from "next/image";

import { LandingMediaFrame } from "@/components/homepage/LandingMediaFrame";
import { RevealText } from "@/components/homepage/RevealText";

const featureItems = [
  {
    title: "Know your fit before you apply",
    description:
      "Each listing includes a score and a plain-language read on your strengths, gaps, and where you stand.",
  },
  {
    title: "Draft cover letters on demand",
    description:
      "Generate role-specific letters you can edit or rerun until the tone feels right for that company.",
  },
  {
    title: "Prioritize what deserves your energy",
    description:
      "Set aside weak matches early and put your effort into openings that align with your skills.",
  },
];

export function Features() {
  return (
    <section className="landing-section-deferred px-4 sm:px-6 lg:px-8">
      <div className="landing-panel landing-grid mx-auto grid max-w-[1440px] overflow-hidden lg:grid-cols-[1.02fr_1fr]">
        <div className="bg-surface-tertiary px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <RevealText delay={0}>
            <LandingMediaFrame>
              <Image
                src="/images/agnet-log.png"
                alt="Job Pilot agent activity log"
                width={2144}
                height={1656}
                loading="lazy"
                className="h-auto w-full"
              />
            </LandingMediaFrame>
          </RevealText>
        </div>

        <div className="bg-surface">
          <div className="border-b border-border px-9 py-9 sm:px-12 sm:py-12 lg:px-14 lg:py-16">
            <RevealText
              as="h2"
              delay={0}
              className="landing-display max-w-lg text-[clamp(2.2rem,5vw,3.5rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-text-slate"
            >
              Show up prepared for every application
            </RevealText>
          </div>

          <div>
            {featureItems.map((item, index) => (
              <div
                key={item.title}
                className="border-b border-border px-9 py-7 sm:px-12 lg:px-14"
              >
                <RevealText
                  delay={index * 100}
                  className={`max-w-xl ${
                    index === 1 ? "border-l-2 border-success pl-5" : "pl-6"
                  }`}
                >
                  <h3 className="text-lg font-semibold leading-7 text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-text-secondary">
                    {item.description}
                  </p>
                </RevealText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
