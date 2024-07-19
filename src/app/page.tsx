'use client';

import { keyframes } from '@emotion/react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Box, CardMedia, Typography } from '@mui/material';

import InfoSection from '@/components/InfoSection';
import { mainDescription, mainImage } from '@/constants/main';

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

const Page = () => (
  <ReactFullpage
    credits={{ enabled: true }}
    render={() => {
      return (
        <Box height="100vh">
          <InfoSection
            sx={{
              background: 'linear-gradient(to bottom, rgba(29, 112, 241, 0), rgba(26, 197, 251, 1))',
              alignItems: 'center',
              pb: '200px',
            }}
          >
            <Typography fontSize={60} sx={{ mt: '0px' }} variant="h1">
              경제를 단순하게
            </Typography>
            <Typography sx={{ mt: '10px' }} variant="h6">
              인공지능과 생성 AI로 쉽게 이해하는 경제 이야기
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px' }}>
              <CardMedia
                component="img"
                image="/images/sanjinee.png"
                sx={{
                  width: 130,
                  height: 130,
                  minWidth: 130,
                  objectFit: 'contain',
                  m: '20px 0',
                  animation: `${float} 3s ease-in-out infinite`,
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', mt: '20px' }}>
              {mainImage.map((item) => (
                <CardMedia
                  key={item.id}
                  component="img"
                  image={item.path}
                  sx={{ width: 90, height: 90, minWidth: 90, objectFit: 'contain', m: '0 10px' }}
                />
              ))}
            </Box>
          </InfoSection>
          {mainDescription.map(({ id, category, description, imageUrl, title, isRight }) => (
            <InfoSection
              key={id}
              category={category}
              description={description}
              imageUrl={imageUrl}
              isRight={isRight}
              sx={{
                alignItems: isRight ? 'flex-end' : 'flex-start',
                pl: isRight ? '0' : '200px',
                pr: isRight ? '200px' : '0',
                pb: '80px',
                textAlign: isRight ? 'right' : 'left',
              }}
              title={title}
            />
          ))}
        </Box>
      );
    }}
    scrollingSpeed={1000}
  />
);

export default Page;
