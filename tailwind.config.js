/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';
import defaultTheme from 'tailwindcss/defaultTheme';



export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
   
    extend: {
     
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        'bebas': ['bebas-neue', ...defaultTheme.fontFamily.sans],
          'squeezed': ['Squeezed', ...defaultTheme.fontFamily.sans],
          'mighty': ['mighty-slab', ...defaultTheme.fontFamily.sans],
          'futura': ['futura-pt', ...defaultTheme.fontFamily.sans],
        'helvetica':['neue-haas-grotesk-display', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        uiPurple: '#A732D9',
        uiGreen: '#14D959',
        uiWhite: '#EDF2E9',
        uiRed: '#F20505',
        uiBlack: '#0D0D0D' ,
      },
    },
     
  },
  plugins: 
  [ typography , forms , aspectRatio]

  ,
}

