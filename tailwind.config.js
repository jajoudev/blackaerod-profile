/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Neue"'],
      },
      backgroundImage: {
        "body-background": "url('/src/assets/images/background.gif')",
      },
      // animation: {
      //   fade: "fadeOut 5s ease-in-out",
      // },

      // keyframes: theme => ({
      //   fadeOut: {
      //     '0%': { backgroundColor: theme("colors.red.300") },
      //     '100%': { backgroundColor: theme("colors.transparent") },
      //   },
      // }),
    },
  },
  plugins: [],
};
