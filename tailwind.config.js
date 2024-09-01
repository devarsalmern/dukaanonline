/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables dark mode based on a class
  theme: {
    extend: {
      colors: {
        // Add custom dark theme colors if needed
        darkBg: "#1a202c", // Example dark background color
        darkText: "#e2e8f0", // Example dark text color
      },
      // Add more customizations if needed
    },
  },
  plugins: [],
};
