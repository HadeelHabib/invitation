/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF5F8',
          100: '#FFE4EC',
          200: '#FFD0DE',
          300: '#FFB6C1',
          400: '#FF84A3',
          500: '#FF4081',
          600: '#EC266B',
          700: '#D6336C',
          800: '#B01F58',
          900: '#820E3F',
        },
        rose: {
          50: '#FFF5F8',
          100: '#FFE4EC',
          200: '#FFD0DE',
          300: '#FFB6C1',
          400: '#FF84A3',
          500: '#FF4081',
          600: '#EC266B',
          700: '#D6336C',
          800: '#B01F58',
          900: '#820E3F',
        },
        cream: {
          50: '#FFF5F8',
          100: '#FEEBF0',
          200: '#FAD5DF',
          300: '#F5BCC9',
        },
        ink: {
          dark: '#3A1524',
          mid: '#5B2538',
          soft: '#824258',
          muted: '#A57084',
        },
        wax: {
          red: '#D6336C',
          deep: '#B01F58',
          light: '#FF4081',
        },
      },
      fontFamily: {
        aref: ['"Aref Ruqaa"', 'serif'],
        ibm: ['"IBM Plex Sans Arabic"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      borderRadius: {
        pill: '50px',
      },
      boxShadow: {
        'gold': '0 8px 30px rgba(214, 51, 108, 0.25)',
        'gold-lg': '0 15px 50px rgba(214, 51, 108, 0.35)',
        'seal': '0 6px 18px rgba(176, 31, 88, 0.5), inset 0 -2px 6px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.15)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px) translateX(10px)', opacity: '0.85' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.7', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(-4px)' },
        },
        crackSeal: {
          '0%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
          '60%': { transform: 'rotate(-8deg) scale(1.08)', opacity: '1' },
          '100%': { transform: 'rotate(25deg) scale(0.6) translateY(-80px)', opacity: '0' },
        },
        flapTop: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(-170deg)' },
        },
        flip: {
          '0%': { transform: 'perspective(200px) rotateX(0)' },
          '50%': { transform: 'perspective(200px) rotateX(90deg)' },
          '100%': { transform: 'perspective(200px) rotateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'crack': 'crackSeal 1.1s ease-in forwards',
        'shimmer': 'shimmer 3s linear infinite',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFB6C1 0%, #FF4081 45%, #D6336C 80%, #B01F58 100%)',
        'gold-soft': 'linear-gradient(135deg, #FFD0DE 0%, #FFB6C1 55%, #FF84A3 100%)',
        'wax': 'radial-gradient(circle at 30% 30%, #FF4081 0%, #D6336C 55%, #B01F58 100%)',
        'cream-paper': 'radial-gradient(ellipse at top, #FFF5F8 0%, #FEEBF0 50%, #FAD5DF 100%)',
      },
    },
  },
  plugins: [],
}
