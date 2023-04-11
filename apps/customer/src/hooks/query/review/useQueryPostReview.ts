import { ReviewApi } from '../../../apis/controller/review.api';
import { useCallback } from 'react';
import { useMutation } from 'react-query';

export const useQueryPostReview = () => {
  const register = useCallback(async (data: FormData) => {
    const response = await ReviewApi.registerReview(data);
    return response;
  }, []);

  return useMutation(register, {
    onSuccess: (e) => {
      console.log(e);
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
