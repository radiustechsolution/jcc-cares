// src/hero.ts   (or app/hero.ts, lib/hero.ts, etc.)
import { heroui } from "@heroui/theme"; // or "@heroui/theme" in some setups

export default heroui({
  themes: {
    light: {
      colors: {
        primary: "#2563eb",
        background: "#ffffff",
        foreground: "#1e293b", // usually "text" → renamed to foreground in HeroUI
        content1: "#fcfcfc", // custom color
      },
    },
    dark: {
      colors: {
        primary: "#60a5fa",
        background: "#171717",
        foreground: "#f1f5f9",
        content1: "#1e2021", // custom color for dark mode
      },
    },
  },
});
