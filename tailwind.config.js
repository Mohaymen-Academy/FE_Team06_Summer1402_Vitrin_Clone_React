/** @type {import('tailwindcss').Config} */
module.exports = {
  // important:true,
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {

      'vsmmobile': { 'max': '580px' },
      'smmobile': {'min':'581px','max':'767px'},
      'mobile': {'min':'768px','max':'991px'},
      'tablet': {'min':'992px',"max":'1023px'},
      // 'laptop': {'min':'1024px',"max":"1239px"},
      'desktop': '1024px',
    },
    extend: {
      fontFamily:{
        vazir:['Vazir']
      },
      keyframes: {
        'skeleton-loading': {
          '0%': {
            borderRadius: '20px',
            backgroundColor: 'hsl(200, 20%, 80%)',
          },
          '100%': {
            // borderRadius:'20px',
            backgroundColor: 'hsl(200, 20%, 95%)',
          },
        },

        'blueheaderanimatioclose': {
          '0%': {
            // position:'relative',
            top: '0',
            // height:'100%',
          },
          '100%': {
            // position:'relative',
            top: '-90px',
            // height: '0',
            // display:'none'
          },
        },
        'blueheaderanimationopen': {
          '0%': {
            // position:'relative',
            top: '-90px',
            // height:'100%',
          },
          '100%': {
            // position:'relative',
            top: '0',
            // height: '0',
            // display:'none'
          },
        },
        'logoopen': {
          '0%': {
            opacity: '0',
            top: '30px',
          },
          '100%': {
            opacity: '1',
            top: '0',
          },
        },
        'logoclose': {
          '0%': {
            opacity: '1',
            top: '0px',
          },
          '100%': {
            opacity: '0',
            top: '30px',
          },
        },
        "scrollleft": {
          "0%": {
            transform: " translateX(0)",
          },
          "100%": {
            transform: "translateX(-750px)", /* Move the items to the left */
          }
        },
      },
      animation: {
        'skeleton-loading': 'skeleton-loading 1s linear infinite alternate',
        'blueheaderanimationopen': 'blueheaderanimationopen 1s ease-out',
        'blueheaderanimatioclose': 'blueheaderanimatioclose 1s ease-out',
        'scrollleft': 'scrollleft 3s linear infinite',
        'logoopen': 'logoopen 1s ease-out',
        'logoclose': 'logoclose 1s ease-out',
  
      },
    },
    variants: {
      fill: ['hover', 'focus']
    },
  },
  plugins: ['tailwindcss-transition'],
}
