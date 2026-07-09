import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        ink: "#161A2B",
        cream: "#FAF7F2",
        surface: "#FFFFFF",
        accent: {
          DEFAULT: "#E9611D",
          dark: "#C94F14",
          light: "#F3855A",
        },
        gold: {
          DEFAULT: "#D9A441",
          light: "#EAC57D",
        },
        neutral: {
          100: "#F1EEE8",
          300: "#D8D3C9",
          600: "#6B6A66",
          900: "#1F1E1C",
        },
        success: "#2E7D4F",
        error: "#C4432B",
        info: "#1D5C63",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(22, 26, 43, 0.06)",
        card: "0 8px 30px rgba(22, 26, 43, 0.08)",
        lifted: "0 20px 50px rgba(22, 26, 43, 0.16)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--rot, 0deg))" },
          "50%": { transform: "translateY(-10px) rotate(var(--rot, 0deg))" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
