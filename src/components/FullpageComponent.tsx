// src/components/FullpageComponent.tsx
import React from 'react';

import ReactFullpage from '@fullpage/react-fullpage';
import { Box, Typography } from '@mui/material';

const FullpageComponent: React.FC = () => (
  <ReactFullpage
    credits={{ enabled: false }}
    render={() => {
      return (
        <div id="fullpage-wrapper" style={{ height: '100vh' }}>
          <Box
            className="section"
            id="section1"
            sx={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f5f5f5',
            }}
          >
            <Typography variant="h3">Section 1</Typography>
          </Box>
          <Box
            className="section"
            id="section2"
            sx={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#e0e0e0',
            }}
          >
            <Typography variant="h3">Section 2</Typography>
          </Box>
          <Box
            className="section"
            id="section3"
            sx={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#bdbdbd',
            }}
          >
            <Typography variant="h3">Section 3</Typography>
          </Box>
        </div>
      );
    }}
    scrollingSpeed={1000}
  />
);

export default FullpageComponent;
