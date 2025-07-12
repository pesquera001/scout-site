/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white-canvas': '#F9F8F5',
        'worn-denim': '#708B91',
        'prairie-clay': '#B9856F',
        'saddle-dust': '#E5D3BD',
        'smoke-tin': '#78736E',
      },
      fontFamily: {
        'display': ['Bebas Neue', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'typewriter': ['Courier Prime', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'typewriter': 'typewriter 3s steps(40) 1s 1 normal both',
        'blinkTextCursor': 'blinkTextCursor 500ms steps(40) infinite normal',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blinkTextCursor: {
          'from': { borderRightColor: '#708B91' },
          'to': { borderRightColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
} 