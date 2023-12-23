/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        moderateCyan: 'hsl(var(--Moderate-cyan))',
        darkCyan: 'hsl(var(--Dark-cyan))',
        black: 'hsl(var(--Black))',
        darkGray: 'hsl(var(--Dark-gray))',
        moderateCyanAplha: 'hsl(var(--Moderate-cyan)/0.7)',
        darkGrayAlpha: 'hsl(var(--Dark-gray)/0.7)'


      }
    },
  },
  plugins: [],
}
