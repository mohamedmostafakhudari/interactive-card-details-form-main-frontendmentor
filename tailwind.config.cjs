/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "hsl(249, 99%, 64%)",
        primary2: "hsl(278, 94%, 30%)",
        error: "hsl(0, 100%, 66%)",
        white: "hsl(0, 0%, 100%)",
        "grayViolet-200": "hsl(270, 3%, 87%)",
        "grayViolet-800": "hsl(279, 6%, 55%)",
        "grayViolet-900": "hsl(278, 68%, 11%)",
      },
      fontSize: {
        primary: "18px",
      },
      backgroundImage: {
        "desktop-hero": "url('/assets/images/bg-main-desktop.png')",
        "mobile-hero": "url('/assets/images/bg-main-mobile.png')",
        "card-front": "url('/assets/images/bg-card-front.png')",
        "card-back": "url('/assets/images/bg-card-back.png')",
      },
    },
  },
  plugins: [],
};
