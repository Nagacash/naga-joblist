import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { RouteProgress } from "@/components/layout/RouteProgress";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Naga Codex — Job Pilot",
    template: "%s · Naga Codex — Job Pilot",
  },
  description:
    "AI-powered job search assistance for matching roles, tailored resumes, and faster applications.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: [{ url: "/images/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background">
        <RouteProgress />
        {children}
      </body>
    </html>
  );
}
