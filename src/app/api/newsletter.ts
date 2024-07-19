import { springApiRequest } from './api';

export const getArticleAll = (token?: string | null) => springApiRequest('GET', '/api/article', null, token);

export const getArticle = (id: number, token?: string | null) =>
  springApiRequest('GET', `/api/article/detail?id=${id}`, null, token);

export const getPopularArticle = () => springApiRequest('GET', '/api/article/popular');
