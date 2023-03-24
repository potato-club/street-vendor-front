/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NotificationApi } from 'apps/customer/src/apis/controller/notification.api';
import { useCallback } from 'react';
import { useQuery } from 'react-query';

export type RequestFAQ = {
  content: string;
  imageUrl: string;
  title: string;
};

export const useQueryGetFAQ = () => {
  const load = useCallback(async () => {
    const response = await NotificationApi.loadFAQ();
    const faqInfo = {
      content: response.data.content,
      imageUrl: response.data.imageUrl,
      title: response.data.title,
    };
    return faqInfo;
  }, []);

  return useQuery<RequestFAQ>(['getFAQ'], load, {
    onError: (e) => {
      console.log(e);
    },
  });
};
