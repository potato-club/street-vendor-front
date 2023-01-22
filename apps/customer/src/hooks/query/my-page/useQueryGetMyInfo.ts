import { authApi } from '../../../apis/controller/auth.api';
import { useCallback } from 'react';
import { useQuery } from 'react-query';

export type MyInfo = {
  email: string;
  memberId: number;
  nickName: string;
  profileUrl: string;
};
export const useQueryGetMyInfo = () => {
  const getData = useCallback(async () => {
    const response = await authApi.myInfo();
    const myInfo: MyInfo = response.data;

    return myInfo;
  }, []);

  return useQuery(['useQueryGetMyInfo'], getData, {
    onError: (e) => {
      console.log(e);
    },
  });
};
