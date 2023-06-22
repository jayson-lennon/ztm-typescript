/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/index.html", ".demo/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
  ],
};
