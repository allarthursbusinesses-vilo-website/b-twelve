/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bt: {
          cream: '#FDFBF7',
          white: '#FFFFFF',
          gold: '#D4AF37',
          'gold-soft': '#E5C992',
          charcoal: '#1A1A1A',
          glass: 'rgba(255, 255, 255, 0.7)',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      animation: {
        'smooth-scroll': 'smoothScroll 60s linear infinite',
      },
      keyframes: {
        smoothScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
