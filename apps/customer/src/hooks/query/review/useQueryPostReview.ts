import { ReviewApi } from '../../../apis/controller/review.api';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { FieldValues } from 'react-hook-form';

type Props = {
  review: FieldValues;
  storeId: string;
};

export const useQueryPostReview = () => {
  const register = useCallback(async ({ review, storeId }: Props) => {
    const response = await ReviewApi.registerReview(review, storeId);
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
