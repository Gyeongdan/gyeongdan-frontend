import { useEffect } from 'react';

import { useSetAtom } from 'jotai';

import { getUser } from '@/app/api/user';
import { userProfileAtom } from '@/state/atom';

import { useGetUser } from './useGetUser';

const useUpdateUserProfile = () => {
  const user = useGetUser();
  const setUserProfile = useSetAtom(userProfileAtom);

  useEffect(() => {
    if (user?.isLogin) {
      getUser(user.token).then((res) => {
        if (res.status) {
          setUserProfile({
            name: res.data.name,
            profileImage: res.data.profileImage,
          });
        } else {
          throw res.message;
        }
      });
    }
  }, [user, setUserProfile]);
};

export default useUpdateUserProfile;
