const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    flowbite.content()
    
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary':'#282828 ',
        'dark-primary40':'#1a1b1b'
      }
    },
  },
  plugins: [
    flowbite.content()
  ],
};
