'use client';

import React, { useState, useEffect } from 'react';
import { Button, Link, Stack, Typography, Box } from '@mui/material';
import { mainCategory } from '@/constants/category';
import color from '@/constants/color';

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
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
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          height="100px"
          maxWidth="100%"
          p={3}
          px={6}
        >
          <Stack direction="row">
            <Typography variant="h1">경단</Typography>
            <Typography color={color.gray_dark} mt={2} variant="subtitle1">
              경제를 단순하게
            </Typography>
          </Stack>
          <Stack alignItems="center" direction="row" mt={2} spacing={6}>
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
            <Button color="primary" sx={{ width: '100px' }} variant="outlined">
              LOGIN
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Box height="100px" />
    </>
  );
};

export default Header;
