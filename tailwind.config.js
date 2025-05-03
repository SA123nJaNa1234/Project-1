/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },

    extend: {
      
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(50px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          zoomIn: {
            '0%': { transform: 'scale(0.8)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 1.5s ease-out forwards',
          slideUp: 'slideUp 1.5s ease-out forwards',
          zoomIn: 'zoomIn 1s ease-out forwards',
        },
        fontFamily: {
          Jost: ["Jost", "sans-serif"],
          Lobster: ["Lobster", "sans-serif"]
        },
    
        container: {
          center: true,
          padding: {
            DEFAULT: "12PX",
            md: "32px"
          },
        },
    },

    

   
    },
  
  plugins: [],
}

