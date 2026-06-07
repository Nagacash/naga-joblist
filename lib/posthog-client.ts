"use client";

import posthog from "posthog-js";

function getPostHogKey(): string | undefined {
  return (
    process.env.NEXT_PUBLIC_POSTHOG_KEY ??
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
  );
}

function getPostHogUiHost(): string {
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";
  return host.includes("eu")
    ? "https://eu.posthog.com"
    : "https://us.posthog.com";
}

export function initPostHog(): void {
  const key = getPostHogKey();

  if (!key || typeof window === "undefined") {
    return;
  }

  // Same-origin proxy via next.config rewrites — avoids ad-blocker "Failed to fetch".
  posthog.init(key, {
    api_host: "/ingest",
    ui_host: getPostHogUiHost(),
    capture_pageview: true,
    capture_exceptions: true,
    debug: process.env.NODE_ENV === "development",
  });
}

export function identifyPostHogUser(userId: string): void {
  if (!getPostHogKey()) {
    return;
  }

  posthog.identify(userId, { userId });
}

export function resetPostHogUser(): void {
  if (!getPostHogKey()) {
    return;
  }

  posthog.reset();
}
