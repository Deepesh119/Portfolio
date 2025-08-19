/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            black:"#000"
        },
        fontSize:{
            sm:"14px",
            md:"16px",
            lg:"18px",
            xl:"20px"
        }
    },
  },
  plugins: [],
};
