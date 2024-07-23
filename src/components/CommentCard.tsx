'use client';

import { ReactNode } from 'react';

import { keyframes } from '@emotion/react';
import { Box, Card, CardMedia, SxProps, Typography } from '@mui/material';
import { Theme } from '@mui/system';

import color from '@/constants/color';

interface CommentCardProps {
  content: ReactNode;
  isStroke?: boolean;
  isFilled?: boolean;
  isCharacter?: boolean;
  isChat?: boolean;
  isFixed?: boolean;
  sx?: SxProps<Theme>;
  positionY?: string;
}

const gradientAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const CommentCard = ({
  content,
  isStroke = false,
  isFilled = false,
  isCharacter = false,
  isChat = false,
  isFixed = false,
  sx,
  positionY = '40px',
}: CommentCardProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        boxShadow: 'none',
        alignItems: 'center',
        bgcolor: 'transparent',
        position: isFixed ? 'fixed' : 'relative',
        bottom: isFixed ? positionY : 'unset',
        right: isFixed ? '20px' : 'unset',
        zIndex: isFixed ? 9999 : 'unset',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.1)',
        },
        ...sx,
      }}
    >
      {isCharacter && (
        <CardMedia image="/images/sanjinee.png" sx={{ width: 75, height: 75, minWidth: 75, objectFit: 'contain' }} />
      )}
      {isChat && !isCharacter && <CardMedia sx={{ width: 75, height: 75, minWidth: 75 }} />}
      <Box
        sx={{
          borderRadius: 5,
          ml: 1,
          padding: '2px',
          background: isStroke
            ? `linear-gradient(45deg, ${color.gradient_blue_dark}, ${color.gradient_blue_light})`
            : 'none',
          width: '100%',
        }}
      >
        <Box
          borderRadius="18px"
          padding={2}
          sx={{
            background: isFilled
              ? `linear-gradient(45deg, ${color.gradient_blue_dark}, ${color.gradient_blue_light})`
              : 'white',
            backgroundSize: '200% 200%',
            animation: isFixed && isFilled ? `${gradientAnimation} 6s ease infinite` : 'none',
            ...sx,
          }}
        >
          <Typography
            color={isFilled ? 'white' : 'black'}
            fontFamily="GmarketSansMedium"
            sx={sx}
            variant="body2"
            whiteSpace="pre-line"
          >
            {content}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default CommentCard;
