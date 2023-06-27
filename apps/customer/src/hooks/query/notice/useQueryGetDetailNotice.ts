import { DetailNoticeType } from '@street-vendor/core';
import { NotificationApi } from 'apps/customer/src/apis/controller/notification.api';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

export const useQueryGetDetailNotice = () => {
  const router = useRouter();
  const getDetail = useCallback(async () => {
    const response = await NotificationApi.getDetailNotification(
      String(router.query.id)
    );
    return response.data;
  }, [router.query.id]);

  return useQuery<DetailNoticeType>(
    ['useQueryGetDetailNotice', router.query.id],
    getDetail,
    {
      enabled: router.isReady && !!router.query.id,
      onError: () => {
        toast.error('공지사항을 불러오는데 실패했습니다.');
      },
    }
  );
};
