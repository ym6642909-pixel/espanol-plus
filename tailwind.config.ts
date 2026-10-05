import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        },

        spanish: {
          red: "#c60b1e",
          yellow: "#ffc400"
        }
      },

      fontFamily: {
        sans: [
          "var(--font-cairo)",
          "Arial",
          "sans-serif"
        ]
      },

      boxShadow: {
        soft: "0 10px 35px rgba(0, 0, 0, 0.08)",
        card: "0 4px 20px rgba(0, 0, 0, 0.06)"
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem"
      },

      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 3s ease-in-out infinite"
      },

      keyframes: {
        fadeIn: {
          from: {
            opacity: "0"
          },
          to: {
            opacity: "1"
          }
        },

        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(20px)"
          },
          to: {
            opacity: "1",
            transform: "translateY(0)"
          }
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-8px)"
          }
        }
      }
    }
  },

  plugins: []
};

export default config;
