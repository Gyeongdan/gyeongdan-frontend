import { useEffect, useState } from 'react';

import { useAtomValue } from 'jotai';

import { userAtom } from '@/state/atom';

const useGetUser = () => {
  const [isMounted, setIsMounted] = useState(false);
  const user = useAtomValue(userAtom);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? user : null;
};

export default useGetUser;
