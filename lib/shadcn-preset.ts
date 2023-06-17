import type { Config } from "tailwindcss";
import { shadcnPlugin } from "./shadcn-plugin";

const shadCnPreset = {
  darkMode: ["class"],
  content: [],
  plugins: [shadcnPlugin, require("tailwindcss-animate")],
} satisfies Config;

export default shadCnPreset;
