import { storeApi } from 'apps/customer/src/apis/controller/store.api';
import { OrderHistoryDetailType } from 'libs/core/src/types/orderHistory.type';
import { useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

export const useQueryGetMyOrderHistoryDetail = (orderId: number) => {
  const getDetail = useCallback(async () => {
    if (isNaN(orderId)) return;
    const response = storeApi.getMyOrderHistoryDetail(orderId);
    return response;
  }, [orderId]);

  return useQuery<OrderHistoryDetailType>(
    ['useQueryGetMyOrderHistoryDetail', orderId],
    getDetail,
    {
      onError: () => {
        toast.error('주문내역 불러오기를 실패했습니다.');
      },
    }
  );
};
