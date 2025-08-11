# Build & Deploy (Next.js on Vercel)

This repo contains a Next.js app under `modern-website/`. Root npm scripts proxy to that app.

## Requirements

- Node 20.x
- npm (package-lock.json is the lock source of truth)

## Commands

- Development: `npm run dev`
- Production build: `npm run build`
- Serve production: `npm run start`
- Vercel production build (local): `npm run vercel:build`

## Environment Flags

- `CI_LOOSE=1` to ignore ESLint/TypeScript build errors (use sparingly in CI).
- `ENABLE_SERVER_ACTIONS=1` to enable serverActions experimental block.

## Images

Remote HTTPS images are allowed by default via `images.remotePatterns`. Tighten as needed.
