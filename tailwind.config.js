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
        "15": "3.75rem",
        "18": "4.5rem",
        "20": "5rem",
        "24": "6rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "50.5": "12.625rem",
        "62.5": "15.625rem",
        "80": "20rem",
        "84": "21rem",
        "143": "35.75rem",
        "151": "37.75rem",
        "211": "52.75rem",
        ["nav-logo"]: "12.625rem",
      },
      backgroundImage: {
        "contact-card-pattern": "url('/designo-website/shared/desktop/bg-pattern-call-to-action.svg')",
        "home-hero-pattern": "url('/designo-website/assets/home/desktop/bg-pattern-hero-home.svg')",
        "sm-web-design": "url('/designo-website/assets/home/mobile/image-web-design.jpg')",
        "sm-graphic-design": "url('/designo-website/assets/home/mobile/image-graphic-design.jpg')",
        "sm-app-design": "url('/designo-website/assets/home/mobile/image-app-design.jpg')",
        "md-web-design": "url('/designo-website/assets/home/tablet/image-web-design.jpg')",
        "md-graphic-design": "url('/designo-website/assets/home/tablet/image-graphic-design.jpg')",
        "md-app-design": "url('/designo-website/assets/home/tablet/image-app-design.jpg')",
        "home-circle-pattern": "url('/designo-website/shared/desktop/bg-pattern-small-circle.svg')",
        "design-page-hero-pattern": "url('/designo-website/shared/mobile/bg-pattern-design-pages-intro-mobile.svg')",
        "md-design-page-hero-pattern": "url('/designo-website/shared/tablet/bg-pattern-design-pages-intro-tablet.svg')",
        "sm-about-hero-pattern": "url('/designo-website/assets/about/mobile/bg-pattern-hero-about-mobile.svg')",
        "md-about-hero-pattern": "url('/designo-website/assets/about/desktop/bg-pattern-hero-about-desktop.svg')",
        "three-circles": "url('/designo-website/shared/desktop/bg-pattern-three-circles.svg')",
        "sm-contact-hero-pattern": "url('/designo-website/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg')",
      },
      backgroundPosition: {
        "footer-contact-card-pos": "46% 52%",
        "md-footer-contact-card-pos": "35% 52%",
        "contact-card-pos": "19% 0%",
        "sm-about-hero-pos": "101% -73%",
        "md-home-hero-pos": "400% 59%",
        "md-about-hero-pos": "-250% 700%",
      },
      letterSpacing: {
        "super-wide": "0.313rem",
        "2px": "0.125rem",
      },
      scale: {
        "160": "1.60",
      },
      fontSize: {
        "10": "2.5rem",
        "15px": "0.938rem",
      },
      minWidth: {
        "37.5": "9.375rem",
      },
      minHeight: {
        "tablet-nav": "9.688rem",
      },
      borderWidth: {
        "3": "3px",
      },
    },
  },
  variants: {
    extend: {
      placeholder: ["responsive", "focus", "hover", "active"],
    },
  },
  plugins: [],
}