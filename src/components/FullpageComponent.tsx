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
            description="This is the about page"
            style={{ backgroundColor: 'linear-gradient(to bottom, rgba(29, 112, 241, 0), rgba(26, 197, 251, 1))' }}
            title="1번쨰"
          />
          <AboutPageComponent description="This is the about page" title="홈 ·뉴스레터" />
          <AboutPageComponent description="This is the about page" title="기능 2개 설명" />
          <AboutPageComponent description="This is the about page" title="우리가 주고 싶은 관점" />
        </div>
      );
    }}
    scrollingSpeed={1000}
  />
);

export default FullpageComponent;
