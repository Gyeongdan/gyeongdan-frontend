import Image from 'next/image';

import { Box, Typography } from '@mui/material';

import color from '@/constants/color';

interface NewsCardHorizontalProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const NewsCardHorizontal = ({ date, title, description, imageUrl }: NewsCardHorizontalProps) => {
  return (
    <Box alignItems="center" display="flex" flexDirection="row" height="180px">
      <Box display="flex" flexDirection="column">
        <Typography color={color.blue} fontWeight="bold" mb={1} variant="body2">
          {date}
        </Typography>
        <Typography
          mb={1}
          sx={{
            overflow: 'hidden',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
          }}
          variant="h5"
        >
          {title}
        </Typography>
        <Typography
          sx={{
            overflow: 'hidden',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
          }}
          variant="body2"
        >
          {description}
        </Typography>
      </Box>
      <Box borderRadius={2} height={130} ml={3} mt={2} overflow="hidden" position="relative" width={450}>
        <Image fill alt="articleImage" src={imageUrl} style={{ objectFit: 'cover' }} />
      </Box>
    </Box>
  );
};

export default NewsCardHorizontal;
