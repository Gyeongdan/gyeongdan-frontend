'use client';

import { useEffect, useState } from 'react';

import { Box, Divider, Stack } from '@mui/material';

import ColorTabs from '@/components/ColorTabs';
import GradientBox from '@/components/GradientBox';
import NewsCardHorizontal from '@/components/NewsCardHorizontal';
import Suggestions from '@/components/Suggestion';
import { articleCategory } from '@/constants/category';
import color from '@/constants/color';
import useGetUser from '@/hooks/useGetUser';
import suggestionData from '@/mocks/suggestion';
import { Article } from '@/types';

import { getArticleAll, getPopularArticle } from '../api/newsletter';
import { getUser } from '../api/user';

const Page = () => {
  const [selectedTab, setSelectedTab] = useState(articleCategory[0]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [popularArticles, setPopularArticles] = useState<Article[]>([]);
  const [userName, setUserName] = useState<string | null>(null);

  const user = useGetUser();

  useEffect(() => {
    getArticleAll().then((res) => {
      if (res.status) {
        setArticles(res.data);
      } else {
        throw res.message;
      }
    });
    getPopularArticle().then((res) => {
      if (res.status) {
        setPopularArticles(res.data);
      } else {
        throw res.message;
      }
    });
  }, []);

  useEffect(() => {
    if (user?.isLogin) {
      getUser(user.token).then((res) => {
        if (res.status) {
          setUserName(res.data.name);
        } else {
          throw res.message;
        }
      });
    }
  }, [user]);

  return (
    <Box>
      <GradientBox sx={{ height: '150px' }} />
      <Stack direction="row" justifyContent="space-between" mx={16}>
        <Stack mb={4} mt={4} width="65%">
          <ColorTabs selected={selectedTab} tabs={articleCategory} onChange={setSelectedTab}>
            {articleCategory.map((tab) => (
              <Box key={tab.value} hidden={tab.value !== selectedTab.value}>
                {tab.value === selectedTab.value &&
                  (selectedTab.value === 'ALL'
                    ? articles.map((item) => (
                        <NewsCardHorizontal
                          key={item.id}
                          content={item.content}
                          id={item.id}
                          imageUrl={item.imageUrl}
                          publishedAt={item.publishedAt.split('T')[0]}
                          title={item.title}
                        />
                      ))
                    : articles
                        .filter((item) => item.category === tab.value)
                        .map((filteredItem) => (
                          <NewsCardHorizontal
                            key={filteredItem.id}
                            content={filteredItem.content}
                            id={filteredItem.id}
                            imageUrl={filteredItem.imageUrl}
                            publishedAt={filteredItem.publishedAt.split('T')[0]}
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
            {userName && (
              <>
                <Suggestions content={suggestionData} title={`${userName}님을 위한 추천 기사`} />
                <Suggestions content={suggestionData} title={`${userName}님과 비슷한 유형이 관심있어요!`} />
              </>
            )}
            <Suggestions content={popularArticles} title="지금 인기있는 기사" />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Page;
