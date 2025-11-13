# 🌐 PLAN COMPLETO ACTUALIZADO — REMOTAS PORTFOLIO  
**Versión:** v1.3.0 – noviembre 2025  
**Autor:** Melquiades Farías (Remotas Work)  
**Repositorio:** [github.com/Remotas/remotas-portfolio](https://github.com/Remotas/remotas-portfolio)  
**Despliegue:** [remotas-portfolio.vercel.app](https://remotas-portfolio.vercel.app)

---

## 🧩 BLOQUE A — BASE FUNCIONAL Y ESTRUCTURA GENERAL ✅  

### A.1. Stack técnico

| Capa               | Tecnología                                  | Estado              |
|--------------------|---------------------------------------------|---------------------|
| Framework          | **Next.js 15 (App Router)**                 | ✅ Estable          |
| Lenguaje           | TypeScript                                  | ✅ Tipado correcto  |
| Estilos            | TailwindCSS + CSS variables                 | ✅ Tokens centrados |
| UI Components      | shadcn/ui (uso ligero) + diseño propio      | ✅ Consolidado      |
| Build & Dev        | pnpm + Vercel + Fast Refresh                | ✅ Fluido           |
| Contenido          | Archivos locales (`/content/*.mdx/.yml/.md`)| ✅ Controlado       |
| Control versiones  | Git + GitHub (rama `main`)                  | ✅ Flujo limpio     |

---

### A.2. Estructura de carpetas

```text
remotas-portfolio/
│
├── app/
│   ├── layout.tsx           ← layout global + ThemeProvider
│   ├── globals.css          ← variables y estilos base
│   ├── page.tsx             ← portada principal
│   ├── projects/            ← sección de proyectos (MDX)
│   ├── experience/          ← trayectoria profesional (YAML)
│   ├── certifications/      ← certificaciones (YAML)
│   ├── cv/                  ← currículum descargable
│   └── contact/             ← formulario de contacto
│
├── components/              ← UI modular (Header, Footer, Section, etc.)
├── theme/tokens.ts          ← tokens de diseño documentados
├── content/                 ← fuentes de contenido (about, skills, etc.)
└── public/                  ← assets, logos, imágenes
```

---

### A.3. Objetivo general

> Crear un **portfolio profesional y técnico bilingüe (ES/EN)** que consolide la marca personal *Remotas Work*, documente la trayectoria de Melquiades Farías y sirva como presentación sólida para oportunidades en España y la UE, manteniendo estándares de código, SEO, accesibilidad y UX/UI profesional.

---

## 🎨 BLOQUE B — INTERFAZ, TEMAS Y DISEÑO VISUAL ✅  

### B.1. Implementación de modo oscuro / claro

- Sistema global basado en **variables CSS**:  
  `--background`, `--foreground`, `--surface`, `--muted`, `--border`.
- Integración con **ThemeProvider** (client component).
- Cambio persistente en todas las páginas.
- `transition-colors` para fundido suave.
- Tema claro ajustado con **#f4f6fa** (gris azulado suave) en lugar de blanco puro.

**Commit principal:**  
`feat(theme): implement global dark/light mode across site`

**Tokens documentados:** `theme/tokens.ts`  
(con comentarios por tipo de uso: fondo base, tarjetas, texto, bordes, sombras, etc.)

---

### B.2. Componentes ajustados al nuevo tema

| Componente            | Ajuste principal                                           | Estado |
|-----------------------|------------------------------------------------------------|--------|
| `Header.tsx`          | Fondo heredado + icono de cambio de tema                  | ✅     |
| `Footer.tsx`          | Hereda colores globales + contrastes accesibles           | ✅     |
| `Section.tsx`         | Usa tokens (`cardBg`, `cardBorder`, `cardRadius`)         | ✅     |
| `ProjectCard.tsx`     | Fondo y borde dinámico según tema                         | ✅     |
| `Timeline.tsx`        | Viñeta reposicionada + contraste corregido                | ✅     |
| `SkillGrid.tsx`       | Colores variables; sin tonos fijos `bg-*`                 | ✅     |
| `Hero.tsx`            | Fondo neutro, texto ligado a `var(--foreground)`          | ✅     |
| `HomeAccordion.tsx`   | Transiciones suaves; color sincronizado con tema          | ✅     |
| `ContactForm.tsx`     | Inputs y estados adaptativos según tema                   | ✅     |
| `RotatingInfo.tsx`    | Tarjeta con borde y tipografía dinámica por tema          | ✅     |

---

### B.3. Layout y coherencia visual

- `app/layout.tsx` simplificado y limpio:

  ```tsx
  <main className="flex-1 bg-[var(--background)] transition-colors">
    {children}
  </main>
  ```

- Fondo uniforme entre secciones y footer (sin franjas).
- Header + Footer sincronizados visualmente en ambos temas.
- Mantiene `scroll-smooth` y tipografía original del diseño.

---

## ⚙️ BLOQUE C — CONTENIDO Y ESTRUCTURA DE DATOS ✅  

### C.1. Fuentes de contenido (`/content`)

| Archivo                 | Tipo      | Descripción                                                |
|-------------------------|-----------|------------------------------------------------------------|
| `about.md`              | Markdown  | Presentación bilingüe ES/EN                               |
| `philosophy.md`         | Markdown  | Filosofía profesional ES/EN                                |
| `skills.yml`            | YAML      | Habilidades agrupadas (frontend, backend, etc.)           |
| `experience.yml`        | YAML      | Trayectoria laboral detallada                             |
| `education.yml`         | YAML      | Formación principal                                       |
| `certifications.yml`    | YAML      | Certificaciones y cursos homologados                      |
| `projects/*.mdx`        | MDX       | Proyectos destacados (Comprys, Bot Trading, CV Digital)   |
| `contact.yml` (futuro)  | YAML      | Información de contacto extendida                         |

---

### C.2. Páginas dinámicas

Cada página importa datos usando `fs`, `path` y `yaml`/`gray-matter`, para generar contenido estático en build:

- `/projects` → usa `ProjectCard` para cada MDX.
- `/experience` → usa `Timeline` con datos YAML.
- `/certifications` → tarjetas por certificación.
- `/cv` → lista de PDFs descargables + educación desde YAML.
- `/contact` → formulario + datos de contacto directos.

---

## 🚀 BLOQUE D — SEO, ACCESIBILIDAD Y SCHEMA ✅  

### D.1. SEO técnico (Next.js Metadata API)

- Cada `page.tsx` define `export const metadata` con:
  - `title`
  - `description`
  - `openGraph`
  - `twitter`
  - `alternates` (canonical y, cuando aplique, por idioma)

Ejemplos especialmente trabajados: `/projects`, `/cv`, `/experience`, `/certifications`, `/contact`.

---

### D.2. Palabras clave y posicionamiento

Objetivo: aparecer por búsquedas relacionadas con **desarrollo web remoto en España / Next.js / soporte digital / portfolio técnico**.

Keywords prioritarias:

- `Melquiades Farías`
- `Remotas Work`
- `desarrollador web remoto España`
- `Next.js developer portfolio`
- `soporte digital y sistemas`
- `portfolio técnico Next.js Tailwind`
- `currículum digital PDF GitHub Pages`

---

### D.3. Estructura semántica y accesibilidad

- Uso correcto de `h1`, `h2`, `h3` a través de `Section`.
- Estructura: `section > article > h*` según bloque.
- Roles y atributos accesibles donde aplica (formularios, etc.).
- Contraste revisado en ambos temas (texto/principales componentes).
- JSON-LD `Person` inyectado en `app/layout.tsx` (Schema.org).

---

## 💾 BLOQUE E — CONTROL DE VERSIONES Y DEVOPS ✅  

### E.1. Flujo Git

- Rama principal: `main`.
- Convención: **Conventional Commits**.
- Commits relevantes recientes:
  - `feat(theme): implement global dark/light mode across site`
  - `fix(timeline): adjust bullet spacing`
  - `docs(plan): add full portfolio roadmap v1.3.0`
  - `docs(readme): update full project overview v1.3.0`
  - `chore(seo): enhance projects metadata`

---

### E.2. Despliegue continuo

- Plataforma: **Vercel**.
- Trigger: push a `main`.
- Comando de build:
  ```bash
  pnpm install
  pnpm build
  ```
- Logs y previews gestionados desde el dashboard de Vercel.

---

## 🧠 BLOQUE F — DOCUMENTACIÓN Y MANTENIMIENTO ✅  

### F.1. Archivos de referencia

| Archivo                         | Propósito                                        |
|---------------------------------|--------------------------------------------------|
| `theme/tokens.ts`              | Fuente de verdad de estilos (tokens documentados)|
| `docs/PLAN_PORTFOLIO_2025.md`  | Este documento de plan maestro                   |
| `README.md`                    | Resumen del proyecto + cómo ejecutarlo          |
| `pnpm-lock.yaml`               | Estado de dependencias bloqueado                 |

---

### F.2. Normas internas de código

- Evitar usar `bg-slate-*`, `text-slate-*` o hex directos en componentes de alto nivel.  
  → Preferir siempre `themeTokens.*` o `var(--*)`.
- Mantener tipado estricto en TypeScript.
- Todo componente nuevo debe aceptar `className` cuando sea razonable.
- Reutilizar `Section`, `ProjectCard`, `Timeline`, etc. para mantener consistencia.
- Respetar la semántica de encabezados (`HeadingLevel` en `Section`).

---

### F.3. Próximos pasos sugeridos

- **v1.3.1 — SEO internacional**  
  - Ajustar metadatos para una ruta `/en/*` si se decide duplicar contenido.  
  - Revisar `alternates.languages` en páginas clave.

- **v1.4.0 — Microinteracciones y detalle visual**  
  - Integrar Framer Motion en `Hero` y algunas secciones clave.  
  - Animaciones suaves para tarjetas y acordeones.

- **v1.5.0 — Blog técnico (MDX)**  
  - Crear `app/blog/` con layout reutilizando tokens.  
  - Primeros artículos: “Cómo está construido este portfolio”, “Arquitectura Comprys (resumen)”.

- **v1.6.0 — Analytics y métricas**  
  - Integrar Plausible o Vercel Analytics.  
  - Medir visitas a `/`, `/projects`, `/cv` y `/contact`.

---

## 📦 BLOQUE G — VERSIONADO Y MILESTONES  

### G.1. Historial de versiones

| Versión | Fecha     | Descripción                                       |
|---------|-----------|---------------------------------------------------|
| v1.0.0  | Oct 2025  | Estructura inicial del portfolio                  |
| v1.1.0  | Oct 2025  | SEO + Metadata API + contenido MDX                |
| v1.2.0  | Nov 2025  | Ajustes de diseño + UX/UI responsive              |
| v1.3.0  | Nov 2025  | Dark/Light global + tokens documentados           |

---

### G.2. Estado actual

| Área          | Estado | Notas                    |
|---------------|--------|--------------------------|
| UI/UX         | ✅     | Dark/light fluido        |
| SEO           | ✅     | Keywords activas         |
| Accesibilidad | ✅     | Contraste y semántica    |
| Contenido     | ✅     | Actualizado              |
| Código        | ✅     | Limpio y versionado      |
| Deploy        | ✅     | Vercel operativo         |

---

## 🧭 Resumen final

El portfolio **Remotas Work** se encuentra en estado **v1.3.0** estable, escalable y profesional:

- Código limpio y organizado por bloques funcionales.
- Tokens de diseño documentados y reutilizables.
- Diseño accesible y consistente en modo oscuro/claro.
- SEO sólido orientado a oportunidades remotas en España/UE.
- Despliegue automático y documentación interna lista para futuras iteraciones (v1.4+).
