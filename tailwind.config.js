/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette pulled from the RB Foundation logo
        gold: {
          DEFAULT: '#C9A84C',
          soft: '#E2C977',
          deep: '#A6852F',
        },
        forest: {
          DEFAULT: '#4A7C59',
          soft: '#6FA17C',
          deep: '#33583F',
        },
        sunrise: {
          DEFAULT: '#E8843A',
          soft: '#F2A86A',
          deep: '#C96924',
        },
        ink: '#21323D', // deep slate-navy from the wordmark
        cream: '#FBF6EB', // warm paper canvas
        sand: '#F3EAD7',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(33, 50, 61, 0.35)',
        lift: '0 12px 30px -12px rgba(33, 50, 61, 0.28)',
        glow: '0 18px 50px -18px rgba(232, 132, 58, 0.55)',
      },
      borderRadius: {
        '4xl': '2.25rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 1.2s ease both',
        'spin-slow': 'spin-slow 90s linear infinite',
      },
    },
  },
  plugins: [],
}
