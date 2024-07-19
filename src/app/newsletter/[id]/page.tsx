import Image from 'next/image';

import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

import { getArticle } from '@/app/api/newsletter';
import CommentCard from '@/components/CommentCard';
import GradientBox from '@/components/GradientBox';
import Headline from '@/components/Headline';
import TooltipText from '@/components/TooltipText';
import color from '@/constants/color';

const Page = async ({ params }: { params: { id: number } }) => {
  const article = await getArticle(params.id);
  const { data } = article;

  return (
    <GradientBox>
      <Stack alignItems="center" p={10}>
        <Box sx={{ maxWidth: '600px' }}>
          <Box sx={{ marginBottom: '2rem' }}>
            <Headline
              source={data.publisher}
              title={data.title}
              uploadDate={data.publishedAt.split('T')[0]}
              viewCount={data.viewCount}
            />
          </Box>
          <CommentCard isCharacter isStroke content={data.comment} />
          <Box mt="2.5rem">
            <Box>
              {data.imageUrl && (
                <Image
                  priority
                  alt="articleImage"
                  height={400}
                  src={data.imageUrl}
                  style={{ objectFit: 'cover' }}
                  width={600}
                />
              )}
            </Box>
            <Card sx={{ marginTop: '2rem', backgroundColor: 'transparent', boxShadow: 'none' }}>
              <CardContent sx={{ padding: 0 }}>
                <Typography color={color.gray_dark} fontSize="16px" my={4} variant="body2" whiteSpace="pre-line">
                  <TooltipText content={data.content} phrasesContent={data.phrase} />
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Typography color={color.blue} fontSize="20px" py={2} variant="h3">
            AI 산지니가 선별한 기사 속 경단어
          </Typography>
          <CommentCard isCharacter isChat content="알면 좋을만한 표현을 준비해봤어 😆" />
          <CommentCard
            isChat
            content={Object.entries(data.phrase)
              .map(([term, definition]) => `[${term}] \n ${definition}`)
              .join('\n\n')}
          />
          <CommentCard
            isChat
            content={
              '단어 외에도 이 기사에 대해서 더 궁금한게 있다면 챗봇을 활용해줘🤗\n 오늘도 파이팅이야💪 응원할게😄'
            }
          />
        </Box>
      </Stack>
    </GradientBox>
  );
};

export default Page;
