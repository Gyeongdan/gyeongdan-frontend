import { atomWithStorage } from 'jotai/utils';

export const userAtom = atomWithStorage('user', {
  token: null,
  isLogin: false,
});

export const loginBackPathAtom = atomWithStorage('loginBackPath', '/');
