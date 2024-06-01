import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h0: "62px",
        h1: ["54px", "68px"],
        h2: ["36px", "48px"],
        h3: ["24px", "28px"],
        list: "20px",
        p: ["16px", "24px"],
        label: ["14px", "20px"],
      },
    },
  },
  plugins: [],
};
export default config;
