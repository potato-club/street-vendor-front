import { authApi } from '../../../apis/controller/auth.api';
import { useCallback } from 'react';
import { useMutation } from 'react-query';

export const useQueryEditMyProfileImage = () => {
  const editData = useCallback(async (profileUrl: string) => {
    const response = await authApi.edit.profileImage(profileUrl);
    return response;
  }, []);

  return useMutation(editData, {
    onError: (e) => {
      console.log(e);
    },
  });
};
