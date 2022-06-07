module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': "rgb(240, 240, 240)", 
       transparent: "transparent",
       current: "currentColor",
       primary: {
         superlight: "#FFFFFF",
         light: "#FFF8F0",
         DEFAULT: "#FFEBD1",
         dark: "#978F85"
       },
       secondary: {
         light: "#EFEFEF",
         DEFAULT: "#A0A0A0",
         dark: "#26221D"
       }
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
