import { useQueryPostQuestion } from './useQueryPostQuestion';
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { questionApi } from 'apps/customer/src/apis/controller/question.api';

interface RequestType {
  content: string;
  title: string;
  type: 'ETC' | 'ORDER' | 'REVIEW' | 'ACCOUNT';
}

export const useQueryPostImages = () => {
  const { mutate } = useQueryPostQuestion();
  const register = useCallback(
    async (data: { images: FormData; request: RequestType }) => {
      const response = await questionApi.registerImages(data.images);
      return { response, request: data.request };
    },
    []
  );

  return useMutation(register, {
    onSuccess: async ({ response, request }) => {
      mutate({
        ...request,
        questionsImages: response.data,
      });
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
