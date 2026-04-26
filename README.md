# Imani Design System

Technical design system website for Imani, built with Bun, TypeScript, Next.js App Router, Tailwind CSS v4, and shadcn/ui.

Production deployment: [imani-design-system.vercel.app](https://imani-design-system.vercel.app)

## Commands

```bash
bun install
bun run tokens:all
bun dev
bun lint
bun run build
```

## Project Structure

- `tokens/*.json` — canonical Imani source tokens.
- `generated/variables.css` — generated CSS token variables consumed by the app and shadcn theme.
- `generated/tokens.ts` — generated TypeScript token constants.
- `generated/tailwind-preset.js` — generated Tailwind extension for downstream projects.
- `DESIGN_RULES.md` — generated agent-readable design rules.
- `src/app/globals.css` — maps generated tokens into shadcn/Tailwind semantic variables.
- `src/lib/imani-design-system.ts` — site display data derived from generated tokens.
- `src/components/ui` — shadcn/ui source components.
- `src/components/imani-logo.tsx` — Imani logo and petal mark implementation.
- `public/favicon-real.svg` — canonical Imani mark source.
- `public/imani-logotype.svg` — canonical dark-surface lockup source.
- `public/imani-logotype-light.svg` — canonical light-surface lockup source.
- `scripts/generate-brand-assets.mjs` — generates icons, manifest assets, and OG images.
- `AGENTS.md` — repo-local instructions for future coding agents.
- `public/agents.md` — website-visible agent guide.
- `public/llms.txt` — concise model-readable design system brief.

## Deployment

This project is linked to Vercel as `xtellar-works/imani-design-system`.

Use:

```bash
bunx vercel@latest --prod --yes
```
