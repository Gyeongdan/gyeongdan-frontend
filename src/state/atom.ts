import { atomWithStorage } from 'jotai/utils';

export const userAtom = atomWithStorage('user', {
  token: '',
  isLogin: false,
});

export const loginBackPathAtom = atomWithStorage('loginBackPath', '/');
