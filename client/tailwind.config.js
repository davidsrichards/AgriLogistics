/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#23c24d",
        secondary: "#FFECA1",
        gold: "#edecda",
      },
    },
  },
  plugins: [],
};
