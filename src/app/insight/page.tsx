import React from 'react';

import { Box, Stack, Typography, Grid } from '@mui/material';

import ChartRenderer from '@/components/ChartRenderer';
import CommentCard from '@/components/CommentCard';
import GradientBox from '@/components/GradientBox';
import NewsCardVertical from '@/components/NewsCardVertical';
import color from '@/constants/color';
import insightData from '@/mocks/insight';
import insightsDataList from '@/mocks/insights';

const Page = () => {
  return (
    <GradientBox sx={{ height: '100vh', width: '100vw' }}>
      <Stack alignItems="center" p={10}>
        <Box sx={{ width: '100%' }}>
          <Typography color={color.blue} variant="h4">
            오늘의 인사이트
          </Typography>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, marginRight: 2 }}>
            <CommentCard isCharacter isStroke content={insightData.comment} sx={{ marginBottom: 2 }} />
            <CommentCard content={insightData.title} sx={{ marginBottom: 2 }} />
            <CommentCard content={insightData.content} sx={{ marginBottom: 2 }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <ChartRenderer data={insightData.chart.data} layout={insightData.chart.layout} />
          </Box>
        </Box>
        <Box sx={{ width: '100%', marginTop: 4 }}>
          <Typography color={color.blue} variant="h4">
            지난 인사이트
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            {insightsDataList.slice(0, 3).map((_insightData) => (
              <Grid key={_insightData.id} item md={4} xs={12}>
                <NewsCardVertical
                  date={_insightData.date}
                  description={_insightData.content}
                  title={_insightData.title}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </GradientBox>
  );
};

export default Page;
