# Portfolio — Melquiades Farías

Stack: Next.js 15 (App Router) · TypeScript · MDX · Tailwind.

## Desarrollo

pnpm i
pnpm dev

## Contenido editable

- `content/about.md` — sobre mí
- `content/skills.yml` — grid de habilidades
- `content/experience.yml` — timeline
- `content/certifications.yml` — tarjetas con descarga
- `content/projects/*.mdx` — fichas de proyectos

PDFs: `public/pdf/*`

## Deploy

### Opción A — Vercel (recomendada)

1. Importar repo en Vercel
2. Build Command: `next build` · Output: `.next`
3. Dominios: `portfolio.remotas.work` (CNAME)

### Opción B — GitHub Pages (export estático)

1. En `next.config.mjs`: usar `output: 'export'` + `images.unoptimized`
2. `pnpm export` → genera `out/`
3. Publicar `out/` en `gh-pages` (acción de GitHub)
