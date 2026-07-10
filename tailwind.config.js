/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#10B981',
        dark: '#0F172A',
        background: '#F8FAFC',
        section: '#FAFBFF',
        border: '#E5E7EB',
        success: '#10B981',
        lightBlue: '#DBEAFE',
        text: '#374151',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
