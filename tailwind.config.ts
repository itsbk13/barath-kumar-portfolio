import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        jet: "#0a0a0a",
        orange: "#FF8000",
        offwhite: "#F5F5F0",
        dark2: "#111111",
        dark3: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
export default config;
