import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      fontFamily: {
        openSans: ["var(--font-open-sans)"],
        lato: ["var(--font-lato)"],
        sarabun: ["var(--font-sarabun)"],
      },
      screens: {
        "2sm": "481px",
        "max-2sm": { raw: "(max-width: 480px)" },
        "2smh": { raw: "(max-height: 600px)" },
        smh: { raw: "(max-height: 680px)" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "max-sm": { raw: "(max-width: 640px)" },
        "max-md": { raw: "(max-width: 768px)" },
        "max-lg": { raw: "(max-width: 1024px)" },
        "max-xl": { raw: "(max-width: 1280px)" },
        "max-2xl": { raw: "(max-width: 1536px)" },
      },
      colors: {
        rev: {
          preto: {
            "100": "rgb(var(--rev-preto))",
          },
          cinza: {
            "80": "rgb(var(--rev-cinza-acessibility-tools))",
            "100": "rgb(var(--rev-cinza-claro))",
            "200": "rgb(var(--rev-cinza-escuro))",
            "300": "rgb(var(--rev-cinza-muito-escuro))",
          },

          brand: {
            "100": "rgb(var(--rev-brand-100))",
            "200": "rgb(var(--rev-brand-200))",
            "300": "rgb(var(--rev-brand-300))",
            "400": "rgb(var(--rev-brand-400))",

            text: {
              "100": "rgb(var(--rev-brand-text-100))",
              "200": "rgb(var(--rev-brand-text-200))",
              "300": "rgb(var(--rev-brand-text-300))",
              "400": "rgb(var(--rev-brand-text-400))",
            },
          },

          tipo: {
            acessibilidade: "rgb(var(--rev-categoria-acessibilidade))",
            cultura: "rgb(var(--rev-categoria-cultura))",
            eventos: "rgb(var(--rev-categoria-eventos))",
            esportes: "rgb(var(--rev-categoria-esportes))",
            entrevista: "rgb(var(--rev-categoria-entrevista))",
            politica: "rgb(var(--rev-categoria-justica-politica))",
            tecnologias: "rgb(var(--rev-categoria-tecnologias))",
            saude: "rgb(var(--rev-categoria-saude))",
            testdrive: "rgb(var(--rev-categoria-test-drive))",
            internacional: "rgb(var(--rev-categoria-internacional))",
            trabalho: "rgb(var(--rev-categoria-trabalho))",
            especial: "rgb(var(--rev-categoria-especial))",
          },

          branco: {
            "100": "rgb(var(--rev-branco))",
          },

          cards: {
            branco: {
              "100": "rgb(var(--rev-branco-card))",
            },
          },

          status: {
            incorreto: "rgb(var(--rev-status-incorreto))",
            confirmacao: "rgb(var(--rev-status-confirmacao))",
          },
          "revista-background": "rgb(var(--rev-revista-background))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "edition-banenr": "url('/edicoes/capa.png')",
        "selected-banner":
          "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80')",
      },
      animation: {
        scroll: "scroll 40s linear infinite",
      },

      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 14))" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(var(--rev-azul-principal))  ",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(var(--rev-azul-principal))",
            borderRadius: "20px",
            border: "1px solid white",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
