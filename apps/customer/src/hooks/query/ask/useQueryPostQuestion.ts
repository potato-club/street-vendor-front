/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { FieldValues } from 'react-hook-form';
import { questionApi } from 'apps/customer/src/apis/controller/question.api';

export const useQueryPostQuestion = () => {
  const register = useCallback(async (question: FieldValues) => {
    const response = await questionApi.registerQuestion(question);
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
