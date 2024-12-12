/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily": {
        "comic": ['"Comic Neue"']
      },
      backgroundImage : {
        'body-background': "url('/src/assets/images/background.gif')"
      }
    },
  },
  plugins: [],
}
