# Imani Design System Agent Guide

Imani websites and product interfaces are built from this design system. Treat this document as the public build contract for agents working from design.imani.company.

## Required Stack

- Bun
- TypeScript
- Next.js App Router
- shadcn/ui source components
- Tailwind CSS v4
- Vercel deployment

## Core Tokens

`DESIGN.md` is canonical. Source tokens are in `tokens/*.json`. Generated consumption artifacts are `generated/variables.css`, `generated/tokens.ts`, `generated/tailwind-preset.js`, and `DESIGN_RULES.md`. Agents building Imani UI must consume those artifacts instead of hardcoding brand values.

Website-readable artifacts are available at `/resources/variables.css`, `/resources/tokens.ts`, `/resources/tailwind-preset.js`, and `/resources/design-rules.md`.

- Tunic Green: `#00CA00`
- Fence Green: `#073C2B`
- Aqua Bliss: `#B8E0D9`
- Cloud Bleach: `#F2F2F2`
- Black Feather: `#101C23`
- White: `#FFFFFF`

Use Agency for display headings and DM Sans for body/UI. Load Agency from the local font directory when working inside this repo.

Brand colors are different from design-system colors. Use brand colors for identity and shadcn semantic tokens for UI: `--background`, `--foreground`, `--card`, `--popover`, `--primary`, `--secondary`, `--accent`, `--muted`, `--border`, `--input`, `--ring`, `--success`, `--warning`, `--info`, `--destructive`, `--chart-*`, and `--sidebar-*`.

## Logo and Metadata Assets

- Use `/favicon-real.svg` for the Imani mark.
- Use `/imani-logotype-light.svg` on light surfaces.
- Use `/imani-logotype.svg` on dark surfaces.
- Do not redraw the logo in React, CSS, canvas, or SVG code.
- Run `bun run tokens:all` when source tokens or logo files change.
- Every Imani project must ship favicon SVG, `favicon.ico`, PNG favicons, apple touch icon, Android icons, maskable icon, web manifest, Open Graph image, Twitter image, theme-color metadata, and JSON-LD metadata.
- Every Imani project must support `light`, `dark`, and `system` color modes with class-based theming.

## UI Rules

- Primary actions use Tunic Green with white text.
- Secondary dark actions use Fence Green with white text.
- Body copy on light surfaces uses Fence Green or Black Feather.
- Aqua Bliss is an accent, not a page background.
- Site navbars use the shared shell: 64px height, 24px horizontal padding, and 1680px max content width.
- Paired header actions, such as "Agent brief" and a color-mode icon button, use the same compact 36px control height.
- Selects, dropdowns, popovers, dialogs, and menus use `rounded-md`, not oversized pill corners.
- Use shadcn Chart primitives for charts and `--chart-*` semantic colors.
- Calendar/date-picker examples must be interactive workflows that populate the trigger/input.
- Showcase examples should demonstrate applied Imani product workflows rather than raw primitive dumps.
- Marketing headings may use light cleaning metaphors; buttons and errors must be direct.
- The petal mark is the only brand-native graphic. Do not add leaves, droplets, sparkles, or generic eco symbols.
- Petal/logo watermarks use 8-15% opacity and must not become repeated patterns.
- Keep layouts clean, flat, trusted, and spacious. Use shadows sparingly.

## Implementation Pattern

1. Start with `tokens/*.json`.
2. Compose with shadcn/ui primitives.
3. Override through generated CSS variables, TypeScript constants, or typed variants, not one-off colors.
4. Verify responsive spacing and text fit.
5. Generate brand assets and metadata from the official SVG logo files.
6. Deploy through Vercel.

Canonical technical source: `DESIGN.md`, `tokens/*.json`, `generated/*`, `DESIGN_RULES.md`, and root `AGENTS.md`.

GitHub source: `https://github.com/xtellarco/imani-design-system`.
