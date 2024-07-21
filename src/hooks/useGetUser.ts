import { useEffect, useState } from 'react';

import { useAtomValue } from 'jotai';

import { userAtom, userProfileAtom } from '@/state/atom';

export const useGetUser = () => {
  const user = useAtomValue(userAtom);
  return user;
};

export const useGetUserProfile = () => {
  const user = useGetUser();
  const userProfile = useAtomValue(userProfileAtom);
  const [result, setResult] = useState<{ name: string; profileImage: string } | null>(null);

  useEffect(() => {
    if (user.isLogin) {
      setResult(userProfile);
    }
  }, [user, userProfile]);

  return result;
};
