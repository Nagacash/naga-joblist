import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import { SiteCredits } from "@/components/layout/SiteCredits";

const footerLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
] as const;

export function Footer() {
  return (
    <footer className="border-x border-b border-border bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <Logo />

        <nav
          className="flex flex-wrap items-center gap-5 text-sm font-medium text-text-secondary"
          aria-label="Footer"
        >
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border px-6 py-4 sm:px-8 lg:px-10">
        <SiteCredits />
      </div>
    </footer>
  );
}
