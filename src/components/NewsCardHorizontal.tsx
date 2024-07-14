import Image from 'next/image';

import { Box, Stack, Typography } from '@mui/material';

import color from '@/constants/color';

interface NewsCardHorizontalProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const NewsCardHorizontal = ({ date, title, description, imageUrl }: NewsCardHorizontalProps) => {
  return (
    <Stack alignItems="center" direction="row" height="180px">
      <Stack>
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
      </Stack>
      <Box borderRadius={2} height={130} minWidth={230} ml={3} mt={2} overflow="hidden" position="relative">
        <Image fill priority alt="articleImage" sizes="100%" src={imageUrl} style={{ objectFit: 'cover' }} />
      </Box>
    </Stack>
  );
};

export default NewsCardHorizontal;
