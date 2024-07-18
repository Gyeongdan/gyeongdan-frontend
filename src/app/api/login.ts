import { springApiRequest } from './api';

export const getKakaoLogin = () => springApiRequest('GET', '/login');

export const postKakaoLogin = (code: string | null) => springApiRequest('POST', `/login/ok/${code}`);
