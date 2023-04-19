import { storeApi } from 'apps/customer/src/apis/controller/store.api';
import { useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

export type OrderHistoryType = {
  firstMenuName: string;
  orderCreateAt: string;
  orderId: number;
  orderStatus: 'PREPARING' | 'READY_TO_PICK_UP' | 'REQUEST ';
  payment: 'ACCOUNT_TRANSFER' | 'CASH';
  status: 'ACTIVE' | 'CANCELED ';
  storeId: number;
  storeName: string;
  totalAmount: number;
  totalMenuCount: number;
};

export const useQueryGetMyOrderHistoryList = () => {
  const getList = useCallback(async () => {
    const response = storeApi.getMyOrderHistoryList();

    return response;
  }, []);

  return useQuery<OrderHistoryType[]>(
    'useQueryGetMyOrderHistoryList',
    getList,
    {
      onError: () => {
        toast.error('주문내역 불러오기를 실패했습니다.');
      },
    }
  );
};
