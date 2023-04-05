import { authApi } from '../../../apis/controller/auth.api';
import { useCallback } from 'react';
import { useQuery } from 'react-query';

export const USE_QUERY_GET_MY_INFO_KEY = 'useQueryGetMyInfo';
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

  return useQuery([USE_QUERY_GET_MY_INFO_KEY], getData, {
    onError: (e) => {
      console.log(e);
    },
  });
};
