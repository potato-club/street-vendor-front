import sendApi from '../sendApi';
import { FAQType, RequestQuestion } from './notification.api.type';

export const NotificationApi = {
  loadFAQ: async (type: FAQType) => {
    const response = await sendApi.get(`/api/v1/notification/faq/${type}`);
    return response.data;
  },
  registerFAQ: async (data: RequestQuestion) => {
    const response = await sendApi.post('/api/v1/notification/faq', data);
    return response.data;
  },
};
