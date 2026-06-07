"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = () => {
      if (mediaQuery.matches) {
        video.pause();
        video.currentTime = 0;
        return;
      }

      void video.play().catch(() => {
        video.pause();
      });
    };

    syncPlayback();
    mediaQuery.addEventListener("change", syncPlayback);

    return () => {
      mediaQuery.removeEventListener("change", syncPlayback);
    };
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="h-full w-full">
      {shouldLoad ? (
        <video
          ref={videoRef}
          src="/clips/nagajob.mp4"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="landing-hero-video"
          aria-label="Naga Codex Job Pilot product preview"
        />
      ) : (
        <div
          className="h-full w-full bg-surface-tertiary"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
