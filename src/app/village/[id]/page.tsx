'use client';

import Image from 'next/image';

import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

import CommentCard from '@/components/CommentCard';
import GradientBox from '@/components/GradientBox';
import Headline from '@/components/Headline';
import KakaoMap from '@/components/KakaoMap';
import color from '@/constants/color';
import hiddenGems from '@/mocks/villages';

const Page = async ({ params }: { params: { id: number } }) => {
  const village = hiddenGems[params.id];

  return (
    <GradientBox>
      <Stack alignItems="center" p={10}>
        <Box sx={{ maxWidth: '600px' }}>
          <Box sx={{ marginBottom: '2rem' }}>
            <Headline title={village.title} uploadDate={village.publishedAt} />
          </Box>
          <Box mt="2.5rem">
            <Box>
              {village.imageUrl && (
                <Image
                  priority
                  alt="articleImage"
                  height={400}
                  src={village.imageUrl}
                  style={{ objectFit: 'contain' }}
                  width={600}
                />
              )}
            </Box>
            <Card sx={{ marginTop: '2rem', backgroundColor: 'transparent', boxShadow: 'none' }}>
              <CardContent sx={{ padding: 0 }}>
                <Typography fontSize="16px" py={2} variant="body2" whiteSpace="pre-line">
                  {village.content}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Typography color={color.blue} fontSize="20px" py={2} variant="h3" />
          <CommentCard isCharacter isChat content="위치는 여기야📍" />
          <CommentCard isChat content="다음에 같이 가보자!" />
        </Box>
      </Stack>
      <Box sx={{ marginTop: -2 }}>
        <KakaoMap villages={[village]} />
      </Box>
    </GradientBox>
  );
};

export default Page;
