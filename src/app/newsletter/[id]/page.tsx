'use client';

import Image from 'next/image';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import Headline from '@/components/Headline';
import color from '@/constants/color';
import articleData from '@/mocks/article';
import CommentCard from '@/components/CommentCard';
import article from '@/mocks/article';
import { padding } from '@mui/system';

const Page = () => {
  return (
    <Box
      color={color.gray_dark}
      sx={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(${parseInt(color.gradient_blue_dark.slice(1, 3), 16)}, ${parseInt(color.gradient_blue_dark.slice(3, 5), 16)}, ${parseInt(color.gradient_blue_dark.slice(5, 7), 16)}, 0.2) 50%, rgba(${parseInt(color.gradient_blue_light.slice(1, 3), 16)}, ${parseInt(color.gradient_blue_light.slice(3, 5), 16)}, ${parseInt(color.gradient_blue_light.slice(5, 7), 16)}, 0.2) 100%)`,
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="md" sx={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ width: '100%', maxWidth: '600px' }}>
          <Box sx={{ marginBottom: '2rem' }}>
            <Headline
              source={articleData.source}
              title={articleData.title}
              uploadDate={articleData.uploadDate}
              viewCount={articleData.viewCount}
            />
          </Box>
          <CommentCard content={articleData.comment} isCharacter={true} />
          <Box sx={{ marginTop: '1rem', width: '100%' }}>
            <Box sx={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
              <Image
                alt="hi"
                src={articleData.imageUrl}
                width={600}
                height={400}
                style={{ borderRadius: '8px', width: '100%', objectFit: 'cover' }}
              />
            </Box>
            <Card sx={{ marginTop: '2rem', backgroundColor: 'transparent', boxShadow: 'none', width: '100%' }}>
              <CardContent sx={{ padding: 0 }}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ color: color.gray_dark, whiteSpace: 'pre-line', width: '100%', maxWidth: '600px', margin: '0 auto' }}
                >
                  {article.content}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Page;
