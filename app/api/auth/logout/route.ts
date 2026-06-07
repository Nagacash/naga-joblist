import { NextRequest, NextResponse } from "next/server";
import { clearAuthCookies, createServerClient } from "@insforge/sdk/ssr";

import { getInsforgeConfig } from "@/lib/insforge-env";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { baseUrl, anonKey } = getInsforgeConfig();
    const insforge = createServerClient({
      baseUrl,
      anonKey,
      cookies: request.cookies,
    });

    await insforge.auth.signOut();
  } catch (error) {
    console.error("[auth/logout]", error);
  }

  const response = NextResponse.redirect(new URL("/login", request.url));
  clearAuthCookies(response.cookies);

  return response;
}
