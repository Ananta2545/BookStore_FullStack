/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        accent: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        }
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'custom-2': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'custom-3': '0 2px 10px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 40px rgba(34, 197, 94, 0.15)',
      },
      backgroundImage: {
        'home-hero-1': "url('assets/images/home-hero-bg-1.jpg')",
        'home-hero-2': "url('assets/images/home-hero-bg-2.jpg')",
        'home-hero-3': "url('assets/images/home-hero-bg-3.jpg')",
        'home-hero-4': "url('assets/images/home-hero-bg-4.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0%)', opacity: 1} 
        },
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'open-menu': 'open-menu 0.3s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite'
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}