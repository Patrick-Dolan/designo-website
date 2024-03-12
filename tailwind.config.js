/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E7816B",
        secondary: "#FFAD9B",
        black: "#1D1C1E",
        white: "#FFFFFF",
        ["dark-gray"]: "#333136",
        ["light-gray"]: "#F1F3F5",
      },
      spacing: {
        "4.5": "1.125rem",
        "24": "6rem",
        "30": "7.5rem",
        ["nav-logo"]: "12.625rem",
      },
      backgroundImage: {
        "contact-card-pattern": "url('/designo-website/shared/desktop/bg-pattern-call-to-action.svg')",
      },
      backgroundPosition: {
        "contact-card": "46% 52%",
      },
    },
  },
  plugins: [],
}