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
  isMock?: boolean;
}

const NewsCardVertical = ({ id, date, title, description, imageUrl, path, isMock = false }: NewsCardVerticalProps) => {
  const cardContent = (
    <>
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
    </>
  );

  return (
    <Card sx={{ maxWidth: 350, boxShadow: 'none', borderRadius: 4 }}>
      {imageUrl &&
        (isMock ? (
          <CardMedia alt="articleImage" component="img" image={imageUrl} sx={{ height: 190, borderRadius: 2 }} />
        ) : (
          <Link color="inherit" href={`/${path}/${id}`} underline="none">
            <CardMedia alt="articleImage" component="img" image={imageUrl} sx={{ height: 190, borderRadius: 2 }} />
          </Link>
        ))}
      <CardContent>
        {isMock ? (
          cardContent
        ) : (
          <Link color="inherit" href={`/${path}/${id}`} underline="none">
            {cardContent}
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsCardVertical;
