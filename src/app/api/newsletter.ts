import { springApiRequest } from './api';

export const getArticleAll = (token?: string | null) => springApiRequest('GET', '/api/article', token);

export const getArticle = (id: number, token?: string | null) =>
  springApiRequest('GET', `/api/article/detail?id=${id}`, token);

export const getPopularArticle = () => springApiRequest('GET', '/api/article/popular');
