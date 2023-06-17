import type { Config } from "tailwindcss";
import shadCnPreset from "./lib/shadcn-preset";
const config = {
  presets: [shadCnPreset],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config;

export default config;
