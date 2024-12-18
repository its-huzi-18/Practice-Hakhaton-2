/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      boxShadow: {
        customShadow: '0px 1px 13px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        menuBg:'#9b939c',
        border:'rgba(0, 0, 0, 0.04)',
        customLine:'#808080',
        lightBlue:'#CBE4E8',
        footerText:'#fafafa',
        lightWhite:'#c1c0c1',
        arrivalBg:'#0D0D0D',
        customGrey:'#808080',
        darkGreen:'#184A48',
        customYellow:'#EEFF61',
        darkRed:'#FB1314',
        customText:'#FAFAFA',
        customBlack:'#000000',
        inpBg:'#F5F5F5',
        borderColor:'#828282',
        clockBtn:'#E07575',
        customGreen:'#00ff66',
        arrowBg:'#F5F5F5',
        starColor:'#FFAD33',
        speakerBg:'#D9D9D9',
        customRed:'#DB4444',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
    },
  },
  plugins: [],
} 
