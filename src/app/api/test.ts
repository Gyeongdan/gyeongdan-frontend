import { fastApiRequest } from './api';

export const getQuestions = () => fastApiRequest('GET', '/user-type/questionnaire');

export const postUserType = (token: string, data: { answers: number[] }) =>
  fastApiRequest('POST', '/user-type', data, token);
