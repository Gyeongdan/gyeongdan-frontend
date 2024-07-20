import { springApiRequest } from './api';

export const getUserName = (token: string) => springApiRequest('GET', '/api/user/profile', null, token);

export const postUserType = (data: { answers: number[] }, token: string | null) =>
  springApiRequest('POST', '/api/usertype/save', data, token);
