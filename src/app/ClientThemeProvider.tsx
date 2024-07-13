'use client';

import { ThemeProvider } from '@mui/material';
import theme from '@/constants/theme';

const ClientThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ClientThemeProvider;
