import { createTheme } from '@mui/material';

import color from './color';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: color.blue,
      contrastText: '#ffffff',
    },
    secondary: {
      main: color.gray_dark,
    },
  },

  typography: {
    fontFamily: 'Noto Sans KR, sans-serif',
    h1: {
      fontSize: '36px',
      fontFamily: 'GmarketSansBold',
    },
    h2: {
      fontSize: '36px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '30px',
      fontFamily: 'GongGothicMedium',
    },
    h4: {
      fontSize: '20px',
      fontFamily: 'GongGothicLight',
    },
    h5: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: '12px',
      fontFamily: 'GmarketSansMedium',
    },
    body1: {
      fontSize: '16px',
      fontFamily: 'GongGothicLight',
    },
    body2: {
      fontSize: '14px',
    },
    button: {
      fontFamily: 'GmarketSansMedium',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          overflowX: 'hidden',
        },
      },
    },
  },
});

export default theme;
