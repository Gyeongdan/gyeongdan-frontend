'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAtomValue, useSetAtom } from 'jotai';

import { postKakaoLogin } from '@/app/api/login';
import { loginBackPathAtom, userAtom } from '@/state/atom';

const Page = ({ searchParams }: { searchParams: { code: string } }) => {
  const router = useRouter();
  const { code } = searchParams;

  const setUser = useSetAtom(userAtom);
  const loginBackPath = useAtomValue(loginBackPathAtom);

  useEffect(() => {
    if (code) {
      postKakaoLogin(code).then((res) => {
        console.log(code);
        if (res.status) {
          setUser({
            token: res.data.accessToken,
            isLogin: true,
          });
          router.replace(loginBackPath);
        } else {
          alert(res.message || '로그인 오류가 발생했습니다.');
          router.replace('/');
        }
      });
    }
  }, [code, loginBackPath, router, setUser]);

  return <div />;
};

export default Page;
