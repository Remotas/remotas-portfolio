export const themeTokens = {
  backgroundBase: "bg-slate-950",
  cardBg: "bg-slate-900/70",
  cardBorder: "border border-slate-800",
  cardBorderColor: "border-slate-800",
  cardRadius: "rounded-2xl",
  cardPadding: "p-5",
  headingColor: "text-slate-100",
  mutedColor: "text-slate-400",
  shadowSm: "shadow-sm",
} as const;

export type ThemeTokens = typeof themeTokens;
