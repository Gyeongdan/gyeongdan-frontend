import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios';

const SPRING_API_URL = process.env.NEXT_PUBLIC_SPRING_API_URL;
const FASTAPI_API_URL = process.env.NEXT_PUBLIC_FASTAPI_API_URL;

const springApi: AxiosInstance = axios.create({
  baseURL: SPRING_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fastApi: AxiosInstance = axios.create({
  baseURL: FASTAPI_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const addTokenToHeaders = (config: AxiosRequestConfig, token: string | null): AxiosRequestConfig => {
  const updatedConfig = { ...config };
  if (token) {
    updatedConfig.headers = {
      ...updatedConfig.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return updatedConfig;
};

const makeRequest = async (
  apiInstance: AxiosInstance,
  method: Method,
  url: string,
  token: string | null = null,
  data: unknown = null,
) => {
  let config: AxiosRequestConfig = {
    method,
    url,
    data,
  };

  config = addTokenToHeaders(config, token);

  try {
    const response: AxiosResponse = await apiInstance(config);
    return response.data;
  } catch (error) {
    let message = '';
    if (error instanceof Error) message = error.message;
    else message = String(error);
    return { body: { message } };
  }
};

export const springApiRequest = (method: Method, url: string, token: string | null = null, data: unknown = null) => {
  return makeRequest(springApi, method, url, token, data);
};

export const fastApiRequest = (method: Method, url: string, token: string | null = null, data: unknown = null) =>
  makeRequest(fastApi, method, url, token, data);
