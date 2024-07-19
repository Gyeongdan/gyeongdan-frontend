'use client';

import { keyframes } from '@emotion/react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Box, CardMedia, Typography } from '@mui/material';

import AboutPageComponent from '@/components/AboutPageComponent';

const float = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

const FullpageComponent: React.FC = () => (
  <ReactFullpage
    credits={{ enabled: true }}
    render={() => {
      return (
        <div id="fullpage-wrapper" style={{ height: '100vh' }}>
          <AboutPageComponent
            sx={{
              background: 'linear-gradient(to bottom, rgba(29, 112, 241, 0), rgba(26, 197, 251, 1))',
              alignItems: 'center',
              paddingBottom: '200px',
            }}
          >
            <Typography sx={{ fontSize: 60, marginTop: '0px' }} variant="h1">
              경제를 단순하게
            </Typography>
            <Typography sx={{ marginTop: '10px' }} variant="h6">
              인공지능과 생성 AI로 쉽게 이해하는 경제 이야기
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
              <CardMedia
                component="img"
                image="/images/sanjinee.png"
                sx={{
                  width: 130,
                  height: 130,
                  minWidth: 130,
                  objectFit: 'contain',
                  margin: '20px 0',
                  animation: `${float} 3s ease-in-out infinite`,
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginTop: '20px' }}>
              <CardMedia
                component="img"
                image="/images/newsletter.png"
                sx={{ width: 90, height: 90, minWidth: 90, objectFit: 'contain', margin: '0 10px' }} // Adjust margin
              />
              <CardMedia
                component="img"
                image="/images/chatbot.png"
                sx={{ width: 90, height: 90, minWidth: 90, objectFit: 'contain', margin: '0 10px' }} // Adjust margin
              />
              <CardMedia
                component="img"
                image="/images/insight.png"
                sx={{ width: 90, height: 90, minWidth: 90, objectFit: 'contain', margin: '0 10px' }} // Adjust margin
              />
              <CardMedia
                component="img"
                image="/images/map.png"
                sx={{ width: 90, height: 90, minWidth: 90, objectFit: 'contain', margin: '0 10px' }} // Adjust margin
              />
              <CardMedia
                component="img"
                image="/images/test.png"
                sx={{ width: 90, height: 90, minWidth: 90, objectFit: 'contain', margin: '0 10px' }} // Adjust margin
              />
            </Box>
          </AboutPageComponent>
          <AboutPageComponent
            category="홈 · 뉴스레터"
            description={`경단을 통해 어려운 경제 기사를 쉽게 읽어보세요. AI로 분석하고 변환하여, 간편한 인터페이스로 제공합니다.\n 어려운 용어도 간단하게 설명해 드립니다.`}
            imgageUrl="/images/newsletter.png"
            sx={{ alignItems: 'flex-start', pl: '200px', pb: '80px', textAlign: 'left' }}
            title={`내 경제 공부,\n 기사부터 인사이트까지\n 쉽고 똑똑하게`}
          />
          <AboutPageComponent
            isright
            category="인사이트"
            description={`공공데이터를 이용하여 경제 데이터를 분석하고, 시각화 자료와 함께 인사이트를 제공합니다.\n 어려운 데이터도 쉽게 이해할 수 있습니다.`}
            imgageUrl="/images/insight.png"
            sx={{ alignItems: 'flex-end', pr: '200px', pb: '80px', textAlign: 'right' }}
            title="오늘의 인사이트 톺아보기"
          />
          <AboutPageComponent
            category="챗봇"
            description={`AI 산지니를 통해 경제 용어를 분석하고 변환하여, 대화형 인터페이스로 제공합니다.\n 어려운 용어도 간단하게 설명해 드립니다.`}
            imgageUrl="/images/chatbot.png"
            sx={{ alignItems: 'flex-start', pl: '200px', pb: '80px', textAlign: 'left' }}
            title={`경제 단어부터 뉴스레터까지\n 쉽고 간편하게`}
          />
          <AboutPageComponent
            isright
            category="유형 검사"
            description={`본인의 경제 관심사를 파악하고, 맞춤 기사를 추천받을 수 있습니다.\n AI가 분석하여, 당신에게 딱 맞는 기사를 추천합니다.`}
            imgageUrl="/images/test.png"
            sx={{ alignItems: 'flex-end', pr: '200px', pb: '80px', textAlign: 'right' }}
            title={`유형검사하고\n 맞춤 기사 추천 받기`}
          />
        </div>
      );
    }}
    scrollingSpeed={1000}
  />
);

export default FullpageComponent;
