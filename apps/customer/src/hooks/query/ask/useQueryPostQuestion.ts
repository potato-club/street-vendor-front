/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { pathName } from 'apps/customer/src/configs/pathName';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { questionApi } from 'apps/customer/src/apis/controller/question.api';
import Router from 'next/router';
import toast from 'react-hot-toast';

interface QuestionType {
  content: string;
  title: string;
  type: 'ETC' | 'ORDER' | 'REVIEW' | 'ACCOUNT';
  questionsImages: { imageUrl: string }[];
}

export const useQueryPostQuestion = () => {
  const register = useCallback(async (question: QuestionType) => {
    const response = await questionApi.registerQuestion(question);
    return response;
  }, []);

  return useMutation(register, {
    onSuccess: (e) => {
      Router.replace(pathName.ASK.INQUIRY.MY.LIST);
    },
    onError: (e) => {
      toast.error('1:1문의 등록에 실패하였습니다');
    },
  });
};
