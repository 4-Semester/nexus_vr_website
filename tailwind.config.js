
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        "primary": "#6750A4",
        "secondary": "#625B71",
        "on-secondary": "#FFFFFF",
        "on-primary": "#FFFFFF",
        "primary-container": "#EADDFF",
        "error": "#B3261E",
        "sidebar":"#F7F2FA",
      },
    ],
  },
}