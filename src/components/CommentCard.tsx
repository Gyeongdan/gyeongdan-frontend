import React from 'react';

import { Card, Typography, Box, SxProps, Theme } from '@mui/material';

import color from '@/constants/color';

interface CommentCardProps {
  content: string;
  isStroke?: boolean;
  isFilled?: boolean;
  width?: string | number;
}

const CommentCard = ({ content, isStroke = false, isFilled = true, width = '100%' }: CommentCardProps) => {
  const boxStyles: SxProps<Theme> = {
    position: 'relative',
    margin: '0.5rem 0',
    borderRadius: '1.5rem',
    padding: isStroke ? '0.125rem' : '0',
    background: isStroke ? `linear-gradient(${color.gradient_blue_dark}, ${color.gradient_blue_light})` : 'none',
    width: typeof width === 'number' ? `${width}px` : width,
  };

  const cardStyles: SxProps<Theme> = {
    background: isFilled ? `linear-gradient(${color.gradient_blue_dark}, ${color.gradient_blue_light})` : 'white',
    borderRadius: '1.375rem',
    padding: '1rem',
    color: isFilled ? 'white' : 'black',
  };

  const textStyles: SxProps<Theme> = {
    whiteSpace: 'pre-line',
  };

  return (
    <Box sx={boxStyles}>
      <Card elevation={0} sx={cardStyles}>
        <Typography color={isFilled ? 'white' : 'text.primary'} sx={textStyles} variant="body2">
          {content}
        </Typography>
      </Card>
    </Box>
  );
};

export default CommentCard;
