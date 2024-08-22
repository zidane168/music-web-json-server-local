import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  mode: "jit",
  theme: {
    container: {
      padding: {
        default: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1310px',
    },
    extend: {
      backgroundImage: {
        singerOverlay: 'url(/assets/hero/singer-overlay.png)',
        newsletter: 'url(/assets/newsletter/bg.png)'
      },
      fontFamily: {
        alexBrush: ['var(--font-alexBrush)', 'sans-serif'], 
        montserrat: ['var(--font-montserrat)', 'sans-serif'], 
      },
      colors: {
        primary: '#9932CC',
        secondary: '#151538',
        tertiary: '#242445',
        accent: {
          default: '#7f1cfc',
          hover: '#6519c6',
        }
      },
    },
  },
  darkMode: "class",
  plugins: [  require('tailwind-scrollbar')  ],
}
