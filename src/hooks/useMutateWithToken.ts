/* eslint-disable @typescript-eslint/no-explicit-any */

import useGetUser from '@/hooks/useGetUser';

const useMutateWithToken = (apiRequest: (token: string, ...props: any[]) => Promise<any>) => {
  const user = useGetUser();

  console.log(`user: ${user}`);
  console.log(`token: ${user?.token}`);

  return (...props: any[]) => {
    return apiRequest(user?.token || '', ...props);
  };
};

export default useMutateWithToken;
