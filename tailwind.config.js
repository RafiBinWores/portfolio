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
        urbanist: ["Urbanist", "serif"],
        montserrat: ["Montserrat", "serif"],
      },
      colors: {
        primary: {
          100: "#F1F7F6",
          200: "#00DF82",
          300: "#08C79C",
          400: "#E7FFFA",
          500: "#737373",
          600: "#04614C",
          700: "#042222",
        },
        customGray: "#6F7C74", 
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(90deg, rgba(4,97,76,1) 0%, rgba(8,199,156,1) 100%)',
      },
      boxShadow: {
        'custom-green': '0px 1px 10px rgba(8, 199, 156, 0.25)',
      },
    },
  },
  plugins: [],
};
