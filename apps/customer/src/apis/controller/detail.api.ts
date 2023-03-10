import sendApi from '../sendApi';

export const detailApi = {

  getDetail: async (storeId:string) => sendApi.get(`/api/v1/store/detail/${storeId}`),

  getDevTest: async () => await sendApi.get('/api/v1/stores/dev'),
};
