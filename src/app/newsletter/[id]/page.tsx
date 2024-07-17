'use client';

import Image from 'next/image';
import React from 'react';

import { Box, Card, CardContent, Container, Stack, Tooltip, Typography } from '@mui/material';

import CommentCard from '@/components/CommentCard';
import StyledGradientBox from '@/components/GradientBox';
import Headline from '@/components/Headline';
import color from '@/constants/color';
import articleData from '@/mocks/article';
import TooltipText from '@/components/TooltipText';

const Page = () => {
  const phrasesContent = articleData.phrases
    ? Object.entries(articleData.phrases).map(([term, definition]) => ({ term, definition }))
    : [];

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
    <StyledGradientBox>
      <Stack alignItems="center" p={10}>
        <Box sx={{ maxWidth: '600px' }}>
          <Box sx={{ marginBottom: '2rem' }}>
            <Headline
              source={articleData.source}
              title={articleData.title}
              uploadDate={articleData.uploadDate}
              viewCount={articleData.viewCount}
            />
          </Box>
          <CommentCard isCharacter isStroke content={articleData.comment} />
          <Box mt="2.5rem">
            <Box>
              <Image alt="hi" height={400} src={articleData.imageUrl} style={{ objectFit: 'cover' }} width={600} />
            </Box>
            <Card sx={{ marginTop: '2rem', backgroundColor: 'transparent', boxShadow: 'none' }}>
              <CardContent sx={{ padding: 0 }}>
                <Typography color={color.gray_dark} fontSize="16px" my={4} variant="body2" whiteSpace="pre-line">
                  <TooltipText content={articleData.content} phrasesContent={phrasesContent} />
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Typography color={color.blue} fontSize="20px" py={2} variant="h3">
            AI 산지니가 선별한 기사 속 경단어
          </Typography>
          <CommentCard isCharacter isChat content="헷갈릴만한 단어를 준비해봤어 😆" />
          <CommentCard
            isChat
            content={phrasesContent.map(({ term, definition }) => `[${term}] \n ${definition}`).join('\n\n')}
          />
          <CommentCard
            isChat
            content={
              '단어 외에도 이 기사에 대해서 더 궁금한게 있다면 챗봇을 활용해줘🤗\n 오늘도 파이팅이야💪 응원할게😄'
            }
          />
        </Box>
      </Stack>
    </StyledGradientBox>
  );
};

export default Page;
