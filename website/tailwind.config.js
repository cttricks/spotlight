/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f9f9f9',
          100: '#ededed',
          200: '#e5e5e5',
          300: '#cccccc',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#262626',
          800: '#171717',
          900: '#111111',
          950: '#0a0a0a',
          1000: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'monospace']
      }
    },
  },
  plugins: [],
}
