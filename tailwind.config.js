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
        "pure-black": "#000000",
        white: "#FFFFFF",
        ["dark-gray"]: "#333136",
        ["light-gray"]: "#F1F3F5",
        "light-gray-2": "#FDF3F0",
      },
      spacing: {
        "4.5": "1.125rem",
        "20": "5rem",
        "24": "6rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "62.5": "15.625rem",
        "211": "52.75rem",
        ["nav-logo"]: "12.625rem",
      },
      backgroundImage: {
        "contact-card-pattern": "url('/designo-website/shared/desktop/bg-pattern-call-to-action.svg')",
        "home-hero-pattern": "url('/designo-website/assets/home/desktop/bg-pattern-hero-home.svg')",
        "sm-web-design": "url('/designo-website/assets/home/mobile/image-web-design.jpg')",
        "sm-graphic-design": "url('/designo-website/assets/home/mobile/image-graphic-design.jpg')",
        "sm-app-design": "url('/designo-website/assets/home/mobile/image-app-design.jpg')",
        "home-circle-pattern": "url('/designo-website/shared/desktop/bg-pattern-small-circle.svg')",
        "design-page-hero-pattern": "url('/designo-website/shared/mobile/bg-pattern-design-pages-intro-mobile.svg')",
        "sm-about-hero-pattern": "url('/designo-website/assets/about/mobile/bg-pattern-hero-about-mobile.svg')",
      },
      backgroundPosition: {
        "contact-card": "46% 52%",
        "sm-about-hero-pos": "101% -73%",
      },
      letterSpacing: {
        "super-wide": "0.313rem",
      },
      scale: {
        "160": "1.60",
      },
      fontSize: {
        "15": "0.938rem",
      },
    },
  },
  plugins: [],
}