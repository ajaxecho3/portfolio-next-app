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
        'main': '#DFB687',            // Main Color
        'accent-1': '#E8C9A7',      // Accent Color 1
        'accent-2': '#9C8264',      // Accent Color 2
        'highlight-1': '#F7EFE5',   // Highlight Color 1
        'highlight-2': '#CDBDB0',   // Highlight Color 2
        'contrast': '#4D525C',        // Contrast Color
      },
      animation: {
        tilt: 'tilt 10s infinite linear',
        blob: 'blob 7s infinite '
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',

          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        glitchanimation: {
          '0%': {
            clip: 'rect(0, 900px, 0, 0)',
            transform: 'skew(0.1turn)',
          },
          '5%': {
            clip: 'rect(56px, 9999px, 53px, 0)',
            transform: ' skew(0.2turn)'
          }
        },
        glitchanimationreverse: {
          '0%': {
            clip: 'rect(56px, 9999px, 30px, 0)',
            transform: 'skew(-0.05turn)',
          },
          '5%': {
            clip: 'rect(40px, 9999px, 36px, 0)',
            transform: ' skew(-0.1turn)'
          }
        },

      },
    },
  },
  plugins: [],
}
