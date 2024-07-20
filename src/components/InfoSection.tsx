'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

import { Box, Stack, SxProps, Typography } from '@mui/material';

interface InfoSectionProps {
  title?: string;
  description?: string;
  category?: string;
  sx?: SxProps;
  children?: ReactNode;
  imageUrl?: string;
  isRight?: boolean;
}

const InfoSection = ({ title, description, category, sx, children, imageUrl, isRight = false }: InfoSectionProps) => {
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
      }}
    >
      <Stack alignItems="center" direction="row" justifyContent={isRight ? 'flex-end' : undefined} spacing={2}>
        {imageUrl && !isRight && <Image alt="newsletter" height={100} src={imageUrl} width={100} />}
        <Typography color="primary" px={3} variant="h1">
          {category}
        </Typography>
        {imageUrl && isRight && <Image alt="newsletter" height={100} src={imageUrl} width={100} />}
      </Stack>
      <div>
        {title && <h1>{title}</h1>}
        {description}
        {children}
      </div>
    </Box>
  );
};
export default InfoSection;
