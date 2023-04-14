import { authApi } from '../../../apis/controller/auth.api';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-hot-toast';
import { useLoading } from '@street-vendor/core';

export const useQueryEditMyNickname = () => {
  const { loadingOff, loadingOn } = useLoading();

  const editData = useCallback(async (nickname: string) => {
    loadingOn();
    await authApi.edit.nickname(nickname);
  }, []);

  return useMutation(editData, {
    onSuccess: () => {
      toast.success('닉네임이 수정되었습니다');
    },
    onError: (e: any) => {
      toast.error(e.data.message);
    },
    onSettled: () => {
      loadingOff();
    },
  });
};
