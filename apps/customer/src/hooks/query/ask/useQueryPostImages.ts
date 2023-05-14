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
interface QuestionType {
  content: string;
  title: string;
  type: 'ETC' | 'ORDER' | 'REVIEW' | 'ACCOUNT';
  questionsImages: { imageUrl: string }[];
}

export const useQueryPostImages = () => {
  let requestValue: QuestionType = {
    content: '',
    title: '',
    type: 'ETC',
    questionsImages: [{ imageUrl: '' }],
  };
  const { mutate } = useQueryPostQuestion();
  const register = useCallback(
    async (data: { images: FormData; request: RequestType }) => {
      requestValue = { ...data.request, questionsImages: [{ imageUrl: '' }] };
      const response = await questionApi.registerImages(data.images);
      return response;
    },
    []
  );

  return useMutation(register, {
    onSuccess: async (e) => {
      await mutate({
        ...requestValue,
        questionsImages: e.data,
      });
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
