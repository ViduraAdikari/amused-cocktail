import {createTheme, Theme, ThemeOptions} from "@mui/material/styles";
import {blue, cyan, grey, lightBlue} from "@mui/material/colors";
import {makeResponsive} from "./themeUtil";
import {isRoundedBorders} from "@/const/values";

declare module '@mui/material/styles' {

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

const commonThemeOptions: ThemeOptions = {
  typography: {
    fontSize: 14,
    fontFamily: [
      // 'Roboto',
      'Montserrat',
      'sans-serif',
    ].join(','),
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontWeight: 500,
          borderRadius: isRoundedBorders ? 7 : 0,
        },
        sizeSmall: {
          padding: '2px 16px',
        },
        sizeMedium: {
          padding: '3px 22px',
          fontWeight: 600,
        },
        sizeLarge: {
          padding: '6px 30px',
          fontSize: '1rem',
          fontWeight: 700,
        }
      }
    },

  }
}

export const darkThemeOptions: ThemeOptions = {
  palette: {
    contrastThreshold: 4.5,
    mode: 'dark',
    text: {
      primary: grey[50],
      secondary: grey[200],
      disabled: grey[500],
    },
    background: {
      default: '#263238',
      paper: grey[800]
    },
    primary: {
      main: lightBlue[500],
      light: lightBlue[300],
      dark: lightBlue[800],
      contrastText: grey[900]
    },
    secondary: {
      main: blue[500],
      light: blue[300],
      dark: cyan[700],
      contrastText: grey[50]
    },
  },
  ...commonThemeOptions,
}

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    text: {
      primary: grey[900],
      secondary: grey[700],
      disabled: grey[500],
    },
    background: {
      default: '#f1f1f1',
      paper: grey[100]
    },
    primary: {
      main: blue[700],
      light: blue[200],
      dark: blue[800],
      contrastText: grey[50]
    },
    secondary: {
      main: cyan[600],
      light: cyan[300],
      dark: cyan[800],
      contrastText: grey[100]
    },
    common: {
      white: '#fefefe',
      black: '#000000'
    }
  },
  ...commonThemeOptions,
}

export const getTheme = (mode: 'dark' | 'light'): Theme => {
  const theme: Theme = mode === 'dark' ? createTheme(darkThemeOptions) : createTheme(lightThemeOptions);
  return makeResponsive(theme);
}
