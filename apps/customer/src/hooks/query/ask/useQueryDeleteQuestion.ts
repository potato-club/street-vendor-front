/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { questionApi } from 'apps/customer/src/apis/controller/question.api';
import { toast } from 'react-hot-toast';
import Router from 'next/router';

export const useQueryDeleteQuestion = (questionId: number) => {
  const register = useCallback(async () => {
    const response = await questionApi.removeQuestionDetail(questionId);
    return response;
  }, []);

  return useMutation(register, {
    onSuccess: async () => {
      Router.back();
    },
    onError: (e) => {
      toast.error('문의 삭제에 실패하였습니다');
    },
  });
};
