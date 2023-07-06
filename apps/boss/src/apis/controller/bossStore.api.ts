import sendApi from '../sendApi';
import { RequestStore } from './bossStore.api.type';

export const bossStoreApi = {
  updateStore: async (storeId: number, data: RequestStore) => {
    const response = await sendApi.put(`/boss/api/v1/store/${storeId}`, data);
    return response;
  },
  deleteStore: async (storeId: number) => {
    const response = await sendApi.delete(`/boss/api/v1/store/${storeId}`);
    return response;
  },
  createStore: async (data: RequestStore) => {
    const response = await sendApi.post('/boss/v1/create-store', data);
    return response;
  },
  addImages: async (images: FormData[]) => {
    const response = await sendApi.post('/boss/v1/store/images', images);
    return response;
  },
};
