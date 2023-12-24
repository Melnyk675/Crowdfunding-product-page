/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
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
