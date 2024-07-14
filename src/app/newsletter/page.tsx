'use client';

import { useState } from 'react';

import { Box, Divider, Stack } from '@mui/material';

import ColorTabs from '@/components/ColorTabs';
import GradientBox from '@/components/GradientBox';
import NewsCardHorizontal from '@/components/NewsCardHorizontal';
import Suggestions from '@/components/Suggestion';
import { articleCategory } from '@/constants/category';
import color from '@/constants/color';
import newsData from '@/mocks/news';
import suggestionData from '@/mocks/suggestion';

const Page = () => {
  const [selectedTab, setSelectedTab] = useState(articleCategory[0]);

  return (
    <Box>
      <GradientBox sx={{ height: '150px' }} />
      <Stack direction="row" justifyContent="space-between" mx={16}>
        <Stack mb={4} mt={4} width="65%">
          <ColorTabs selected={selectedTab} tabs={articleCategory} onChange={setSelectedTab}>
            {articleCategory.map((tab) => (
              <Box key={tab.value} hidden={tab.value !== selectedTab.value}>
                {tab.value === selectedTab.value &&
                  (selectedTab.value === 'all'
                    ? newsData.map((item) => (
                        <NewsCardHorizontal
                          key={item.title}
                          date={item.date}
                          description={item.description}
                          imageUrl={item.imageUrl}
                          title={item.title}
                        />
                      ))
                    : newsData
                        .filter((item) => item.value === tab.value)
                        .map((filteredItem) => (
                          <NewsCardHorizontal
                            key={filteredItem.title}
                            date={filteredItem.date}
                            description={filteredItem.description}
                            imageUrl={filteredItem.imageUrl}
                            title={filteredItem.title}
                          />
                        )))}
              </Box>
            ))}
          </ColorTabs>
        </Stack>
        <Stack direction="row" width="25%">
          <Divider flexItem orientation="vertical" sx={{ bgcolor: color.divider, opacity: 0.2 }} />
          <Stack mt={6} pl={6} spacing={6} width="100%">
            <Suggestions content={suggestionData} title="지민님에게 추천드려요!" />
            <Suggestions content={suggestionData} title="지민님과 비슷한 유형이 관심있어요!" />
            <Suggestions content={suggestionData} title="지금 인기있는 기사" />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Page;
