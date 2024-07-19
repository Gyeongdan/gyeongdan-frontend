import React from 'react';

import ReactFullpage from '@fullpage/react-fullpage';

import MainPage from '@/app/about/mainpage';
import AboutPageComponent from '@/components/AboutPageComponent';

const FullpageComponent: React.FC = () => (
  <ReactFullpage
    credits={{ enabled: true }}
    render={() => {
      return (
        <div id="fullpage-wrapper" style={{ height: '100vh' }}>
          <MainPage />
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
