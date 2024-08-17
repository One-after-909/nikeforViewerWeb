const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  /*darkMode: ['selector', '[data-mode="dark"]'],*/
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        p1: '#0B2631',
        p2: '#18445D',
        p3: '#1F7799',
        p4: '#04C4D9',
        p5: '#79E6F2'
      }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}