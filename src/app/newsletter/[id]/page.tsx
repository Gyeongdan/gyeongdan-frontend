'use client';

import Image from 'next/image';

import { Box, Card, CardContent, Container, Typography } from '@mui/material';

import CommentCard from '@/components/CommentCard';
import CommentList from '@/components/CommentList';
import StyledGradientBox from '@/components/GradientBox';
import Headline from '@/components/Headline';
import color from '@/constants/color';
import articleData from '@/mocks/article';

const Page = () => {
  const phrasesContent = articleData.phrases
    ? Object.entries(articleData.phrases)
        .map(([term, definition]) => `${term}: ${definition}`)
        .join('\n')
    : '';
  const comments = [
    { id: '1', content: '헷갈릴만한 단어를 준비해봤어!' },
    { id: '2', content: phrasesContent },
    { id: '3', content: '그래도 해결되지 않았다면 챗봇으로 물어봐줘 🤗' },
  ];

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <StyledGradientBox
        sx={{
          zIndex: -1,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <Container
        maxWidth="md"
        sx={{
          padding: '5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '600px' }}>
          <Box sx={{ marginBottom: '2rem' }}>
            <Headline
              source={articleData.source}
              title={articleData.title}
              uploadDate={articleData.uploadDate}
              viewCount={articleData.viewCount}
            />
          </Box>
          <CommentCard isCharacter content={articleData.comment} />
          <Box mt="2.5rem">
            <Box>
              <Image alt="hi" height={400} src={articleData.imageUrl} style={{ objectFit: 'cover' }} width={600} />
            </Box>
            <Card sx={{ marginTop: '2rem', backgroundColor: 'transparent', boxShadow: 'none' }}>
              <CardContent sx={{ padding: 0 }}>
                <Typography sx={{ color: color.gray_dark, whiteSpace: 'pre-line' }} variant="body1">
                  {articleData.content}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <h3 style={{ color: color.blue }}>AI 산지니가 선별한 기사속 경단어</h3>
          <CommentList isCharacter comments={comments} />
        </Box>
      </Container>
    </Box>
  );
};

export default Page;
