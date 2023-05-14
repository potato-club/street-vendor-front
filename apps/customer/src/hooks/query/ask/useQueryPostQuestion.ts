/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { pathName } from 'apps/customer/src/configs/pathName';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { questionApi } from 'apps/customer/src/apis/controller/question.api';
import Router from 'next/router';

export const useQueryPostQuestion = () => {
  const register = useCallback(async (question: any) => {
    const response = await questionApi.registerQuestion(question);
    return response;
  }, []);

  return useMutation(register, {
    onSuccess: (e) => {
      Router.replace(pathName.ASK.INQUIRY.MY.LIST);
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
