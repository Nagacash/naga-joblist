import Image from "next/image";

import { LandingMediaFrame } from "@/components/homepage/LandingMediaFrame";
import { RevealText } from "@/components/homepage/RevealText";

const workflowItems = [
  {
    title: "Discover roles worth your time",
    description:
      "Search by title and location, or paste a listing link. Review matches built for quick, confident decisions.",
  },
  {
    title: "Shape resumes in minutes",
    description:
      "Start from your profile, tune for the role once, and generate a polished version when you are ready to move.",
  },
  {
    title: "Never lose track of momentum",
    description:
      "Every role you save and tailor lives in one timeline, so your next step is always clear.",
  },
];

export function HowItWorks() {
  return (
    <section className="landing-section-deferred px-4 sm:px-6 lg:px-8">
      <div className="landing-panel landing-grid mx-auto grid max-w-[1440px] overflow-hidden lg:grid-cols-[1fr_1.08fr]">
        <div className="bg-surface">
          <div className="border-b border-border px-9 py-9 sm:px-12 sm:py-12 lg:px-14 lg:py-16">
            <RevealText
              as="h2"
              delay={0}
              className="landing-display max-w-md text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-text-slate"
            >
              Run your search without the chaos
            </RevealText>
          </div>

          <div>
            {workflowItems.map((item, index) => (
              <div
                key={item.title}
                className="border-b border-border px-9 py-7 sm:px-12 lg:px-14"
              >
                <RevealText
                  delay={index * 100}
                  className={`max-w-md ${
                    index === 0 ? "border-l-2 border-accent pl-5" : "pl-6"
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

        <div className="bg-surface-tertiary px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <RevealText delay={150}>
            <LandingMediaFrame>
              <Image
                src="/images/jobs-lists.png"
                alt="Matched roles list in Job Pilot"
                width={2364}
                height={1778}
                loading="lazy"
                className="h-auto w-full"
              />
            </LandingMediaFrame>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
