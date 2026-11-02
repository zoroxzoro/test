/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4361EE',
          light: '#EEF1FE',
          dark: '#344ec7',
        },
        secondary: {
          DEFAULT: '#805DCA',
          light: '#F3EEFB',
        },
        success: {
          DEFAULT: '#00AB55',
          light: '#E6F7EF',
        },
        danger: {
          DEFAULT: '#E7515A',
          light: '#FCEFEE',
        },
        warning: {
          DEFAULT: '#E2A03F',
          light: '#FCF5EB',
        },
        info: {
          DEFAULT: '#2196F3',
          light: '#E8F4FD',
        },
        dark: {
          DEFAULT: '#0E1726',
          light: '#888EA8',
          border: '#E0E6ED',
        },
        sidebar: {
          bg: '#FFFFFF',
          text: '#506690',
          hover: '#EEF1FE',
          active: '#4361EE',
        }
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'card-hover': '0 8px 24px 0 rgba(0, 0, 0, 0.08)',
        auth: '0 20px 60px 0 rgba(67, 97, 238, 0.12), 0 8px 20px 0 rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}

