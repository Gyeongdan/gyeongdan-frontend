import { fastApiRequest } from './api';

export const getQuestions = () => fastApiRequest('GET', '/usertype/form');

export const postUserType = (data: { answers: number[] }, token?: string | null) =>
  fastApiRequest('POST', '/usertype/calculate', token, data);
