import Image from 'next/image';
import React from 'react';

import { Box, Stack, Typography } from '@mui/material';

import color from '@/constants/color';

interface CommentCardProps {
  content: string;
  isStroke?: boolean;
  isFilled?: boolean;
  isCharacter?: boolean;
  isChat?: boolean;
}

const CommentCard = ({
  content,
  isStroke = false,
  isFilled = false,
  isCharacter = false,
  isChat = false,
}: CommentCardProps) => {
  return (
    <Stack alignItems="center" direction="row">
      {isChat && (
        <Box flexShrink={0} height={75} position="relative" width={75}>
          {isCharacter && (
            <Image fill alt="Character Image" sizes="100%" src="/image/sanjinee.png" style={{ objectFit: 'cover' }} />
          )}
        </Box>
      )}
      {!isChat && isCharacter && (
        <Box flexShrink={0} height={75} position="relative" width={75}>
          <Image fill alt="Character Image" sizes="100%" src="/image/sanjinee.png" style={{ objectFit: 'cover' }} />
        </Box>
      )}
      <Box
        borderRadius={5}
        ml={1}
        padding="2px"
        sx={{
          background: isStroke ? `linear-gradient(${color.gradient_blue_dark}, ${color.gradient_blue_light})` : 'none',
          display: 'flex',
          alignItems: 'center',
          maxWidth: '100%',
          overflow: 'hidden',
        }}
      >
        <Box
          borderRadius="1.1rem"
          padding={2}
          sx={{
            background: isFilled
              ? `linear-gradient(${color.gradient_blue_dark}, ${color.gradient_blue_light})`
              : 'white',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '100%',
            overflow: 'hidden',
          }}
        >
          <Typography
            color={isFilled ? 'white' : 'black'}
            fontFamily="GmarketSansMedium"
            sx={{ wordBreak: 'break-word' }}
            variant="body2"
            whiteSpace="pre-line"
          >
            {content}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default CommentCard;
