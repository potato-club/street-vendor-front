import sendApi from '../sendApi';

export const orderApi = {
  order: async (data: any) => sendApi.post('/api/v1/order', data),
};
