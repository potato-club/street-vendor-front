/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ReviewApi } from '../../../apis/controller/review.api';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { pathName } from 'apps/customer/src/configs/pathName';
import Router from 'next/router';
import { toast } from 'react-hot-toast';

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
      Router.replace(pathName.ORDER_HISTORY.LIST);
    },
    onError: (e) => {
      toast.error('리뷰 등록에 실패하였습니다.');
    },
  });
};
