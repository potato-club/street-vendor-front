import { storeApi } from '../../../apis/controller/store.api';
import { useCallback } from 'react';
import { useMutation } from 'react-query';

type Props = {
  review: any;
  storeId: string;
};

export const useQueryPostReview = () => {
  const register = useCallback(async ({ review, storeId }: Props) => {
    const response = await storeApi.registerReview(review, storeId);
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
