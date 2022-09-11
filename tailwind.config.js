
module.exports = {
  content: [
   "public/*.{html,js}"
  ],
  theme: {
    screens: {


      'md': {'max':'1000px'},
     
      // => @media (min-width: 768px) { ... }

      'lg': '1030px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'blue': '#3455eb',
      'light-blue': '#e9f4f5',
      'strong-blue':'#24378f',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'red':'#9c0606',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#fff',
      'black': '#000',
    },
    extend: {
      boxShadow: {
        'blue-light': '-22px 56px 102px -44px rgba(140,167,209,1)',
      }
    }
  // ...

}}