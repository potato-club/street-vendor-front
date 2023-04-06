/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { questionApi } from 'apps/customer/src/apis/controller/question.api';

export interface RequestDetailQuestion {
  content: string;
  images: { imageUrl: string }[];
  title: string;
  type: string;
  writtenBy: string;
}

export const useQueryGetDetailQuestion = (questionId: number) => {
  const load = useCallback(async () => {
    const response = await questionApi.loadMyQuestionDetail(questionId);
    const detailQuestionInfo = {
      content: response.data.content,
      images: response.data.images,
      title: response.data.title,
      type: response.data.type,
      writtenBy: response.data.writtenBy,
    };

    return detailQuestionInfo;
  }, []);

  return useQuery<RequestDetailQuestion>(['getMyQuestion'], load, {
    onError: (e) => {
      console.log(e);
    },
  });
};
