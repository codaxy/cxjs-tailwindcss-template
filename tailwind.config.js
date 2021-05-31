const colors = require('tailwindcss/colors');

module.exports = {
   mode: 'jit',
   purge: ['./app/**/*.{html,js,tsx}', './common/**/*.{html,js,tsx}'],
   theme: {
      extend: {
         colors: {
            ...colors,
            gray: colors.coolGray,
         },
      },
   },
   plugins: [],
};
