/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'steel-navy': '#1F3C5B',
        'sky-cyan': '#00CFFF',
        'arctic-white': '#F7FAFC',
        'frost-gray': '#DCE4F0',
        'charcoal-gray': '#333333',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'pyramid-stack': 'pyramidStack 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.8s ease-in-out',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 207, 255, 0.3)',
        'glow-cyan-hover': '0 0 30px rgba(0, 207, 255, 0.5)',
      },
    },
  },
  plugins: [],
};
