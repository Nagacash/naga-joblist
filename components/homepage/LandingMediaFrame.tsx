import type { ReactNode } from "react";

type LandingMediaFrameProps = {
  children: ReactNode;
  className?: string;
};

export function LandingMediaFrame({
  children,
  className = "",
}: LandingMediaFrameProps) {
  return (
    <div
      className={`landing-browser-frame landing-browser-shadow mx-auto w-full max-w-[1114px] overflow-hidden rounded-[26px] bg-surface ${className}`}
      role="group"
      aria-label="Product preview"
    >
      <div
        className="landing-video-chrome flex items-center gap-2 px-5 py-3.5"
        aria-hidden="true"
      >
        <span className="landing-video-chrome-dot" />
        <span className="landing-video-chrome-dot" />
        <span className="landing-video-chrome-dot" />
      </div>
      {children}
    </div>
  );
}
