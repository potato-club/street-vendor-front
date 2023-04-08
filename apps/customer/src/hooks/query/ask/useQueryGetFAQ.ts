/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NotificationApi } from 'apps/customer/src/apis/controller/notification.api';
import { useCallback } from 'react';
import { useQuery } from 'react-query';

export type RequestQuestion = {
  content: string;
  imageUrl: string;
  title: string;
};
export type FAQType = 'EVENT' | 'FAQ_BOSS' | 'FAQ_USER' | 'NOTIFICATION';

export const useQueryGetFAQ = (type: FAQType) => {
  const load = useCallback(async () => {
    const response = await NotificationApi.loadFAQ(type);
    const faqInfo: RequestQuestion[] = [];
    response.data.map((i: RequestQuestion) => {
      faqInfo.push({
        content: i.content,
        imageUrl: i.imageUrl,
        title: i.title,
      });
    });
    return faqInfo;
  }, []);

  return useQuery<RequestQuestion[]>(['getFAQ'], load, {
    onError: (e) => {
      console.log(e);
    },
  });
};
