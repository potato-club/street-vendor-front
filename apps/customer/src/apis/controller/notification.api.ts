import sendApi from '../sendApi';
import { RequestFAQ } from './notification.api.type';

export const NotificationApi = {
  loadFAQ: async () => {
    const response = await sendApi.get(`/api/v1/notification/faq`);
    return response.data;
  },
  registerFAQ: async (data: RequestFAQ) => {
    const response = await sendApi.post('/api/v1/notification/faq', data);
    return response.data;
  },
};
