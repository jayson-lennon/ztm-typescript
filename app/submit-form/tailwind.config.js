/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,njk,html}"],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          // ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "rgb(56, 189, 248)",
        },
      },
    ],
  },
};
