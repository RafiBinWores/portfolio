/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          lg: '1378px',
          xl: '1378px',
        },
      },
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#F1F7F6",
          200: "#00DF82",
          300: "#08C79C",
          400: "#737373",
          500: "#737373",
          600: "#04614C",
          700: "#042222",
        },
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(90deg, rgba(4,97,76,1) 0%, rgba(8,199,156,1) 100%)',
      }
    },
  },
  plugins: [],
};
