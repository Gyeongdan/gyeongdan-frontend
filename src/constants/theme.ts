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
  },
});

export default theme;
