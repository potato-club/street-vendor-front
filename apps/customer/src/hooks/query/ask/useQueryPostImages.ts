import { useState } from 'react';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { questionApi } from 'apps/customer/src/apis/controller/question.api';

interface RequestType {
  content: string;
  title: string;
  type: string;
}

export const useQueryPostQuestion = () => {
  const [requestValue, setRequestValue] = useState<object>();
  const register = useCallback(
    async (data: { images: FormData; request: RequestType }) => {
      const response = await questionApi.registerImages(data.images);
      setRequestValue(data.request);
      return response;
    },
    []
  );

  return useMutation(register, {
    onSuccess: async (e) => {
      console.log(e.data);
      setRequestValue({ ...requestValue, questionsImages: e.data });
      const formData = new FormData();
      formData.append(
        'request',
        new Blob([JSON.stringify('request')], { type: 'application/json' })
      );
      await questionApi.registerQuestion(formData);
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
