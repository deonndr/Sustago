tailwind.config = {
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#001B50',
          900: '#001B50',
          800: '#1a3460',
          700: '#1e4080',
          600: '#6282ED',
          500: '#6282ED',
          400: '#4a90d9',
          300: '#7ab3e8',
          200: '#C3E8FF',
          100: '#E0F2FE',
          50:  '#f0f7ff',
        },
        accent: {
          600: '#94A3B8',
          500: '#f59e0b',
          400: '#fbbf24',
        },
        eco: {
          600: '#16a34a',
          500: '#22c55e',
          100: '#dcfce7',
        },
        label: '#1a3460'
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
