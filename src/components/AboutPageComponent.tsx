import Image from 'next/image';
import React, { ReactNode } from 'react';

import { Box, Stack, SxProps, Typography } from '@mui/material';

interface AboutPageComponentProps {
  title?: string;
  description?: string;
  category?: string;
  sx?: SxProps;
  style?: React.CSSProperties;
  children?: ReactNode;
  imgageUrl?: string;
  isright?: boolean;
}

const AboutPageComponent = ({
  title,
  description,
  category,
  sx,
  style,
  children,
  imgageUrl,
  isright = false,
}: AboutPageComponentProps) => {
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
        whiteSpace: 'pre-line',
        ...sx,
        ...style,
      }}
    >
      <Stack alignItems="center" direction="row" justifyContent={isright && 'end'} spacing={2}>
        {imgageUrl && !isright && <Image alt="newsletter" height={100} src={imgageUrl} width={100} />}
        <Typography color="primary" px={3} variant="h1">
          {category}
        </Typography>
        {imgageUrl && isright && <Image alt="newsletter" height={100} src={imgageUrl} width={100} />}
      </Stack>
      <div>
        {title && <h1>{title}</h1>}
        {description}
        {children}
      </div>
    </Box>
  );
};

export default AboutPageComponent;
