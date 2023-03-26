/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#9effbe",
      
"secondary": "#d6608d",
      
"accent": "#c4ddfc",
      
"neutral": "#1E1622",
      
"base-100": "#F5F4F6",
      
"info": "#8AA1F5",
      
"success": "#16BBAB",
      
"warning": "#8C570D",
      
"error": "#ED2630",
      },
    },
  ],
  plugins: [
    require('daisyui'),
  ],
}
