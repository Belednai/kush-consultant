// Bridge file for Vercel/Next that expect JS config. Re-exports TS config.
const isLoose = process.env.CI_LOOSE === '1';
/** @type {import('next').NextConfig} */
module.exports = {
  images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] },
  eslint: { ignoreDuringBuilds: isLoose },
  typescript: { ignoreBuildErrors: isLoose },
  output: 'standalone',
  experimental: process.env.ENABLE_SERVER_ACTIONS === '1' ? {
    serverActions: { allowedOrigins: ['*'] }
  } : undefined,
};

