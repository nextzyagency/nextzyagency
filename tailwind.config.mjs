/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        nextzy: {
          black: '#0A0A0A',
          'gray-900': '#111111',
          'gray-800': '#1A1A1A',
          'gray-700': '#2A2A2A',
          'gray-500': '#6B6B6B',
          'gray-300': '#CFCFCF',
          white: '#FFFFFF',
          'purple-dark': '#5B21B6',
          purple: '#7C3AED',
          'purple-light': '#A78BFA',
        }
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        drama: ['"Instrument Serif"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      }
    },
  },
  plugins: [],
}
