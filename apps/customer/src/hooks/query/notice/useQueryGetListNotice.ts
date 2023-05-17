import { ListNoticeType } from '@street-vendor/core';
import { NotificationApi } from 'apps/customer/src/apis/controller/notification.api';
import { useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

export const useQueryGetListNotice = () => {
  const getList = useCallback(async () => {
    const response = await NotificationApi.loadFAQ('NOTIFICATION');
    return response.data;
  }, []);

  return useQuery<ListNoticeType[]>('useQueryGetListNotice', getList, {
    onError: () => {
      toast.error('공지사항을 불러오는데 실패했습니다.');
    },
  });
};
