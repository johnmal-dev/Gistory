/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('./assets/carbon_fibre.webp')",
      },
      maxWidth: {
        120: '120rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
