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
        terra:  { DEFAULT: '#c0390a', 2: '#e04b18', dim: 'rgba(192,57,10,0.10)' },
        gold:   { DEFAULT: '#c47b0a', 2: '#e89a1a', dim: 'rgba(196,123,10,0.12)' },
        teal:   { heritage: '#0a7a6a', 2: '#0fa08c', dim: 'rgba(10,122,106,0.10)' },
        sand:   { DEFAULT: '#f5ede0', 2: '#ede0cc' },
        cream:  '#fdf8f2',
        ink:    { DEFAULT: '#1c1007', 2: '#3d2b15', muted: '#7a6248' },
      },
      fontFamily: {
        display: ["'Playfair Display'", 'Georgia', 'serif'],
        body:    ["'Outfit'", 'system-ui', 'sans-serif'],
        arabic:  ["'Amiri'", 'serif'],
      },
      transitionDuration: {
        '250': '250ms',  // fix: adds duration-250 class
      },
      borderRadius: {
        card: '14px',
        xl2:  '20px',
      },
      backgroundImage: {
        'terra-gold': 'linear-gradient(135deg, #c0390a, #c47b0a)',
        'zellige':    "repeating-linear-gradient(45deg,rgba(192,57,10,0.06) 0,rgba(192,57,10,0.06) 1px,transparent 1px,transparent 20px),repeating-linear-gradient(-45deg,rgba(192,57,10,0.06) 0,rgba(192,57,10,0.06) 1px,transparent 1px,transparent 20px)",
        'grid-dark':  "repeating-linear-gradient(0deg,rgba(253,248,242,0.05) 0,rgba(253,248,242,0.05) 1px,transparent 1px,transparent 30px),repeating-linear-gradient(90deg,rgba(253,248,242,0.05) 0,rgba(253,248,242,0.05) 1px,transparent 1px,transparent 30px)",
      },
      animation: {
        'fade-up':    'fadeUp 0.4s ease forwards',
        'pulse-ring': 'pulseRing 2s infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:     { from: { opacity: '0', transform: 'translateY(14px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        pulseRing:  { '0%,100%': { boxShadow: '0 0 0 4px rgba(192,57,10,0.28)' }, '50%': { boxShadow: '0 0 0 10px rgba(192,57,10,0.06)' } },
        float:      { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-18px) rotate(4deg)' } },
      },
    },
  },
  plugins: [],
};
