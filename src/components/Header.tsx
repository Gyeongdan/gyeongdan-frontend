'use client';

import { useState, useEffect } from 'react';

import { Avatar, Box, Button, Link, Stack, Typography } from '@mui/material';

import { mainCategory } from '@/constants/category';
import color from '@/constants/color';
import { useGetUserProfile } from '@/hooks/useGetUser';
import useUpdateUserProfile from '@/hooks/useUpdateUser';

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const userProfile = useGetUserProfile();
  useUpdateUserProfile();

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: show ? '0' : '-100px',
          width: '100%',
          transition: 'top 0.3s',
          backgroundColor: 'white',
          zIndex: 1000,
        }}
      >
        <Stack alignItems="center" direction="row" height="100px" justifyContent="space-between" px={15}>
          <Link color="inherit" display="flex" flexDirection="row" href="/newsletter" underline="none">
            <Typography variant="h1">경단</Typography>
            <Typography color={color.gray_dark} mt={2} variant="subtitle1">
              경제를 단순하게
            </Typography>
          </Link>
          <Stack alignItems={userProfile ? 'flex-end' : 'center'} direction="row" mt={1} spacing={6}>
            {mainCategory.map((item) => (
              <Link
                key={item.id}
                color={color.gray_dark}
                href={item.path}
                sx={{
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
                underline="none"
                variant="h4"
              >
                {item.label}
              </Link>
            ))}
            {userProfile ? (
              <Avatar alt="profileImage" src={userProfile.profileImage} sx={{ width: 28, height: 28 }} />
            ) : (
              <Link href="/login" underline="none">
                <Button color="primary" sx={{ width: '100px' }} variant="outlined">
                  LOGIN
                </Button>
              </Link>
            )}
          </Stack>
        </Stack>
      </Box>
      <Box height="100px" />
    </>
  );
};

export default Header;
