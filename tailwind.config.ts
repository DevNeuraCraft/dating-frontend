import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "592px",
      },
      colors: {
        menu: {
          edit: "#9932CC",
          filters: "#1E90FF",
          likes: "#DC143C",
        },
        orange: "#f8a917",
        tg: {
          "bg-color": "rgb(var(--tg-theme-bg-color))",
          "text-color": "rgb(var(--tg-theme-text-color))",
          "hint-color": "rgb(var(--tg-theme-hint-color))",
          "link-color": "rgb(var(--tg-theme-link-color))",
          "button-color": "rgb(var(--tg-theme-button-color))",
          "button-text-color": "rgb(var(--tg-theme-button-text-color))",
          "secondary-bg-color": "rgb(var(--tg-theme-secondary-bg-color))",
          "header-bg-color": "rgb(var(--tg-theme-header-bg-color))",
          "bottom-bar-bg-color": "rgb(var(--tg-theme-bottom-bar-bg-color))",
          "accent-text-color": "rgb(var(--tg-theme-accent-text-color))",
          "section-bg-color": "rgb(var(--tg-theme-section-bg-color))",
          "section-header-text-color":
            "rgb(var(--tg-theme-section-header-text-color))",
          "section-separator-color":
            "rgb(var(--tg-theme-section-separator-color))",
          "subtitle-text-color": "rgb(var(--tg-theme-subtitle-text-color))",
          "destructive-text-color":
            "rgb(var(--tg-theme-destructive-text-color))",
        },
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
      scaling: {
        "0%, 80%, 100%": { transform: "scale(1)" },
        "40%": { transform: "scale(0.7)" },
      },
    },
  },
  safelist: ["border-orange", "!border-orange"],
  plugins: [
    function ({ addVariant }: PluginAPI) {
      addVariant("scrollbar", "&::-webkit-scrollbar");
      addVariant("scrollbar-track", "&::-webkit-scrollbar-track");
      addVariant("scrollbar-thumb", "&::-webkit-scrollbar-thumb");
      addVariant("max-xs-h", "@media (max-height: 600px)");
    },
  ],
} satisfies Config;