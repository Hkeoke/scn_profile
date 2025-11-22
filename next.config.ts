import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["tile.openstreetmap.org"],
  },

  experimental: {
    optimizePackageImports: [
      "motion",
      "react-leaflet",
      "leaflet",
      "leaflet-defaulticon-compatibility",
      "react-i18next",
      "react-hook-form",
      "react-pdf/renderer",
    ],
  },
};

export default nextConfig;
