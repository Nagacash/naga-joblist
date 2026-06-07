"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type RevealTag = "div" | "h1" | "h2" | "h3" | "p" | "blockquote" | "figure";

type RevealTextProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
  as?: RevealTag;
  id?: string;
};

export function RevealText({
  children,
  className = "",
  delay = 0,
  immediate = false,
  as: Tag = "div",
  id,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const Component = Tag as ElementType;

  useEffect(() => {
    if (immediate) {
      const timer = window.setTimeout(() => setIsVisible(true), delay);
      return () => window.clearTimeout(timer);
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        window.setTimeout(() => setIsVisible(true), delay);
        observer.disconnect();
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, immediate]);

  return (
    <Component
      ref={ref}
      id={id}
      className={[
        "landing-reveal",
        isVisible ? "landing-reveal-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
