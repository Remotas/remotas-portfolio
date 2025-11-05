import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./theme/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#2563eb", 50: "#eff6ff", 600: "#2563eb" } },
      borderRadius: { "2xl": "1rem" },
    },
  },
  plugins: [typography],
} satisfies Config;
