import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BC9471',
          dark: '#623E2A',
        },
        beige: {
          light: '#F5E6D3',
          DEFAULT: '#E2D1BE',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        serif: ['Playfair Display', 'serif'], // We'll add this elegant serif font
      },
    },
  },
  plugins: [],
} satisfies Config;
