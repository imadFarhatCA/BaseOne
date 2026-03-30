# Base One — SvelteKit Project

## Stack
- SvelteKit 2 + Svelte 5, adapter-static
- Dev server: `npm run dev` → localhost:5220
- No TypeScript, no Tailwind — plain CSS

## CSS Architecture
Global styles in `src/app.css` (imported in `+layout.svelte`), split into 6 files:
- `src/lib/styles/base.css` — variables, reset, typography, containers, utilities
- `src/lib/styles/nav.css` — nav, hamburger, mobile fullscreen menu
- `src/lib/styles/hero.css` — hero sections, buttons, hero-highlights pills
- `src/lib/styles/sections.css` — sections, lists, feature cards, grids, cta-block, footer, form
- `src/lib/styles/components.css` — schedule table, steps/timeline
- `src/lib/styles/animations.css` — scroll reveal classes and delay utilities

## Shared Components
- `src/lib/components/PageHero.svelte` — inner page hero (props: image, eyebrow, heading, sub)
- `src/lib/components/CtaBlock.svelte` — CTA section (props: heading, text, primaryLabel, primaryHref, secondaryLabel, secondaryHref)
- `src/lib/components/Nav.svelte` — site navigation
- `src/lib/components/Footer.svelte` — site footer

## Scroll Reveal
Handled in `+layout.svelte` via IntersectionObserver + `afterNavigate`.
Classes: `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-up`, `.scale-reveal`, `.blur-reveal`
Delay modifiers: `.delay-1` through `.delay-5`

## Key Rules
- Never use inline `style="color:..."` for colour utilities — use `.stone`, `.teal-light`, `.muted` classes
- Never use inline `style="margin-top:..."` — use `.mt-sm`, `.mt-md`, `.mt-lg`
- Always use `PageHero` and `CtaBlock` components on inner pages, never inline hero/cta HTML
- Brand name is always "Base One" (never "Base1")
