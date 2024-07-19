import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import color from '@/constants/color';

interface NewsCardVerticalProps {
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const NewsCardVertical = ({ date, title, description, imageUrl }: NewsCardVerticalProps) => {
  return (
    <Card sx={{ maxWidth: 350, boxShadow: 'none', borderRadius: 4 }}>
      {imageUrl && (
        <CardMedia alt="articleImage" component="img" image={imageUrl} sx={{ height: 190, borderRadius: 2 }} />
      )}
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default NewsCardVertical;
