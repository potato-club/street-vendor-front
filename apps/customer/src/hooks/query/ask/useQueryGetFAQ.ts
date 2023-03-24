import { NotificationApi } from 'apps/customer/src/apis/controller/notification.api';
import { useCallback } from 'react';
import { useQuery } from 'react-query';

export type FAQAnswer = {
  content: string;
  imageUrl: string;
  title: string;
};
export type RequestFAQ = {
  code: string;
  data: FAQAnswer;
};

export const useQueryGetFAQ = () => {
  const load = useCallback(async () => {
    const response = await NotificationApi.loadFAQ();
    const faqInfo: RequestFAQ = {
      code: response.data.code,
      data: {
        content: response.data.content,
        imageUrl: response.data.imageUrl,
        title: response.data.title,
      },
    };
    return faqInfo;
  }, []);

  return useQuery(['getFAQ'], load, {
    onSuccess: (e) => {
      console.log(e);
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
