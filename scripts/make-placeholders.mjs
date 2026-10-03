import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

// Regenerates the warm-toned SVG placeholders in public/images.
// Run: node scripts/make-placeholders.mjs

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'public', 'images')
mkdirSync(outDir, { recursive: true })

const palettes = [
  ['#F2E6D2', '#E7C89E'],
  ['#F6EADC', '#F0C9A0'],
  ['#EEE1CD', '#E4BA92'],
  ['#F4E8D9', '#ECCBA6'],
  ['#EDE8DE', '#D9D0BF'],
  ['#F5E5D0', '#E9C39A'],
]

const petals = (cx, cy, r, fill, opacity) =>
  Array.from(
    { length: 6 },
    (_, i) =>
      `<ellipse cx="${cx}" cy="${cy - r}" rx="${(r * 0.45).toFixed(1)}" ry="${r.toFixed(1)}" fill="${fill}" opacity="${opacity}" transform="rotate(${i * 60} ${cx.toFixed(1)} ${cy.toFixed(1)})"/>`,
  ).join('')

function placeholder(name, w, h, paletteIndex) {
  const [a, b] = palettes[paletteIndex % palettes.length]
  const labelSize = Math.max(18, Math.round(w / 40))
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="ui-monospace, 'SF Mono', Menlo, monospace">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <g>${petals(w * 0.72, h * 0.38, Math.min(w, h) * 0.16, '#FFFFFF', 0.3)}</g>
  <text x="${Math.round(w * 0.035)}" y="${Math.round(h - h * 0.055)}" font-size="${labelSize}" letter-spacing="${Math.round(labelSize / 5)}" fill="#A18A65" opacity="0.9">${name.toUpperCase()}</text>
</svg>
`
}

const files = [
  ['hero-flower', 640, 840],
  ['hero-mosaic', 1680, 1200],
  ['banner', 2000, 920],
]

for (const [name, w, h] of files) {
  writeFileSync(join(outDir, `${name}.svg`), placeholder(name, w, h, files.findIndex((f) => f[0] === name)))
  console.log(`✓ ${name}.svg`)
}
