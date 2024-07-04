import { createTheme } from '@mui/material';
import color from './color';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: color.brown_light,
      contrastText: '#ffffff',
    },
    secondary: {
      main: color.gray_dark,
    },
  },

  typography: {
    fontFamily: 'Noto Sans, sans-serif',
    h1: {
      fontSize: '36px',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: '20px',
    },
    body1: {
      fontSize: '16px',
    },
    body2: {
      fontSize: '14px',
    },
  },
});

export default theme;
