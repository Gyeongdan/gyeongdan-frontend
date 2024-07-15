'use client';

import Image from 'next/image';

import { Box, Container } from '@mui/material';

import Headline from '@/components/Headline';
import color from '@/constants/color';
import articleData from '@/mocks/article';

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
          <Headline
            source={articleData.source}
            title={articleData.title}
            uploadDate={articleData.uploadDate}
            viewCount={articleData.viewCount}
          />
          <Box sx={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
            <Image alt="hi" height={400} src={articleData.imageUrl} style={{ borderRadius: '8px' }} width={600} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Page;
