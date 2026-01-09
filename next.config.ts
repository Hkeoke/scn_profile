import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  basePath: isGitHubPages ? '/scn_porfolio' : '',
  assetPrefix: isGitHubPages ? '/scn_porfolio/' : '',
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true,
    domains: ['tile.openstreetmap.org']
  },
  serverExternalPackages: ['@react-pdf/renderer'],

  experimental: {
    optimizePackageImports: [
      'motion',
      'react-leaflet',
      'leaflet',
      'leaflet-defaulticon-compatibility',
      'react-i18next',
      'react-hook-form',
      'react-pdf/renderer'
    ]
  }
};

export default nextConfig;
