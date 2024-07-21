import { atomWithStorage } from 'jotai/utils';

export const userAtom = atomWithStorage('user', {
  token: '',
  isLogin: false,
});

export const userProfileAtom = atomWithStorage('userProfile', {
  name: '',
  profileImage: '',
});

export const loginBackPathAtom = atomWithStorage('loginBackPath', '/');
