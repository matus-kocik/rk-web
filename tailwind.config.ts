import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/sections/HeroSection/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/sections/AboutSection/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/sections/MottoSection/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/sections/FocusAreasSection/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/sections/ContactSection/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/sections/ContactForm/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['"UnifrakturCook"', 'serif'],
      },
      colors: {
        wine: "#4e3d3d",
        parchment: "#f5f0e1",
      },
    },
  },
  plugins: [],
};

export default config;