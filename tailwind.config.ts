import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
    },
  },
  plugins: [],
};
export default config;
