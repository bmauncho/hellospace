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
      spacing: {
        "104": "26rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
        "136": "34rem",
        "144": "36rem",
        "152": "38rem",
        "156": "39rem",
      },
    },
    screens: {
      "custom-380": "380px",

      "custom-430": "430px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "custom-740": "740px",
      // => @media (min-width: 740px) { ... }
      "custom-854": "854px",
      // => @media (min-width: 932px) { ... }
      "custom-915": "915px",
      // => @media (min-width: 915px) { ... }

      "custom-932": "932px",
      // => @media (min-width: 932px) { ... }
    },
    zIndex: {
      "75": "75",
      "100": "100",
      "125": "125",
      "150": "150",
    },
  },
  plugins: [],
};
export default config;
