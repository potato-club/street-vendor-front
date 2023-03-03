import { authApi } from '../../../apis/controller/auth.api';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-hot-toast';

export const useQueryEditMyNickname = () => {
  const editData = useCallback(async (nickname: string) => {
    await authApi.edit.nickname(nickname);
  }, []);

  return useMutation(editData, {
    onSuccess: () => {
      toast.success('닉네임이 수정되었습니다');
    },
    onError: (e: any) => {
      toast.error(e.data.message);
    },
  });
};
