/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,jsx}',
    "./src/components/**/*.{html,jsx}"
  ],
  theme: {
    extend: {
      animation:{
        slideDown: 'slide-down 0.3s ease-out forward',
      },
      keyframes:{
        'slide-down':{
          '0%':{opacity:'0', tranform:'translateY(-3rem)'},
          '100%': {opacity:'1', tranform:'translateY()'}
        }
      }
    },
  },
  plugins: [],
}

