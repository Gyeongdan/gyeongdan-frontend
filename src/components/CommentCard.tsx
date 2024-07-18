'use client';

import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

import { Box, Card, CardMedia, SxProps, Typography } from '@mui/material';
import { Theme } from '@mui/system';

import color from '@/constants/color';

interface CommentCardProps {
  content: ReactNode;
  isStroke?: boolean;
  isFilled?: boolean;
  isCharacter?: boolean;
  isChat?: boolean;
  sx?: SxProps<Theme>;
}

const CommentCard = ({
  content,
  isStroke = false,
  isFilled = false,
  isCharacter = false,
  isChat = false,
  sx,
}: CommentCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <Card
      ref={ref}
      sx={{
        display: 'flex',
        boxShadow: 'none',
        alignItems: 'center',
        bgcolor: 'transparent',
        ...(isChat && {
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        }),
        ...(!isChat && {
          width: '100%',
        }),
        ...(!isCharacter && {
          mb: 1.3,
        }),
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
          background: isStroke ? `linear-gradient(${color.gradient_blue_dark}, ${color.gradient_blue_light})` : 'none',
          ...(!isChat && {
            width: '100%',
          }),
        }}
      >
        <Box
          borderRadius="18px"
          padding={2}
          sx={{
            background: isFilled
              ? `linear-gradient(${color.gradient_blue_dark}, ${color.gradient_blue_light})`
              : 'white',
          }}
        >
          <Typography
            color={isFilled ? 'white' : 'black'}
            fontFamily="GmarketSansMedium"
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
