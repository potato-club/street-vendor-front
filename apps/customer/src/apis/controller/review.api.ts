import sendApi from '../sendApi';
import { ReviewType } from './review.api.type';

export const ReviewApi = {
  registerReview: async (data: ReviewType) => {
    const response = await sendApi.post(`/api/v1/review`, data);
    return response.data;
  },
  registerImages: async (data: FormData) => {
    const response = await sendApi.post(`/api/v1/review/images`, data);
    return response.data;
  },
};
