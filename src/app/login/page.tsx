'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Link, Stack, TextField, Typography } from '@mui/material';

import GradientBox from '@/components/GradientBox';
import color from '@/constants/color';

import { getKakaoLogin } from '../api/login';

const Page = () => {
  const [loginUrl, setLoginUrl] = useState<string>('');

  useEffect(() => {
    getKakaoLogin().then((res) => {
      if (res.status) {
        setLoginUrl(res.data);
      } else {
        alert(res.message || '로그인 중 오류가 발생했습니다.');
      }
    });
  }, [setLoginUrl]);

  return (
    <GradientBox
      sx={{ minHeight: 'calc(100vh - 100px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Stack alignItems="center" spacing={2}>
        <Stack alignItems="center" bgcolor={color.transport_white} borderRadius={4} p={8} spacing={3} width="100%">
          <Typography fontSize="24px" pb={4} variant="h3">
            로그인 · 회원가입
          </Typography>
          <TextField
            disabled
            fullWidth
            defaultValue="해당 로그인 폼은 장식입니다. (개발 예정)"
            label="Email address"
            sx={{ width: '90%' }}
            variant="outlined"
          />
          <TextField
            disabled
            fullWidth
            defaultValue="아래 카카오 로그인을 이용해주세요."
            label="Password"
            sx={{ width: '90%' }}
            variant="outlined"
          />
          <Link height={50} href={loginUrl} position="relative" width="65%">
            <Image
              fill
              priority
              alt="카카오 로그인"
              sizes="100%"
              src="/images/kakao_login.png"
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </Stack>
        <Link
          bgcolor={color.transport_white}
          borderRadius={4}
          color="black"
          href="/test"
          p={3}
          underline="none"
          width="100%"
        >
          <Typography textAlign="center" variant="h4">
            나의 경단 유형 테스트해보면서 고민해보기
          </Typography>
        </Link>
        <Typography fontSize="24px" p={2} py={6} textAlign="center" variant="h4" whiteSpace="pre-line">
          {`경단을 100%를 경험해보세요!\n사용자 분석·추천 시스템으로 즐길 수 있다니 완전 럭키비키잖아~🍀`}
        </Typography>
      </Stack>
    </GradientBox>
  );
};

export default Page;
