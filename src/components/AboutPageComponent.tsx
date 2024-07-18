import React, { ReactNode } from 'react';

import { Box, SxProps } from '@mui/material';

interface AboutPageComponentProps {
  title?: string;
  description?: string;
  sx?: SxProps;
  style?: React.CSSProperties;
  children?: ReactNode;
}

const AboutPageComponent = ({ title, description, sx, style, children }: AboutPageComponentProps) => {
  return (
    <Box
      className="section"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        ...sx,
        ...style,
      }}
    >
      <div>
        {title && <h1>{title}</h1>}
        {description}
        {children}
      </div>
    </Box>
  );
};

export default AboutPageComponent;
