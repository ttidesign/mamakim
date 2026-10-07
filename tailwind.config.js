/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#006480',
          dark: '#013d4e',
          mid: '#2d7d9a',
          fixed: '#bce9ff',
          'fixed-dim': '#87d0f0',
        },
        peach: {
          DEFAULT: '#fed9b8',
          light: 'rgba(254,217,184,0.18)',
          border: 'rgba(254,217,184,0.45)',
        },
        sage: {
          DEFAULT: '#3f6355',
          mid: '#587c6d',
          light: '#c4ebd9',
          soft: 'rgba(63,99,85,0.08)',
          border: 'rgba(63,99,85,0.2)',
        },
        surface: {
          DEFAULT: '#f9f9f9',
          low: '#f3f3f3',
          white: '#ffffff',
          high: '#e8e8e8',
        },
        ink: { DEFAULT: '#1a1c1c', muted: '#3f484d', faint: '#6f787d' },
        border: '#bfc8cd',
        err: {
          DEFAULT: '#ba1a1a',
          light: 'rgba(186,26,26,0.06)',
          border: 'rgba(186,26,26,0.14)',
        },
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      maxWidth: { container: '1200px', narrative: '760px' },
      boxShadow: {
        teal: '0 2px 12px rgba(45,125,154,0.08)',
        'teal-md': '0 4px 20px rgba(45,125,154,0.14)',
        'teal-lg': '0 8px 32px rgba(45,125,154,0.18)',
      },
    },
  },
  plugins: [],
};
