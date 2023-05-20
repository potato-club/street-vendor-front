import { authApi } from '../../../apis/controller/auth.api';
import { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-hot-toast';
import { USE_QUERY_GET_MY_INFO_KEY } from './useQueryGetMyInfo';

export const useQueryEditMyProfileImage = () => {
  const queryClient = useQueryClient();

  const editData = useCallback(async (profileUrl: File) => {
    const formData = new FormData();
    formData.append('profileUrl', profileUrl);
    const response = await authApi.edit.profileImage(formData);
    return response;
  }, []);

  return useMutation(editData, {
    onSuccess: (e) => {
      toast.success('프로필사진 변경에 성공했습니다.');
      queryClient.invalidateQueries(USE_QUERY_GET_MY_INFO_KEY);
    },
    onError: (e) => {
      toast.error('프로필사진 변경에 실패했습니다');
    },
  });
};
