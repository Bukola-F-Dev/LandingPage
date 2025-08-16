/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
          pacifico: ['Pacifico', 'cursive'],  
        },
        screens: {
          ipad: { min: '768px', max: '1024px' },  
        },
      },
    },
    plugins: [],
  };

 