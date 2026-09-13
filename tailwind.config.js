/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FDFBF7',
          100: '#FAF6EE',
          200: '#F5EDD9',
          300: '#EDE0C4',
        },
        charcoal: {
          900: '#1A1814',
          800: '#252219',
          700: '#332F24',
          600: '#4A4538',
        },
        gold: {
          300: '#E8C97A',
          400: '#D4A843',
          500: '#BF8C20',
          600: '#9A6E10',
        },
        mist: {
          400: '#8E8880',
          500: '#6B6560',
          600: '#4E4A45',
        },
      },
      fontFamily: {
        serif:   ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.75s ease both',
        'fade-in': 'fadeIn 0.75s ease both',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
