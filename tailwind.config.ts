import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      // extend: {
        colors: {
          "gray-white": "#fff",
          "gray-400": "#ced4da",
          black: "#000",
          dimgray: "#4c4a4f",
          hitbox: "rgba(255, 255, 255, 0)",
          "primary-color-blue": "#04b4fc",
        },
        spacing: {},
        fontFamily: {
          poppins: "Poppins",
        // },
      },
      fontSize: {
        base: "16px",
        inherit: "inherit",
      },
      screens: {
        mq1050: {
          raw: "screen and (max-width: 1050px)",
        },
        mq1000: {
          raw: "screen and (max-width: 1000px)",
        },
        mq725: {
          raw: "screen and (max-width: 725px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    // },
    corePlugins: {
      preflight: false,
    },
    },
  },
  plugins: [],
};
export default config;
