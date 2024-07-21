import { useAtomValue } from 'jotai';

import { userAtom, userProfileAtom } from '@/state/atom';

export const useGetUser = () => {
  const user = useAtomValue(userAtom);
  return user;
};

export const useGetUserProfile = () => {
  const userProfile = useAtomValue(userProfileAtom);
  return userProfile;
};
