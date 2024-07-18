import React from 'react';

import ReactFullpage from '@fullpage/react-fullpage';
import AboutPageComponent from '@/components/AboutPageComponent';
import MainPage from '@/app/about/mainpage';

const FullpageComponent: React.FC = () => (
  <ReactFullpage
    credits={{ enabled: true }}
    render={() => {
      return (
        <div id="fullpage-wrapper" style={{ height: '100vh' }}>
          <MainPage />
          <AboutPageComponent title="1번쨰" style={{backgroundColor: 'linear-gradient(to bottom, rgba(29, 112, 241, 0), rgba(26, 197, 251, 1))',}} description="This is the about page" />
          <AboutPageComponent title="" description="This is the about page" />
          <AboutPageComponent title="기능 2개 설명" description="This is the about page" />
          <AboutPageComponent title="우리가 주고 싶은 관점" description="This is the about page" />
        </div>
      );
    }}
    scrollingSpeed={1000}
  />
);

export default FullpageComponent;
