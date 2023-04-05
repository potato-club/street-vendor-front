/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { questionApi } from 'apps/customer/src/apis/controller/question.api';

export interface RequestMyQuestion {
  createdAt: string;
  questionId: number;
  status: string;
  title: string;
  type: string;
}

export const useQueryGetMyQuestion = () => {
  const load = useCallback(async () => {
    const response = await questionApi.loadMyQuestion();
    const myQuestionInfo: RequestMyQuestion[] = [];
    response.data.map((i: RequestMyQuestion) => {
      myQuestionInfo.push({
        createdAt: i.createdAt,
        questionId: i.questionId,
        status: i.status,
        title: i.title,
        type: i.type,
      });
    });
    return myQuestionInfo;
  }, []);

  return useQuery<RequestMyQuestion[]>(['getMyQuestion'], load, {
    onError: (e) => {
      console.log(e);
    },
  });
};
