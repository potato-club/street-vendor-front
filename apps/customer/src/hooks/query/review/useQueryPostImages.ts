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
  let requestValue: RequestType = {
    comment: '',
    orderId: 0,
    rate: 0,
  };
  const register = useCallback(
    async (data: { images: FormData; request: RequestType }) => {
      requestValue = { ...data.request };
      const response = await ReviewApi.registerImages(data.images);
      return response;
    },
    []
  );
  const { mutate } = useQueryPostReview();
  return useMutation(register, {
    onSuccess: async (e) => {
      console.log(requestValue);
      mutate({
        ...requestValue,
        reviewImages: e.data,
      });
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
