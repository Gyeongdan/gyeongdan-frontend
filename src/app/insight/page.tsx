'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

import { Box, Stack, Typography, Grid } from '@mui/material';
import { Data } from 'plotly.js';

import CommentCard from '@/components/CommentCard';
import GradientBox from '@/components/GradientBox';
import NewsCardVertical from '@/components/NewsCardVertical';
import color from '@/constants/color';
import insightData from '@/mocks/insight';
import insightsDataList from '@/mocks/insights';

interface Insight {
  id: number;
  comment: string;
  title: string;
  content: string;
  chart: { data: Data[]; layout: { title: string; xaxis: { title: string }; yaxis: { title: string } } };
}

// ChartRenderer를 동적으로 로드
const ChartRenderer = dynamic(() => import('@/components/ChartRenderer'), { ssr: false });

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState(insightData);

  const handleInsightClick = (insight: Insight) => {
    setSelectedInsight(insight);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <GradientBox sx={{ minHeight: 'calc(100vh - 100px)', width: '100vw' }}>
      <Stack alignItems="center" py={5}>
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
            <Box maxWidth={700} sx={{ flex: 1, mr: { md: '1rem', xs: 0 }, mb: { xs: '1.5rem', md: 0 } }} width={700}>
              <Box mb="1.5rem">
                <CommentCard isCharacter isStroke content={selectedInsight.comment} />
              </Box>
              <Box mb="1rem" width="650px">
                <CommentCard
                  content={
                    <Box>
                      <Typography color={color.gradient_blue_dark} variant="h4">
                        {selectedInsight.title}
                      </Typography>
                      {'\n'}
                      <Typography color={color.gray_dark} variant="body1">
                        {selectedInsight.content}
                      </Typography>
                    </Box>
                  }
                />
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <ChartRenderer
                data={selectedInsight.chart.data}
                height={320}
                layout={selectedInsight.chart.layout}
                width={480}
              />
              <Box mt="1rem" textAlign="center" width="480px">
                <CommentCard isFilled content="나만의 인사이트 만들어보기(공사중 🚧)" />
              </Box>
            </Box>
          </Box>
          <Box sx={{ maxWidth: '1500px', marginTop: '2rem' }}>
            <Typography color={color.blue} variant="h4">
              지난 인사이트
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: '1rem', maxWidth: '1500px' }}>
              {insightsDataList.slice(0, 3).map((insight) => (
                <Grid key={insight.id} item md={4} xs={12}>
                  <Box
                    style={{ borderRadius: 24 }}
                    sx={{ cursor: 'pointer' }}
                    onClick={() => handleInsightClick(insight)}
                  >
                    <NewsCardVertical
                      isMock
                      date={insight.date}
                      description={insight.content}
                      id={insight.id}
                      path="insight"
                      title={insight.title}
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
