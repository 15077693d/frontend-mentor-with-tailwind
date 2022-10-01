/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'ex1-cartIcon': "url('/images/projects/ex1/image-product-desktop.jpg')",
        'ex1-product-desktop':
          "url('/images/projects/ex1/image-product-desktop.jpg')",
        'ex1-product-mobile':
          "url('/images/projects/ex1/image-product-mobile.jpg')",
      },
      fontFamily: {
        Fraunces: ['Fraunces', ...fontFamily.sans],
        Montserrat: ['Montserrat', ...fontFamily.sans],
        primary: ['Inter', ...fontFamily.sans],
        Outfit: ['Outfit', ...fontFamily.sans],
      },
      colors: {
        ex2: {
          blue: '#2C7DFA',
          blueShaded: '#3685FF',
          darkNavy: '#1F314F',
          grey: '#7D889E',
          lightGrey: '#D5E1EF',
          white: '#FFFFFF',
        },
        ex1: {
          white: '#FFFFFF',
          cream: '#F2EAE2',
          aurometalSaurus: '#6C7289',
          deepAquamarine: '#3D8168',
          hoveredDeepAquamarine: '#1A4032',
          gunmetal: '#1C232B',
        },
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
