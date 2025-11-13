# 🌐 Remotas Portfolio — Melquiades Farías

Portfolio profesional y técnico construido con **Next.js 15 (App Router)**, **TypeScript** y **Tailwind CSS**, totalmente bilingüe (ES/EN) y con soporte de **modo oscuro / claro global** mediante variables CSS y tokens centralizados.

---

## 🚀 Características principales

- ⚙️ **Next.js 15 + App Router** (estructura moderna y tipada)  
- 💡 **Dark/Light Mode global** (variables + `theme/tokens.ts`)  
- 🧩 **Contenido dinámico** con MDX, YAML y Markdown  
- 🧱 **Componentes reutilizables** (Section, ProjectCard, Timeline…)  
- 📄 **Metadatos SEO completos** con `export const metadata`  
- 🧠 **Accesible y responsivo** (WCAG AA / mobile-first)  
- 🌍 **Despliegue continuo** en Vercel  
- 🧾 **Documentación completa** en `/docs/PLAN_PORTFOLIO_2025.md`  

---

## 🧩 Stack técnico

| Capa       | Tecnología                     | Estado |
|-----------|--------------------------------|--------|
| Framework | Next.js 15 (App Router)        | ✅ |
| Lenguaje  | TypeScript                     | ✅ |
| Estilos   | TailwindCSS + variables CSS    | ✅ |
| UI        | shadcn/ui + diseño propio      | ✅ |
| Contenido | MDX / YAML / Markdown          | ✅ |
| Deploy    | Vercel (auto-deploy desde main) | ✅ |

---

## 📂 Estructura del proyecto

```text
remotas-portfolio/
│
├── app/                     # Páginas (App Router)
│   ├── page.tsx             # Portada
│   ├── layout.tsx           # Layout global + ThemeProvider
│   ├── projects/            # Proyectos (MDX)
│   ├── experience/          # Experiencia (YAML)
│   ├── certifications/      # Certificaciones (YAML)
│   ├── cv/                  # Currículum (PDF)
│   └── contact/             # Formulario y redes
│
├── components/              # UI modular (Header, Footer, Section, etc.)
├── theme/tokens.ts          # Tokens documentados del tema
├── content/                 # Fuente de datos (about, skills, etc.)
└── docs/PLAN_PORTFOLIO_2025.md   # Plan maestro del portfolio
```

---

## 💻 Desarrollo local

### Requisitos

- Node.js **20+**  
- pnpm **9+**  

### Instalación

```bash
pnpm install
```

### Entorno de desarrollo

```bash
pnpm dev
# http://localhost:3000
```

### Compilación producción

```bash
pnpm build
pnpm start
```

---

## 🎨 Sistema de temas (Dark/Light)

### 1. Variables base

Definidas en:

```text
app/globals.css
```

Variables principales:

- `--background`  
- `--foreground`  
- `--surface`  
- `--muted`  
- `--border`  

### 2. Tokens semánticos

Definidos y documentados en:

```text
theme/tokens.ts
```

Ejemplos de uso:

- `themeTokens.backgroundBase`  
- `themeTokens.cardBg`  
- `themeTokens.headingColor`  
- `themeTokens.cardBorder`  

### 3. Proveedor global

```text
components/ThemeProvider.tsx
```

Ejemplo:

```tsx
<main className={`min-h-screen ${themeTokens.backgroundBase}`}>
  {children}
</main>
```

---

## 🔍 SEO y accesibilidad

- Metadatos por página con `export const metadata`  
- OpenGraph + Twitter Cards configurados  
- Schema `Person` en JSON-LD dentro de `app/layout.tsx`  
- Colores y contrastes pensados para modo oscuro/claro  

Palabras clave objetivo:

- `desarrollador web remoto españa`  
- `next.js portfolio`  
- `soporte digital y sistemas`  
- `melquiades farías`  
- `remotas work`  

---

## 🧠 Documentación interna

Documentación extendida en:

```text
docs/PLAN_PORTFOLIO_2025.md
```

Incluye:

- Bloques A–G (estructura, diseño, SEO, DevOps, mantenimiento)  
- Versionado histórico de hitos  
- Roadmap v1.4.0, v1.5.0, etc.  

---

## 🧾 Versionado

| Versión | Descripción                                  | Commit clave                                      |
|---------|----------------------------------------------|---------------------------------------------------|
| v1.0.0  | Estructura inicial                           | `feat(base): setup next app`                      |
| v1.1.0  | SEO + contenido MDX                          | `chore(seo): enhance metadata`                    |
| v1.2.0  | Ajustes UI/UX                                | `fix(ui): refine component styles`                |
| v1.3.0  | Dark/Light global + tokens documentados      | `feat(theme): implement global dark/light mode across site` |

---

## ☁️ Despliegue en Vercel

- Hosting en **Vercel**  
- Auto-deploy desde la rama `main`  

Flujo típico:

```bash
git add .
git commit -m "feat(x): descripción breve del cambio"
git push origin main
```

Vercel construye y publica automáticamente la nueva versión.

---

## 🧭 Autor

**Melquiades Farías — Remotas Work**

- 📧 `remotaswork@gmail.com`  
- 🔗 LinkedIn: `https://www.linkedin.com/in/remotas-work/`  
- 💻 GitHub: `https://github.com/Remotas`  
- 🌐 Producción: `https://remotas-portfolio.vercel.app`  

---

© 2025 — Desarrollado con Next.js + Tailwind CSS · Documentado y versionado.
