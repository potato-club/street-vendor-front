import { ReviewApi } from '../../../apis/controller/review.api';
import { useCallback } from 'react';
import { useMutation } from 'react-query';

interface ReviewType {
  comment: string;
  orderId: number;
  rate: number;
  reviewImages: ({ imageUrl: string } | null)[];
}

export const useQueryPostReview = () => {
  const register = useCallback(async (data: ReviewType) => {
    console.log(data);
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
