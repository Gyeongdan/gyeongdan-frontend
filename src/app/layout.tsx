import { Box } from '@mui/material';

import Header from '@/components/Header';

import ClientThemeProvider from './ClientThemeProvider';
import '../../public/fonts.css';

export const metadata = {
  title: 'Gyeongdan',
  description: '경단 웹페이지입니다.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta content="upgrade-insecure-requests" httpEquiv="Content-Security-Policy" />
      </head>
      <body>
        <ClientThemeProvider>
          <Box minHeight="100vh" width="100vw">
            <Header />
            {children}
          </Box>
        </ClientThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
