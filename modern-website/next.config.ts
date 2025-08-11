// next.config.ts
import type { NextConfig } from "next";

const isLoose = process.env.CI_LOOSE === "1";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  eslint: { ignoreDuringBuilds: isLoose },
  typescript: { ignoreBuildErrors: isLoose },
  output: "standalone",
  experimental: process.env.ENABLE_SERVER_ACTIONS === '1' ? {
    serverActions: { allowedOrigins: ['*'] }
  } : undefined,
};

export default nextConfig;
