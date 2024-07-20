/* eslint-disable @typescript-eslint/no-explicit-any */

import useGetUser from '@/hooks/useGetUser';

const useMutateWithToken = (apiRequest: (token: string, ...props: any[]) => Promise<any>) => {
  const user = useGetUser();

  return (...props: any[]) => {
    return apiRequest(user?.token || '', ...props);
  };
};

export default useMutateWithToken;
