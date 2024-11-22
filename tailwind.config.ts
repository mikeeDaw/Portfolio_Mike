import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        spaceBg: {
          main: "#0c0d15",
        },
        scheme: {
          green: "#5ee18b",
        },
        tone: {
          1: "#ffffff",
          2: "#eaebf4",
          3: "#d3d4e5",
          4: "#b6b7ce",
          5: "#999ab5",
          6: "#7d7f9c",
          7: "#616380",
          8: "#474964",
          9: "#2f3146",
          10: "#181927",
        },
      },
      fontFamily: {
        poppins: "var(--poppins)",
        hind: "var(--hind)",
        raleway: "var(--raleway)",
        grotesk: "var(--grotesk)",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
      },
      dropShadow: {
        CutUp: "0px -6px 16px #191919",
        CutMid: "0px 0px 16px #191919",
        CutDown: "0px 8px 16px #191919",
      },
      backgroundImage: {
        "conic-spotlight":
          "conic-gradient(from 34deg, #555555, #a1a1a1 10deg, #efeded 30deg, #a1a1a1 50deg, #555555 70deg, #555555)",
        spotlight: "radial-gradient(#061e53 0%, transparent 65%)",
      },
      boxShadow: {
        shootStar: "0 0 10px 2px #6f6f6f, 0 0 9px 1px #c1c1c1",
        tlItem: "0 0 0 5px #0c0d15, 0 0 0 6px #ffffff, 0 0 0 10px #0c0d15",
        tlItemSel: "0 0 0 5px #0c0d15, 0 0 0 6px #53e48f, 0 0 0 10px #0c0d15",
      },
      animation: {
        infScroll: "scrollbelt 15s linear infinite",
        infScrollRev: "techBelt 25s linear infinite",
      },
      keyframes: {
        scrollbelt: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        techBelt: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({}),
        addComponents({
          ".container": {
            "@apply max-w-[65rem] xl:max-w-[75rem] mx-auto px-5 md:px-10 lg:px-14":
              {},
          },
        }),
        addUtilities({});
    }),
  ],
};
export default config;
