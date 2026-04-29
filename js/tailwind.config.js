tailwind.config = {
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#0a1628',
          900: '#0f2044',
          800: '#1a3460',
          700: '#1e4080',
          600: '#1e56a0',
          500: '#2271c3',
          400: '#4a90d9',
          300: '#7ab3e8',
          200: '#b3d4f5',
          100: '#deeeff',
          50:  '#f0f7ff',
        },
        accent: {
          500: '#f59e0b',
          400: '#fbbf24',
        },
        eco: {
          600: '#16a34a',
          500: '#22c55e',
          100: '#dcfce7',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(10,22,40,0.85) 0%, rgba(30,64,128,0.65) 50%, rgba(10,22,40,0.4) 100%)',
      }
    }
  }
}
