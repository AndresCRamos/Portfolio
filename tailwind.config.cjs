const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#E5F8FF',
          100: '#B3E5FF',
          200: '#81D1FF',
          300: '#4FBDFE',
          400: '#1DA9FE',
          500: '#0080C3',
          600: '#005A88',
          700: '#00344D',
          800: '#000E12',
          900: '#000000'
        },
        secondary: '#c084fc',
        accent: '#2dd4bf',
        neutral: '#2a323c',
        'base-100': '#1d232a',
        info: '#3abff8',
        success: '#36d399',
        warning: '#fbbd23',
        error: '#f87272'
      }
    }
  }
};

module.exports = config;
