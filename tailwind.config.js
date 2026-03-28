/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      clipPath: {
        'diagonal': 'polygon(0 0, 100% 5vw, 100% 100%, 0 calc(100% - 5vw))',
        'diagonal-top': 'polygon(0 5vw, 100% 0, 100% 100%, 0 100%)',
        'diagonal-bottom': 'polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%)',
      }
    },
  },
  plugins: [],
}
