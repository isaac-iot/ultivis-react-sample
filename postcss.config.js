export default {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: { config: "./library/tailwind.config.js" },
    autoprefixer: {},
  },
};
