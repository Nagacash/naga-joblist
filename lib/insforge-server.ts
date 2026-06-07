import { cookies } from "next/headers";
import { createServerClient } from "@insforge/sdk/ssr";

import { getInsforgeConfig } from "@/lib/insforge-env";

export async function createInsforgeServer() {
  const { baseUrl, anonKey } = getInsforgeConfig();

  return createServerClient({
    baseUrl,
    anonKey,
    cookies: await cookies(),
  });
}
