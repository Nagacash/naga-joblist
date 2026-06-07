import Link from "next/link";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

type LegalPageShellProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalPageShell({
  title,
  lastUpdated,
  children,
}: LegalPageShellProps) {
  return (
    <>
      <a href="#main-content" className="landing-skip-link">
        Skip to content
      </a>
      <Navbar />
      <main
        id="main-content"
        className="landing-page px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
      >
        <article className="landing-panel mx-auto max-w-3xl px-6 py-10 sm:px-10 sm:py-12">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Legal
            </p>
            <h1 className="landing-display mt-3 text-3xl font-semibold tracking-tight text-text-slate sm:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-text-muted">
              Last updated: {lastUpdated}
            </p>
          </header>

          <div className="mt-8 space-y-8">{children}</div>

          <footer className="mt-10 flex flex-wrap items-center gap-4 border-t border-border pt-6">
            <Link
              href="/"
              className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              Back to homepage
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Terms &amp; Conditions
            </Link>
          </footer>
        </article>
      </main>
      <div className="px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </>
  );
}
