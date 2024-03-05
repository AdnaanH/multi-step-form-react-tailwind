/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
],
  theme: {
    extend: {
      colors: {
        'FmarineBlue': '#02295a',
        'FpurplishBlue': '#473dff',
        'FpastelBlue': '#adbeff',
        'FlightBlue': '#bfe2fd',
        'FstrawberryRed': '#ed3548',
        'FcoolGray': '#9699ab',
        'FlightGray': '#d6d9e6',
        'Fmagnolia': '#f0f6ff',
        'Falabaster': '#fafbff',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}