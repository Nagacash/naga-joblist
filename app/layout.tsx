import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { RouteProgress } from "@/components/layout/RouteProgress";
import { GlobalJsonLd } from "@/components/seo/GlobalJsonLd";
import { rootMetadata } from "@/lib/seo";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  ...rootMetadata,
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
    <html
      lang="en-GB"
      className={`${inter.variable} theme-navy h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        <GlobalJsonLd />
        <RouteProgress />
        {children}
      </body>
    </html>
  );
}
