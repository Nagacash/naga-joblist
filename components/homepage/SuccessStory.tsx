import Image from "next/image";

import { RevealText } from "@/components/homepage/RevealText";

export function SuccessStory() {
  return (
    <section className="landing-section-deferred px-4 sm:px-6 lg:px-8">
      <div className="landing-panel landing-hero-glow mx-auto max-w-[1440px] px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <RevealText delay={0}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            From the field
          </p>
        </RevealText>

        <RevealText
          as="blockquote"
          delay={100}
          className="landing-display mx-auto mt-8 max-w-4xl text-[clamp(2rem,4.1vw,3.2rem)] font-medium leading-[1.18] tracking-[-0.04em] text-text-slate"
        >
          &ldquo;I used to burn evenings reformatting the same resume. Now I log
          in and interviews are already lined up. It almost feels unfair. I
          ended up with three offers at once.&rdquo;
        </RevealText>

        <RevealText
          delay={200}
          className="mt-9 flex items-center justify-center gap-3"
        >
          <Image
            src="/images/user-icon.png"
            alt="Tom Wilson"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full border border-border"
          />
          <div className="text-left">
            <p className="text-sm font-semibold text-text-primary">Tom Wilson</p>
            <p className="text-sm text-text-secondary">Junior Developer</p>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
