import type { NextConfig } from "next";

const posthogRegion = process.env.NEXT_PUBLIC_POSTHOG_HOST?.includes("eu")
  ? "eu"
  : "us";

const nextConfig: NextConfig = {
  // External-drive projects: Next image optimizer can read macOS ._ sidecar
  // files instead of real assets, producing broken 4KB placeholders.
  images: {
    unoptimized: true,
  },
  // PostHog API uses trailing slashes (e.g. /e/). Avoid redirect breakage.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: `https://${posthogRegion}-assets.i.posthog.com/static/:path*`,
      },
      {
        source: "/ingest/array/:path*",
        destination: `https://${posthogRegion}-assets.i.posthog.com/array/:path*`,
      },
      {
        source: "/ingest/:path*",
        destination: `https://${posthogRegion}.i.posthog.com/:path*`,
      },
    ];
  },
};

export default nextConfig;
