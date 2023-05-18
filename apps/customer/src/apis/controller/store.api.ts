import {
  StoreInfoResponse,
  StoreResponse,
} from './store.api.type';
import sendApi from '../sendApi';

export const storeApi = {
  getStores: async (): Promise<StoreResponse[]> => {
    const response = await sendApi.get('/api/v1/stores/dev');
    return response.data.data;
  },

  getStore: async (id: number): Promise<StoreInfoResponse> => {
    const response = await sendApi.get(`/api/v1/store/${id}`);
    return response.data.data;
  },

  registerReview: async (review: any, storeId: string) => {
    const response = await sendApi.post(
      `/api/v1/store/review/${storeId}`,
      review
    );
    return response.data;
  },
  getMyOrderHistoryList: async () => {
    const response = await sendApi.get('/api/v1/order/my-orders');
    return response.data.data;
  },

  getDetail: async (storeId: string) =>
    sendApi.get(`/api/v1/store/detail/${storeId}`),

  getMyOrderHistoryDetail: async (orderId: number) => {
    const response = await sendApi.get(`/api/v1/order/${orderId}`);
    return response.data.data;
  },
};
