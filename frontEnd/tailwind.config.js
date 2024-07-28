/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'about': "url('/src/assets/img/banner2.jpg')",
        'contact': "url('/src/assets/img/contact1.jpg')",
      },
    },
  },
  plugins: [],
}