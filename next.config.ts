import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // External-drive projects: Next image optimizer can read macOS ._ sidecar
  // files instead of real assets, producing broken 4KB placeholders.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
