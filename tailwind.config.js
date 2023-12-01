/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
  theme: {
    fontFamily : {
        'jost' : ['Jost', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}