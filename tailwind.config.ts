import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark1: "#020617", // slate-950
        dark2: "#0f172a", // slate-900
        dark3: "#1e293b", // slate-800
        dark4: "#334155", // slate-700
        dark5: "#475569", // slate-600
        dark6: "#64748b", // slate-500
        light1: "#cbd5e1", // slate-400
        light2: "#e2e8f0", // slate-300
        light3: "#e2e8f0", // slate-200
        light4: "#f1f5f9", // slate-100
        light5: "#f8fafc", // slate-50
        light6: "#ffffff", // white
      },
    },
  },
  plugins: [],
};
export default config;
