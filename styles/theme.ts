import { extendTheme } from "@chakra-ui/react";

const theme = {
  colors: {
    primaryColor: '#0A1128',
    secondaryColor: '#dc143c',
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
    background: '#F5F8FA',
    text: 'black',
    brand: {
      blue: '#115D8C',
      orange: '#F25D27',
    },
    textColors: {
      titles: '#123952',
      text: '#617480',
      complement: '#A0ACB3',
      gray5: '#555555',
      gray6: '#666666',
      gray8: '#888888',
      pinkStore: '#D14B8F',
      pinkPrice1: '#C81A78',
      pinkPrece2: '#B6116E',
      titleFilter: '#000000',
      titlePrice: '#262626',
      found: '#262626',
      radioButtom: '#1D1D1B',
    },
    radioButtom: '#EAEAEA',
    green: '##7EBC43',
    discount: '#F79552',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
  breakpoints: {
    sm: '391px',
    smm: '541px',
    md: '768px',
    lg: '913px',
    xl: '1200px',
    '2xl': '1536px',
  },
  shadows: {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  }
}

export default theme
