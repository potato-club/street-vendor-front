/* eslint-disable react-hooks/exhaustive-deps */
import { ReviewApi } from '../../../apis/controller/review.api';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { useQueryPostReview } from './useQueryPostReview';

interface RequestType {
  comment: string;
  orderId: number;
  rate: number;
}
export const useQueryPostImages = () => {
  const { mutate } = useQueryPostReview();
  const register = useCallback(
    async (data: { images: FormData; request: RequestType }) => {
      const response = await ReviewApi.registerImages(data.images);
      return { response, request: data.request };
    },
    []
  );
  return useMutation(register, {
    onSuccess: async ({ response, request }) => {
      mutate({
        ...request,
        reviewImages: response.data,
      });
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
