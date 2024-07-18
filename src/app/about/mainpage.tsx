import { keyframes } from '@emotion/react';
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

const MainPage = () => {
  return (
    <AboutPageComponent
      description="hihi"
      style={{
        background: 'linear-gradient(to bottom, rgba(29, 112, 241, 0), rgba(26, 197, 251, 1))',
        alignItems: 'center',
        paddingBottom: '200px', // paddingBottom으로 수정
      }}
    >
      <Typography sx={{ fontSize: 60, marginTop: '0px' }} variant="h1">
        {' '}
        {/* marginTop 수정 */}
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
  );
};

export default MainPage;
