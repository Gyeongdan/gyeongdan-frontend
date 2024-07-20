'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createStore, Provider } from 'jotai';

import theme from '@/constants/theme';
import useCurrentPath from '@/hooks/useCurrentPath';

const store = createStore();

const Providers = ({ children }: { children: React.ReactNode }) => {
  useCurrentPath();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};

export default Providers;
