'use client';

import React from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';
import dynamic from 'next/dynamic';
import CommentCard from '@/components/CommentCard';
import GradientBox from '@/components/GradientBox';
import NewsCardVertical from '@/components/NewsCardVertical';
import color from '@/constants/color';
import insightData from '@/mocks/insight';
import insightsDataList from '@/mocks/insights';

// ChartRenderer를 동적으로 로드
const ChartRenderer = dynamic(() => import('@/components/ChartRenderer'), { ssr: false });

const Page = () => {
  return (
    <GradientBox sx={{ height: '100vh', width: '100vw' }}>
      <Stack alignItems="center">
        <Box sx={{ maxWidth: '1500px', alignItems: 'center' }}>
          <Box sx={{ width: '100%' }}>
            <Typography color={color.blue} mb="1.5rem" variant="h4">
              오늘의 인사이트
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ flex: 1, marginRight: { md: '1rem', xs: 0 }, marginBottom: { xs: '1.5rem', md: 0 } }}>
              <CommentCard isCharacter isStroke content={insightData.comment} sx={{ marginBottom: '1.5rem' }} />
              <CommentCard
                content={
                  <Box>
                    <Typography color={color.gradient_blue_dark} variant="h4">
                      {insightData.title}
                    </Typography>
                    {'\n'}
                    <Typography color={color.gray_dark} variant="body1">
                      {insightData.content}
                    </Typography>
                  </Box>
                }
                sx={{ marginBottom: '1rem', width: '650px' }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <ChartRenderer data={insightData.chart.data} height={320} layout={insightData.chart.layout} width={480} />
              <CommentCard
                isFilled
                content="나만의 인사이트 만들어보기(공사중 🚧)"
                sx={{ width: '480px', marginTop: '1rem', textAlign: 'center' }}
              />
            </Box>
          </Box>
          <Box sx={{ maxWidth: '1500px', marginTop: '2rem' }}>
            <Typography color={color.blue} variant="h4">
              지난 인사이트
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: '1rem', maxWidth: '1500px' }}>
              {insightsDataList.slice(0, 3).map((_insightData) => (
                <Grid key={_insightData.id} item md={4} xs={12}>
                  <Box style={{ borderRadius: 24 }}>
                    <NewsCardVertical
                      date={_insightData.date}
                      description={_insightData.content}
                      title={_insightData.title}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Stack>
    </GradientBox>
  );
};

export default Page;
