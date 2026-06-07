import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@insforge/sdk/ssr";

import { getInsforgeConfig } from "@/lib/insforge-env";

const allowedProviders = new Set(["google", "github"]);
const verifierCookieName = "jobpilot_oauth_code_verifier";

type RouteContext = {
  params: Promise<{
    provider: string;
  }>;
};

export async function GET(
  request: NextRequest,
  context: RouteContext,
): Promise<NextResponse> {
  const loginUrl = new URL("/login", request.url);

  try {
    const { provider } = await context.params;
    const normalizedProvider = provider.toLowerCase();

    if (!allowedProviders.has(normalizedProvider)) {
      loginUrl.searchParams.set("error", "provider");
      return NextResponse.redirect(loginUrl);
    }

    const callbackUrl = new URL("/callback", request.nextUrl.origin);
    const { baseUrl, anonKey } = getInsforgeConfig();
    const insforge = createServerClient({ baseUrl, anonKey });
    const { data, error } = await insforge.auth.signInWithOAuth(
      normalizedProvider,
      {
        redirectTo: callbackUrl.toString(),
        skipBrowserRedirect: true,
      },
    );

    if (error || !data.url || !data.codeVerifier) {
      console.error("[auth/oauth]", error);
      const redirectNotAllowed =
        error &&
        typeof error === "object" &&
        "nextActions" in error &&
        String(error.nextActions).toLowerCase().includes("redirect");
      loginUrl.searchParams.set("error", redirectNotAllowed ? "redirect" : "oauth");
      if (redirectNotAllowed) {
        loginUrl.searchParams.set("callback", callbackUrl.toString());
      }
      return NextResponse.redirect(loginUrl);
    }

    const response = NextResponse.redirect(data.url);
    response.cookies.set(verifierCookieName, data.codeVerifier, {
      httpOnly: true,
      sameSite: "lax",
      secure: request.nextUrl.protocol === "https:",
      path: "/",
      maxAge: 60 * 10,
    });

    return response;
  } catch (error) {
    console.error("[auth/oauth]", error);
    loginUrl.searchParams.set("error", "oauth");
    return NextResponse.redirect(loginUrl);
  }
}
