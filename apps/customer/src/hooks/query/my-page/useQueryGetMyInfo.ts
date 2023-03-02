import { authApi } from '../../../apis/controller/auth.api';
import { useCallback } from 'react';
import { useQuery } from 'react-query';

export type MyInfo = {
  email: string;
  memberId: number;
  nickname: string;
  profileUrl: string;
};
export const useQueryGetMyInfo = () => {
  const getData = useCallback(async () => {
    const response = await authApi.myInfo();
    const myInfo: MyInfo = {
      email: response.data.email,
      memberId: response.data.memberId,
      profileUrl: response.data.profileUrl,
      nickname: response.data.nickName,
    };

    return myInfo;
  }, []);

  return useQuery(['useQueryGetMyInfo'], getData, {
    onError: (e) => {
      console.log(e);
    },
  });
};
