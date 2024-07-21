import Image from 'next/image';

import { Link, Stack, Typography } from '@mui/material';

import color from '@/constants/color';

interface NewsCardHorizontalProps {
  id: number;
  title: string;
  content: string;
  publishedAt: string;
  imageUrl?: string;
  path: string;
}

const NewsCardHorizontal = ({ id, title, content, publishedAt, imageUrl, path }: NewsCardHorizontalProps) => {
  return (
    <Stack alignItems="center" direction="row" height="180px" justifyContent="space-between">
      <Stack>
        <Typography color={color.blue} fontWeight="600" mb={1} variant="body2">
          {publishedAt}
        </Typography>
        <Link color="inherit" href={`/${path}/${id}`} underline="none">
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
            {content}
          </Typography>
        </Link>
      </Stack>
      {imageUrl && (
        <Link
          borderRadius={2}
          height={130}
          href={`/newsletter/${id}`}
          minWidth={230}
          ml={3}
          mt={2}
          overflow="hidden"
          position="relative"
        >
          <Image fill priority alt="articleImage" sizes="100%" src={imageUrl} style={{ objectFit: 'cover' }} />
        </Link>
      )}
    </Stack>
  );
};

export default NewsCardHorizontal;
