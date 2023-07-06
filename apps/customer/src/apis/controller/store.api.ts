import { StoreInfoResponse, StoreResponse } from './store.api.type';
import sendApi from '../sendApi';

export const storeApi = {
  getStores: async (): Promise<StoreResponse[]> => {
    const response = await sendApi.get('/api/v1/stores/dev');
    return response.data.data;
  },

  getStore: async (id: number): Promise<StoreInfoResponse> => {
    const response = await sendApi.get(`/api/v1/store/detail/${id}`);
    return response.data.data;
  },

  getStoreWithCategory: async (
    category: string,
    latitude: number,
    longitude: number,
    size?: number,
    cursor?: number
  ): Promise<StoreInfoResponse[]> => {
    const response = await sendApi.get(`/api/v1/store/category/${category}`, {
      latitude,
      longitude,
      size,
      cursor,
    });
    return response.data.data;
  },

  likeStore: async (storeId: number, memberId = 10000) => {
    const response = await sendApi.post(
      `/api/v1/store/like?storeId=${storeId}`,
      {
        memberId,
      }
    );

    console.log(response.data.data);

    return response.data.data;
  },

  unlikeStore: async (storeId: number, memberId: number) => {
    const response = await sendApi.delete(
      `/api/v1/store/like/cancel?storeId=${storeId}`,
      {
        memberId,
      }
    );

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
  getMyOrderHistoryDetail: async (orderId: number) => {
    const response = await sendApi.get(`/api/v1/order/${orderId}`);
    return response.data.data;
  },
};
