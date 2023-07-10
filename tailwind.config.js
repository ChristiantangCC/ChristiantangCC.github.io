module.exports = {
  content: [
    "index.html",
    "base.css"
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      mdc: "992px",

      lg: "1008px",
      // => @media (min-width: 1024px) { ... }

      xl: "1140px",
      // => @media (min-width: 1280px) { ... }

      "xl+": "1440px",

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};