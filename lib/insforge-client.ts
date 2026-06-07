"use client";

import { createBrowserClient } from "@insforge/sdk/ssr";

import { getInsforgeConfig } from "@/lib/insforge-env";

const { baseUrl, anonKey } = getInsforgeConfig();

export const insforge = createBrowserClient({
  baseUrl,
  anonKey,
  refreshUrl: "/api/auth/refresh",
});
