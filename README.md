# Echo — Landing Page

Marketing website for **Echo**, a privacy-first personal briefing app that captures your
notifications, SMS and calendar and reads you a calm spoken briefing each morning — processed
on-device by default.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, and configured for **static
export** so it deploys to any static host.

## Tech

- **Next.js 15** (App Router), **React 19**, **TypeScript**.
- **Tailwind CSS** for the theme tokens (brand colors, radii, shadows); the ported layout lives
  in `app/globals.css` under `@layer components`.
- Fonts via **`next/font/google`** — **Old Standard TT** (serif headings) + **Nunito** (body).
  Self-hosted at build time, so there is no external font `<link>`.
- The Echo mascot ("the sound sprite") is an **inline animated SVG** component
  (`components/Mascot.tsx`) — float + slow sonar-ripple animation, honoring
  `prefers-reduced-motion`.

## Project structure

```
app/
  layout.tsx          # fonts, <html>/<body>, SEO metadata, shared mascot <defs>
  page.tsx            # the landing page — composes the section components
  globals.css         # Tailwind layers + the ported brand styles & animations
  privacy/page.tsx    # /privacy route (the privacy policy)
components/
  Header.tsx  Footer.tsx
  Hero.tsx  HowItWorks.tsx  FeatureRow.tsx  EngineChoice.tsx
  FeatureGrid.tsx  Voices.tsx  ScreenshotShowcase.tsx
  PrivacyBand.tsx  FinalCTA.tsx
  Mascot.tsx          # HeroMascot / CtaMascot / BrandOrb / DecoRings
  MascotDefs.tsx      # shared SVG gradients & filters
  PhoneFrame.tsx  GooglePlayButton.tsx  Reveal.tsx  icons.tsx
public/
  home.jpeg ai.jpeg brief.jpeg settings.jpeg vault.jpeg vault_sec.jpeg   # real app screenshots
  echo-mascot.svg logo.png og-image.png favicon-256.png favicon-32.png
next.config.mjs       # output: 'export', images.unoptimized, trailingSlash
tailwind.config.ts
```

The real dark-theme app screenshots are placed as follows: **Home** → `home.jpeg`, **Ask Echo**
→ `ai.jpeg`, **Daily briefing (the green waveform)** → `brief.jpeg`, **The Vault** → `vault.jpeg`
(with `vault_sec.jpeg` available), voice/engine settings → `settings.jpeg`. The "See it in
motion" showcase uses `home.jpeg`, `ai.jpeg` and `brief.jpeg`.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Production build (static export)

```bash
npm run build        # type-checks, builds, and exports a static site to ./out
```

`next.config.mjs` sets `output: 'export'`, so `npm run build` writes a fully static site to
`out/` — no Node server required at runtime. To preview the exported site exactly as it will be
served:

```bash
npx serve out -l 4321        # then open http://localhost:4321/
```

## Deployment

### Vercel

Import the repo in Vercel — it detects Next.js automatically. No configuration is needed; the
static export is served from the CDN. (Leave `basePath`/`assetPrefix` commented out in
`next.config.mjs`.)

### GitHub Pages

1. Run `npm run build` to produce `out/`.
2. **If the site is served from a project subpath** (e.g.
   `https://<user>.github.io/echo-landing-page/`), uncomment and set `basePath` and `assetPrefix`
   in `next.config.mjs` to `'/echo-landing-page'` before building, so assets and links resolve
   under the subpath. For a custom domain or a `<user>.github.io` root site, leave them
   commented.
3. Publish the contents of `out/` to the `gh-pages` branch (for example with the
   `peaceiris/actions-gh-pages` action, or `npx gh-pages -d out`). A `.nojekyll` file is emitted
   in `out/` by Next so the `_next/` folder is served correctly.

### Netlify / any static host

Build with `npm run build` and serve the `out/` directory. Set the build command to
`npm run build` and the publish directory to `out`.

## Fill-in-before-launch

- Replace the Google Play `#` placeholder with the real store URL. It lives in one place:
  `PLAY_STORE_URL` in `components/GooglePlayButton.tsx`.
- Confirm the contact email `privacy@echo.app` (used in the footer and on the privacy page), or
  swap it for the real one.

## Brand

- Type: **Old Standard TT** (serif headings) + **Nunito** (body).
- Colors: paper `#F4F2EE`, forest green `#49884F`, pale green `#D1E6D3` / `#AECFB4`, charcoal
  `#141810`, near-black text `#1E1E1E`. Defined as Tailwind tokens in `tailwind.config.ts`.
