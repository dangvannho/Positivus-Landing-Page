/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "lime-green": "#B9FF66",
        "dark-gray": "#191A23",
        "light-gray": "#F3F3F3",
        "spanish-gray": "#898989",
        "dark-gunmetal": "#292A32",
      },
      screens: {
        tablet: "640px",
        laptop: "1438px",
        desktop: "1560px",
      },
    },
  },
  plugins: [],
};
