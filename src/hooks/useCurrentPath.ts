'use client';

import { useEffect } from 'react';

import { useSetAtom } from 'jotai';

import { loginBackPathAtom } from '@/state/atom';

const useCurrentPath = () => {
  const setCurrentPath = useSetAtom(loginBackPathAtom);

  useEffect(() => {
    const excludedPaths = ['/login/oauth2/code/kakao'];
    if (excludedPaths.includes(window.location.pathname)) {
      return;
    }

    setCurrentPath(window.location.pathname);
  }, [setCurrentPath]);
};

export default useCurrentPath;
