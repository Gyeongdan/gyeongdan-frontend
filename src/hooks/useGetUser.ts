import { useAtomValue } from 'jotai';

import { userAtom, userProfileAtom } from '@/state/atom';

export const useGetUser = () => {
  const user = useAtomValue(userAtom);
  return user;
};

export const useGetUserProfile = () => {
  const user = useGetUser();
  const userProfile = useAtomValue(userProfileAtom);

  if (user.isLogin) {
    return userProfile;
  }

  return null;
};
