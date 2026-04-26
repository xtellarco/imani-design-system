# Imani Design System Agent Guide

This repository is the technical design system website for Imani. Build with Bun, TypeScript, Next.js App Router, Tailwind CSS v4, and shadcn/ui source components.

## Commands

- Install: `bun install`
- Develop: `bun dev`
- Lint: `bun lint`
- Build: `bun run build`

## Stack Rules

- Use Bun for package management and scripts.
- Use TypeScript for all app code.
- Use Next.js App Router under `src/app`.
- Use shadcn/ui components from `src/components/ui`; do not replace them with a separate component library.
- Deploy only to Vercel. The intended Vercel project name is `imani-design-system`.

## Design Sources

- `DESIGN.md` is the canonical source of truth. If this file conflicts with `DESIGN.md`, follow `DESIGN.md` and update this file.
- Source design tokens live in `tokens/*.json`.
- Generated CSS tokens live in `generated/variables.css`.
- Generated TypeScript token constants live in `generated/tokens.ts`.
- Generated Tailwind extension lives in `generated/tailwind-preset.js`.
- Generated agent rules live in `DESIGN_RULES.md`.
- Website-readable generated artifacts live in `public/resources/*`.
- Run `bun run tokens:all` after changing any source token or logo SVG.
- The local Agency font is loaded from `fonts/Agency.woff2`.
- DM Sans is the body/UI font. Agency is the display font.
- Official logo sources live in `public/favicon-real.svg`, `public/imani-logotype.svg`, and `public/imani-logotype-light.svg`.
- Generated icon and OG assets are produced by `bun run assets:brand`.
- shadcn/ui semantic tokens are defined in `src/app/globals.css` and must map back to the Section 11 contract in `DESIGN.md`.

## Brand Implementation Rules

- Imani is an eco-friendly cleaning products brand. Interfaces should feel clean, trusted, fresh, modern, and unmistakably green without falling into generic eco decoration.
- Brand voice is confident, light, and plain-spoken. Marketing headings may use cleaning/water metaphors; UI labels, buttons, errors, and forms must stay direct.
- Tunic Green `#00CA00` is for primary actions, brand highlights, and logo icon fill.
- Fence Green `#073C2B` is for dark brand surfaces and headings on light surfaces.
- Aqua Bliss `#B8E0D9` is an accent, not a primary page background.
- Cloud Bleach `#F2F2F2` is the alternate light surface.
- Brand colors are not the full design-system palette. Use brand tokens for identity and use surface, text, border, state, chart, and component tokens for application UI.
- Dark application UI must use `--color-surface-brand-dark`, `--color-surface-brand-dark-raised`, `--color-surface-brand-dark-elevated`, and `--color-surface-popover-dark`; do not reuse Fence Green for every dark surface.
- Body copy on light surfaces must use Fence Green or Black Feather, never Tunic Green.
- Tunic Green on Fence Green is acceptable for large display accents and icons, but not body copy.
- Use Agency only for display headings, section titles, and short editorial subheads.
- Use DM Sans for body, UI labels, forms, tables, and extended reading.
- Avoid italics.
- Do not add leaves, droplets, sparkles, or generic eco decoration. The petal mark is the only brand-native graphic.
- Do not rotate, recolor outside approved treatments, shadow, or stretch the logo.
- Never redraw the Imani logo in code. Use `public/favicon-real.svg` for the mark, `public/imani-logotype-light.svg` on light surfaces, and `public/imani-logotype.svg` on dark surfaces.
- Every Imani web project must include light/dark/system color mode support using class-based theming.
- Every Imani web project must include favicon, apple touch icon, web manifest, Open Graph image, Twitter image, theme-color metadata, and JSON-LD metadata generated from the official logo assets.
- Every Imani component must consume generated tokens. Do not hardcode brand colors, spacing, radii, typography, focus rings, or shadows in product components.
- For new projects, copy or import `generated/variables.css`, `generated/tokens.ts`, `generated/tailwind-preset.js`, and `DESIGN_RULES.md` before building UI.
- Large petal/logo watermarks must stay at 8-15% opacity, bleed off-canvas, and never become repeated patterns.

## Component Rules

- Buttons: primary Tunic Green, secondary Fence Green, outline/ghost Fence Green, inverse white on dark.
- Site navbars: use one shared shell rhythm across homepage and showcase pages. Header height is 64px (`h-16`), horizontal padding is 24px (`px-6`), and the max content width is `1680px`.
- Header action controls that sit together, such as "Agent brief" and the color-mode icon button, must use the same compact 36px control height. Do not mix compact text buttons with default icon buttons in the same action group.
- Inputs: 44px tall, 12px radius, Tunic Green focus border, Aqua Bliss focus ring.
- Selects, dropdown menus, command palettes, popovers, dialogs, and menu rows: use `rounded-md`, minimum 40px row height, and 12px+ horizontal padding. Avoid oversized pill-like overlay corners.
- Cards: white or Cloud Bleach, 20px radius, 32px default padding.
- Tags: pill radius, DM Sans 500, 12px.
- Keep shadows sparse and Fence-Green tinted.
- Use shadcn Chart primitives for charts. Chart colors must come from `--chart-*` tokens, not ad hoc brand swatches.
- Calendar/date-picker examples must appear in real workflows, select dates interactively, populate their trigger/input, and hide out-of-month days unless the workflow explicitly needs them.
- Showcase examples should demonstrate realistic Imani use cases such as refill operations, route scheduling, batch verification, ingredient compliance, inventory forecasting, customer portals, and operational dashboards.
- Do not put a raw primitive dump on the primary showcase page. Primitive inventories can exist as secondary documentation, but the main examples must be applied UI.

## Agent-Facing Web Resources

- `/agents.md` contains a website-visible build guide.
- `/llms.txt` contains a concise model-readable project brief.
- GitHub source repository: `https://github.com/xtellarco/imani-design-system`.

## Brand Asset Workflow

Run `bun run tokens:all` after changing tokens or any source logo SVG. The script must generate:

- `/favicon.svg` from `/favicon-real.svg`
- `/favicon.ico` with 16px, 32px, and 48px PNG entries for browser fallback
- `/icons/favicon-16x16.png`
- `/icons/favicon-32x32.png`
- `/icons/apple-touch-icon.png`
- `/icons/android-chrome-192x192.png`
- `/icons/android-chrome-512x512.png`
- `/icons/maskable-icon-512x512.png`
- `/site.webmanifest`
- `/og/imani-og.png`
- `/og/imani-twitter.png`
- `generated/variables.css`
- `generated/tokens.ts`
- `generated/tailwind-preset.js`
- `DESIGN_RULES.md`

Before making visual changes, verify they consume existing tokens and shadcn components. Add a new token only when the design system genuinely needs a reusable primitive.
