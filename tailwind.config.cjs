/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'rgb(226 232 240)',
        input: 'rgb(226 232 240)',
        ring: 'rgb(79 70 229)',
        background: 'rgb(255 255 255)',
        foreground: 'rgb(15 23 42)',
        primary: {
          DEFAULT: 'rgb(79 70 229)',
          foreground: 'rgb(248 250 252)',
        },
        secondary: {
          DEFAULT: 'rgb(241 245 249)',
          foreground: 'rgb(51 65 85)',
        },
        destructive: {
          DEFAULT: 'rgb(239 68 68)',
          foreground: 'rgb(248 250 252)',
        },
        muted: {
          DEFAULT: 'rgb(248 250 252)',
          foreground: 'rgb(100 116 139)',
        },
        accent: {
          DEFAULT: 'rgb(236 72 153)',
          foreground: 'rgb(248 250 252)',
        },
        popover: {
          DEFAULT: 'rgb(255 255 255)',
          foreground: 'rgb(15 23 42)',
        },
        card: {
          DEFAULT: 'rgb(255 255 255)',
          foreground: 'rgb(15 23 42)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}