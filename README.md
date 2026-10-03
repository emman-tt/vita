# VITA — landing page recreation

React + TypeScript + Tailwind CSS v4 + GSAP recreation of the Neutriherbs skincare landing design, rebranded as **VITA**.

## Run

```bash
npm install
npm run dev
```

## Swapping the placeholder images

Every photo slot is an SVG placeholder in `public/images` (warm gradient + slot label).
To use real photos, drop your files into `public/images` and update the paths in
`src/images.ts` — or simply overwrite a placeholder while keeping the same filename.
No component changes needed.

| File | Where it appears |
| --- | --- |
| `hero-flower.svg` | Flower-masked portrait, hero left |
| `hero-mosaic.svg` | One photo sliced across the nine hero collage blobs |
| carousel cards | `images.ts` → `cards` — currently `face3–6.jpg` + `fasho.png` |
| `product-bottle.svg` | Illustrated serum bottle (organic section) |
| `banner.svg` | Full-width banner (solutions section) |

`node scripts/make-placeholders.mjs` regenerates the placeholders.

## Structure

- `src/sections/` — one file per page section, GSAP animations co-located in each
- `src/lib/gsap.ts` — shared GSAP setup + the blur-to-clear scroll-reveal helper
- `src/images.ts` — single source of truth for every image slot
