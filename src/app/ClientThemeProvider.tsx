'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from '@/constants/theme';

const ClientThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ClientThemeProvider;
