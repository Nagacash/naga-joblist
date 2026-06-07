import { redirect } from "next/navigation";

import type { Metadata } from "next";

import { LoginCard } from "@/components/auth/LoginCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getCurrentUser, getPostLoginRedirectPath } from "@/lib/auth";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sign In",
  description:
    "Sign in to Naga Codex Job Pilot with Google or GitHub. Created by Maurice Holda.",
  path: "/login",
});

type LoginPageProps = {
  searchParams: Promise<{
    error?: string | string[];
    callback?: string | string[];
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const user = await getCurrentUser();

  if (user) {
    redirect(await getPostLoginRedirectPath(user.id));
  }

  const params = await searchParams;
  const error = Array.isArray(params.error) ? params.error[0] : params.error;
  const callback = Array.isArray(params.callback)
    ? params.callback[0]
    : params.callback;

  return (
    <>
      <Navbar />
      <main className="app-ambient">
        <LoginCard error={error} callback={callback} />
      </main>
      <div className="px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </>
  );
}
