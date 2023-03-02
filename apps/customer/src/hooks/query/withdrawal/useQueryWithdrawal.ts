import { authApi } from '../../../apis/controller/auth.api';
import { useCallback } from 'react';
import { useMutation } from 'react-query';

export const useQueryWithdrawal = () => {
  const deleteData = useCallback(async () => {
    const response = await authApi.withdrawal();
    return response;
  }, []);

  return useMutation(deleteData, {
    onError: (e) => {
      console.log(e);
    },
  });
};
