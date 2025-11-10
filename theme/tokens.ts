// theme/tokens.ts
// ---------------------------------------------------------
// Centralizamos aquí las clases que dependen del tema
// (dark / light) y las que usamos repetidas en todas
// las páginas internas.
// La idea: en vez de escribir en cada componente
// "bg-[var(--background)] border border-[var(--border)] ..."
// usamos un token con nombre claro.
//
// IMPORTANTE:
// - Estos tokens están pensados para Tailwind + nuestras
//   variables CSS definidas en app/globals.css
// - Si cambias las variables en globals.css, todo lo que
//   use estos tokens cambia en cadena.
// ---------------------------------------------------------

export const themeTokens = {
  /*
   * Fondo base de página.
   * Úsalo en los <main> de las páginas:
   * <main className={`min-h-screen ${themeTokens.backgroundBase} ...`}>
   */
  backgroundBase: "bg-[var(--background)]",

  /*
   * Texto principal. Útil si algún componente quedó con
   * un color fijo y quieres traerlo al tema.
   */
  textBase: "text-[var(--foreground)]",

  /*
   * Superficie / panel (tarjetas, secciones, contenedores).
   * Es el equivalente “elegante” a bg-white / bg-slate-900,
   * pero controlado por las variables del tema.
   */
  surface: "bg-[var(--surface)]",

  /*
   * Radio estándar para tarjetas y secciones.
   * Lo usamos en Section, ProjectCard, etc.
   */
  cardRadius: "rounded-3xl",

  /*
   * Padding estándar para contenedores principales.
   * Si una tarjeta queda muy grande en mobile,
   * puedes cambiar esto aquí y afecta a todas.
   */
  cardPadding: "p-6 md:p-8",

  /*
   * Fondo de tarjeta/panel ya preparado.
   * Combina el surface con lo que espera la mayoría
   * de las secciones.
   */
  cardBg: "bg-[var(--surface)]",

  /*
   * Borde estándar de tarjeta/panel.
   * Úsalo junto con cardBg y cardRadius.
   */
  cardBorder: "border border-[var(--border)]",

  /*
   * Solo el color de borde, útil cuando el componente ya
   * tiene su propio border-l, border-t, etc.
   * Ej.: Timeline.
   */
  cardBorderColor: "border-[var(--border)]",

  /*
   * Color de títulos principal.
   * Para <h1>, <h2>, <h3> dentro de un Section.
   */
  headingColor: "text-[var(--foreground)]",

  /*
   * Sombra ligera opcional para tarjetas.
   * No es obligatoria, pero da un poco de profundidad
   * en modo claro.
   */
  shadowSm: "shadow-sm shadow-black/5 dark:shadow-black/20",
};
