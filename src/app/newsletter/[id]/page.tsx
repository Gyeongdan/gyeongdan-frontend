'use client';

import Image from 'next/image';
import React from 'react';

import { Box, Card, CardContent, Container, Tooltip, Typography } from '@mui/material';

import CommentCard from '@/components/CommentCard';
import CommentList from '@/components/CommentList';
import StyledGradientBox from '@/components/GradientBox';
import Headline from '@/components/Headline';
import color from '@/constants/color';
import articleData from '@/mocks/article';

const Page = () => {
  const phrasesContent = articleData.phrases
    ? Object.entries(articleData.phrases).map(([term, definition]) => ({ term, definition }))
    : [];

  const comments = [
    { id: '1', content: '헷갈릴만한 단어를 준비해봤어 😆' },
    { id: '2', content: phrasesContent.map(({ term, definition }) => `[${term}] \n ${definition}`).join('\n\n') },
    {
      id: '3',
      content:
        '단어 외에도 이 기사에 대해서 더 궁금한게 있다면 챗봇을 활용해줘🤗\n 본선 전까진 이 자리에 챗봇도 데려다놓을게😓',
    },
  ];

  const renderContentWithTooltips = (content: string) => {
    let count = 0;
    const words = content.split(/(\s+)/);
    return words.map((word) => {
      const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim();
      const phrase = phrasesContent.find(({ term }) => cleanWord.includes(term));
      count += 1;
      if (phrase) {
        return (
          <Tooltip key={`${cleanWord}-${count}`} arrow title={phrase.definition}>
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>{word}</span>
          </Tooltip>
        );
      }
      return <span key={`${cleanWord}-${count}`}>{word}</span>;
    });
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <StyledGradientBox
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
      <Container
        sx={{
          padding: '5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <Box sx={{ maxWidth: '600px' }}>
          <Box sx={{ marginBottom: '2rem' }}>
            <Headline
              source={articleData.source}
              title={articleData.title}
              uploadDate={articleData.uploadDate}
              viewCount={articleData.viewCount}
            />
          </Box>
          <CommentCard isCharacter isStroke content={articleData.comment} isChat={false} />
          <Box mt="2.5rem">
            <Box>
              <Image alt="hi" height={400} src={articleData.imageUrl} style={{ objectFit: 'cover' }} width={600} />
            </Box>
            <Card sx={{ marginTop: '2rem', backgroundColor: 'transparent', boxShadow: 'none' }}>
              <CardContent sx={{ padding: 0 }}>
                <Typography fontSize="16px" sx={{ color: color.gray_dark, whiteSpace: 'pre-line' }} variant="body2">
                  {renderContentWithTooltips(articleData.content)}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <h3 style={{ color: color.blue }}>AI 산지니가 선별한 기사 속 경단어</h3>
          <CommentList isCharacter isChat comments={comments.map((comment) => ({ ...comment, key: comment.id }))} />
        </Box>
      </Container>
    </Box>
  );
};

export default Page;
