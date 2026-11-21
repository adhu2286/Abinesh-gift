/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#142B4A',
          light: '#1E3F66',
          deep: '#0D1C30',
          muted: '#385170',
        },
        ice: {
          DEFAULT: '#DCEEFF',
          light: '#F0F7FF',
          soft: '#E6F2FF',
          border: '#C8E2FA',
        },
        softgray: {
          DEFAULT: '#E8EAED',
          light: '#F4F6F8',
          dark: '#D0D4DC',
        },
        // Mapped for complete aesthetic harmony
        pastel: {
          lavender: '#DCEEFF', // Light Blue
          purple: '#1E3F66',   // Navy Accent
          pink: '#DCEEFF',     // Light Blue Accent
          blue: '#DCEEFF',     // Light Blue
          peach: '#E8EAED',    // Soft Gray
          ivory: '#FFFFFF',    // White
          deep: '#142B4A',     // Navy Blue
          dark: '#142B4A',     // Navy Blue
          glow: '#DCEEFF',     // Light Blue Glow
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.97)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'blue-soft': '0 10px 30px -10px rgba(20, 43, 74, 0.12)',
        'blue-glow': '0 0 25px 5px rgba(220, 238, 255, 0.8)',
        'pastel-soft': '0 10px 30px -10px rgba(20, 43, 74, 0.12)',
        'pastel-glow': '0 0 25px 5px rgba(220, 238, 255, 0.8)',
        'glass': '0 8px 32px 0 rgba(20, 43, 74, 0.05)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.8)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
