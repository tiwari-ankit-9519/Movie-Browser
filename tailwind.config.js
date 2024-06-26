/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#1C0F13",
        buttonBg: "#001F54",
        buttonBg2: "#034078",
        hoverBg: "#35A7FF",
        card: "#2E294E",
        watch: "#0067fe",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
