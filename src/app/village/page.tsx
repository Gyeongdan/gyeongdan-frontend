/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useState } from 'react';

import { Box, Divider, Stack, Typography } from '@mui/material';

import GradientBox from '@/components/GradientBox';
import KakaoMapComponent from '@/components/KakaoMapComponent';
import NewsCardHorizontal from '@/components/NewsCardHorizontal';
import NewsCardVertical from '@/components/NewsCardVertical';
import color from '@/constants/color';
import hiddenGems from '@/mocks/villages';
import { Article, Village } from '@/types';

const Page = () => {
  const [articles, setArticles] = useState<Village[]>(hiddenGems);

  return (
    <Box>
      <GradientBox sx={{ height: '150px' }} />
      <Stack direction="row" justifyContent="space-between" mx={16}>
        <Stack mb={4} mt={4} width="65%">
          <Typography gutterBottom color={color.blue} component="h1" variant="h4">
            오늘의 마을
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={2}>
            {articles.slice(0, 3).map((article, index) => (
              <Box key={index} flex={1} maxWidth="48%">
                <NewsCardVertical
                  date="2024-01-20"
                  description={article.content}
                  imageUrl={article.imageUrl}
                  title={article.title}
                />
              </Box>
            ))}
          </Stack>
          <Box sx={{ marginBottom: 5, marginTop: 5 }}>
            <Typography gutterBottom color={color.blue} component="h1" variant="h4">
              지도에서 보는 마을
            </Typography>
            <KakaoMapComponent villages={articles} />
          </Box>
          <Box>
            {articles.slice(3).map((filteredItem, index) => (
              <NewsCardHorizontal
                key={index}
                content={filteredItem.content}
                id={index + 3}
                imageUrl={filteredItem.imageUrl}
                publishedAt="2024-01-20"
                title={filteredItem.title}
              />
            ))}
          </Box>
        </Stack>
        <Stack direction="row" width="25%">
          <Divider flexItem orientation="vertical" sx={{ bgcolor: color.divider, opacity: 0.2 }} />
          <Stack mt={6} pl={6} spacing={2} width="100%">
            <Box mb={4}>
              <Typography gutterBottom color={color.blue} component="h2" variant="body1">
                우리 마을 이야기, 경제를 새롭게 보다
              </Typography>
              <Typography color={color.gray_dark} component="p" variant="body2">
                우리는 경제 플랫폼으로서 새로운 시각으로 경제를 소개하고자 합니다.
              </Typography>
            </Box>
            <Box mb={6}>
              <Typography gutterBottom color={color.gray_dark} component="p" variant="body2">
                최근 ESG 문제와 경제 침체로 인해 사라지는 마을들에 주목하고 있습니다. MZ세대 여러분의 흥미를 끌기 위해
                "1인 가구", "숨겨진 명소", "여행" 등의 주제를 다루며, 이로 인해 발생하는 사회적 의미를 함께 살펴보고자
                합니다.
              </Typography>
            </Box>
            <Box mb={4}>
              <Typography gutterBottom color={color.blue} component="h3" variant="body1">
                왜 이런 주제를 다루나요?
              </Typography>
              <Typography
                gutterBottom
                color={color.gray_dark}
                component="div"
                style={{ whiteSpace: 'pre-line' }}
                variant="body2"
              >
                경제 침체의 실체를 이해: 경제 침체가 지역 사회에 미치는 영향을 직접적으로 보여주며, 그 심각성을
                알립니다. ESG 문제 해결: 환경, 사회, 지배구조(ESG) 문제를 이해하고, 그 해결을 위한 관심과 행동을
                촉구합니다. MZ세대의 관심사 반영: 1인 가구, 숨겨진 명소, 여행 등 여러분이 좋아할 만한 주제를 통해 더욱
                흥미롭게 접근합니다.
              </Typography>
            </Box>
            <Box mb={4}>
              <Typography gutterBottom color={color.blue} component="h3" variant="body1">
                기대 효과는 무엇인가요?
              </Typography>
              <Typography
                gutterBottom
                color={color.gray_dark}
                component="div"
                style={{ whiteSpace: 'pre-line' }}
                variant="body2"
              >
                경제적 긍정 변화: 사라지는 마을의 경제적 어려움을 알리고, 이를 극복하기 위한 아이디어를 공유합니다.
                사회적 의미 창출: 사라지는 마을의 의미를 기록하고, 후대에 전할 수 있습니다.
              </Typography>
            </Box>
            <Box mb={4}>
              <Typography gutterBottom color={color.blue} component="h3" variant="body1">
                어떻게 참여할 수 있나요?
              </Typography>
              <Typography gutterBottom color={color.gray_dark} component="p" variant="body2">
                간단한 폼을 채우기만 하면, 생성형 AI와 다양한 데이터를 결합해 뉴스처럼 마을을 소개하는 기사를
                만들어드립니다. 여러분의 손쉽고 간단한 참여가 큰 변화를 만들어낼 수 있습니다.
              </Typography>
            </Box>
            <Box>
              <Typography
                gutterBottom
                color={color.blue}
                component="div"
                style={{ whiteSpace: 'pre-line' }}
                variant="body1"
              >
                경단의 마을 이야기, 함께 만들어요!{'\n'}
                여러분의 작은 관심이 큰 변화를 만듭니다.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Page;
