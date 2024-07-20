import { springApiRequest } from './api';

export const getUser = (token: string) => springApiRequest('GET', '/api/user/profile', token);

export const postUserType = (data: { answers: number[] }, token: string) =>
  springApiRequest('POST', '/api/usertype/save', token, data);
