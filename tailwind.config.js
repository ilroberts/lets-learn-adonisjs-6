import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/views/pages/**/*.edge'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
}
