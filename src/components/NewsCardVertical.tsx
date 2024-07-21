import Image from 'next/image';

import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';

import color from '@/constants/color';

interface NewsCardVerticalProps {
  id: number;
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
  path?: string;
}

const NewsCardVertical = ({ id, date, title, description, imageUrl, path }: NewsCardVerticalProps) => {
  return (
    <Card sx={{ maxWidth: 350, boxShadow: 'none', borderRadius: 4 }}>
      <Link color="inherit" href={`/${path}/${id}`} underline="none">
        {imageUrl && (
          <CardMedia alt="articleImage" component="img" image={imageUrl} sx={{ height: 190, borderRadius: 2 }} />
        )}
      </Link>
      <CardContent>
        <Link color="inherit" href={`/${path}/${id}`} underline="none">
          <Typography color={color.blue} fontWeight="600" mb={1} variant="body2">
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
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              display: '-webkit-box',
            }}
            variant="body2"
          >
            {description}
          </Typography>
        </Link>
      </CardContent>
      {imageUrl && (
        <Link
          borderRadius={2}
          height={130}
          href={`/${path}/${id}`}
          minWidth={230}
          ml={3}
          mt={2}
          overflow="hidden"
          position="relative"
        >
          <Image fill priority alt="articleImage" sizes="100%" src={imageUrl} style={{ objectFit: 'cover' }} />
        </Link>
      )}
    </Card>
  );
};

export default NewsCardVertical;
