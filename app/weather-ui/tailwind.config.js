/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,njk,html}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
