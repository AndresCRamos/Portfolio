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
        //theme created in https://daisyui.com/theme-generator/
        // gradients created in https://uicolors.app/create
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e6fe',
          300: '#7cd3fd',
          400: '#36bdfa',
          500: '#0ca5eb',
          600: '#0080c3',
          700: '#0168a3',
          800: '#065986',
          900: '#0b4a6f',
          950: '#072f4a'
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#ead5ff',
          300: '#d9b4fe',
          400: '#c084fc',
          500: '#a655f7',
          600: '#8e33ea',
          700: '#7822ce',
          800: '#6421a8',
          900: '#511c87',
          950: '#350764'
        },
        accent: {
          50: '#f0fdfb',
          100: '#ccfbf5',
          200: '#99f6ea',
          300: '#5eead8',
          400: '#2dd4bf',
          500: '#14b8a3',
          600: '#0d9483',
          700: '#0f7669',
          800: '#115e54',
          900: '#134e47',
          950: '#042f2a'
        },
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
