/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1B1F24",

          secondary: "#2D3540",

          accent: "#00C49A",

          neutral: "#B8B8B8",

          "base-100": "#EBE5EB",

          info: "#88AEE2",

          success: "#2DD7C0",

          warning: "#BA7103",

          error: "#ED6F5E",
        },
      },
    ],
  },
};
