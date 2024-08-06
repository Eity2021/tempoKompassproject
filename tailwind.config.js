/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        Kompass: {
          primary: "#12a9b2",
          secondary: "#149999",
          accent: "#3A4256",
          neutral: "#647393",
          "base-100": "#ffffff",
          info: "#0C1E21",
          success: "#3A4256",
        },
      },
    ],
  },
  
  plugins: [require("daisyui")],
}

