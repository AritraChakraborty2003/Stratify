export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkwhite: "#f4f1ee",
      darkblue: "#1F75FE",
      lightpeach: "#fbc4ab",
      peach: "#f08080",
      mustardyellow: "#FFC300",
      black: "#000000",
      white: "#FFFFFF",
      blue: "#1fb6ff",
      lightblue: "#3880F7",
      blue1: "#00B4D8",
      red: "#FF0000",
      brown: "#c4793c",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",

      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "750px",
        // => @media (min-width: 768px) { ... }

        lg: "1279px",
        // => @media (min-width: 1024px) { ... }

        xl: "1400px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1700px",
        // => @media (min-width: 1536px) { ... }
        ol: "2048px",
      },
    },
    fontFamily: {
      oxygen: ["Oxygen"],
      roboto: ["Roboto"],
    },
  },
  plugins: [],
};
