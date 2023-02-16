import { authApi } from '../../../apis/controller/auth.api';
import { useCallback } from 'react';
import { useMutation } from 'react-query';

export const useQueryEditMyNickname = () => {
  const editData = useCallback(async (nickname: string) => {
    const response = await authApi.edit.nickname(nickname);
    return response;
  }, []);

  return useMutation(editData, {
    onError: (e) => {
      console.log(e);
    },
  });
};
