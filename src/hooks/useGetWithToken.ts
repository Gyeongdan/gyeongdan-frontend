/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

import { Method } from 'axios';

import useGetUser from '@/hooks/useGetUser';

export function useGetWithToken(apiRequest: (token?: string | null) => Promise<any>, originUser?: any) {
  const user = originUser !== undefined ? originUser : useGetUser();
  const [result, setResult] = useState<any>();

  useEffect(() => {
    if (user?.isLogin) {
      apiRequest(user.token).then((res: any) => {
        if (res?.status) {
          setResult(res.body);
        } else {
          setResult(null);
        }
      });
    }
  }, [user, apiRequest]);

  return result;
}

export function useMutateWithToken(
  apiRequest: (method: Method, url: string, data?: unknown, token?: string | null) => Promise<any>,
) {
  const user = useGetUser();

  return (method: Method, url: string, data?: unknown) => apiRequest(method, url, data, user?.token || '');
}
