import Image from 'next/image';

import { Box, Stack, Typography } from '@mui/material';

import color from '@/constants/color';

interface CommentCardProps {
  content: string;
  isStroke?: boolean;
  isFilled?: boolean;
  isCharacter?: boolean;
}

const CommentCard = ({ content, isStroke = false, isFilled = false, isCharacter = false }: CommentCardProps) => {
  return (
    <Stack alignItems="center" direction="row">
      {isCharacter && (
        <Box height={100} position="relative" width={100}>
          <Image fill alt="Character Image" sizes="100%" src="/image/sanjinee.png" style={{ objectFit: 'cover' }} />
        </Box>
      )}
      <Box
        borderRadius={5}
        ml={1}
        padding="2px"
        sx={{
          background: isStroke ? `linear-gradient(${color.gradient_blue_dark}, ${color.gradient_blue_light})` : 'none',
        }}
        width="100%"
      >
        <Box
          borderRadius="1.1rem"
          padding={2}
          sx={{
            background: isFilled
              ? `linear-gradient(${color.gradient_blue_dark}, ${color.gradient_blue_light})`
              : 'white',
          }}
        >
          <Typography color={isFilled ? 'white' : 'black'} variant="body2" whiteSpace="pre-line">
            {content}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default CommentCard;
