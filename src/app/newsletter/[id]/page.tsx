'use client';

import Image from 'next/image';

import { Box, Container } from '@mui/material';

import Headline from '@/components/Headline';
import articleData from '@/mocks/article';

const Page = () => {
  return (
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
  );
};

export default Page;
