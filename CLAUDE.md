# CLAUDE.md

Personal portfolio site built with Next.js 16 (App Router), React 19, Tailwind CSS v4, TanStack Query v5, and shadcn/ui. Deployed on Vercel.

## Commands

Use **pnpm** (lockfile is `pnpm-lock.yaml`), Node 22.

- `pnpm install --frozen-lockfile`
- `pnpm dev`: local dev server on http://localhost:3000
- `pnpm build`: production build, which also runs the TypeScript check. CI requires this to pass.
- `pnpm lint`: ESLint. It has pre-existing errors, so CI reports lint but doesn't fail on it. Don't add new lint errors.

There is no test suite yet.

## Layout

- `src/app/`: App Router routes
  - `(LandingPage)/home/` uses parallel routes (`@aboutme`, `@projects`, `@works`, ...) composed in `layout.tsx`
  - `projects/[slug]`, `blogs`, `certificate`
  - `api/`: route handlers (`certificates`, `resumeapi`, `resumeapi/visits`) that proxy external APIs
- `src/components/`: page-level components; `src/components/ui/` holds shadcn primitives and custom animated UI (GSAP, motion, react-three-fiber)
- `data/`: static content (projects, work experience, education, ...) as typed TS modules
- `src/types/`: shared types
- `middleware.ts`: blocks `/api/*` requests whose origin isn't `NEXT_PUBLIC_SITE_URL`

## Path aliases

`@/*` → `src/*`, `@public/*` → `public/*`, `@data/*` → `data/*`

## Environment variables

- `NEXT_PUBLIC_SITE_URL`: allowed origin for API routes (defaults to localhost)
- `RESUME_API_URL`: backend for visitor counting
- `DEVTO_API_KEY`: optional; the blog page skips the dev.to fetch when it's unset

Never commit `.env*` files.

## Conventions

- Follow the React/Next.js rules in `.agents/skills/vercel-react-best-practices/`.
- Prefer Server Components; add `"use client"` only for interactivity, animation, or TanStack Query hooks.
- Add new UI primitives with the shadcn CLI (the `shadcn` MCP server is configured in `.mcp.json`).
- Keep content in `data/` rather than hardcoding it in components.
- Every layout must work on mobile and desktop, in both light and dark themes.
