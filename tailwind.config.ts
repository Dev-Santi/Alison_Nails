import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#121212",
      white: "#f1f1f1",
      aquamarine: "#29f3e2",
      violet: { normal: "#2e266d", light: "#603f8b" },
      pink: { normal: "#a359a0", light: "#d8b5d7" },
    },
  },
};
export default config;
