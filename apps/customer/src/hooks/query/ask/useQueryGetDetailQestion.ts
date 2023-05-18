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
    const myQuestionDetailInfo: RequestDetailQuestion[] = [];
    response.data.map((i: RequestDetailQuestion) => {
      myQuestionDetailInfo.push({
        content: i.content,
        images: i.images,
        title: i.title,
        type: i.type,
        writtenBy: i.writtenBy,
      });
    });

    return myQuestionDetailInfo;
  }, []);

  return useQuery<RequestDetailQuestion[]>(['getMyQuestionDetail'], load, {
    onError: (e) => {
      console.log(e);
    },
  });
};
