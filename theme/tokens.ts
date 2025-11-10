// theme/tokens.ts
// Tokens de tema basados en las CSS vars que definiste en app/globals.css

export const themeTokens = {
  // fondo base de cada página
  backgroundBase: "bg-[var(--background)] text-[var(--foreground)]",

  // tarjetas / paneles
  cardBg: "bg-[var(--surface)]",
  cardBorder: "border border-[var(--border)]",
  cardRadius: "rounded-2xl",
  cardPadding: "p-6",

  // texto
  headingColor: "text-[var(--foreground)]",
  muted: "text-[var(--muted)]",

  // bordes sueltos (por ejemplo en timelines)
  cardBorderColor: "border-[var(--border)]",

  // sombras suaves para cards
  shadowSm: "shadow-sm",
};
