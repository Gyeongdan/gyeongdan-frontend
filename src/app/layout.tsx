import { Box } from '@mui/material';

import Header from '@/components/Header';

import '../../public/fonts.css';
import Providers from './Providers';

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
        <Providers>
          <Box minHeight="100vh" width="100vw">
            <Header />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
