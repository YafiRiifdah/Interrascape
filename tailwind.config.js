/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#f5f3ee',
        olive: '#314133',
        teal: '#346f7a',
        ink: '#171717',
        mist: '#e8e4da',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        panel: '0 18px 40px rgba(34, 46, 37, 0.08)',
      },
      borderRadius: {
        editorial: '30px',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        reveal: 'reveal 0.8s ease-out both',
      },
    },
  },
  plugins: [],
}
