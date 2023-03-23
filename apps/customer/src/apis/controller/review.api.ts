import { FieldValues } from 'react-hook-form';
import sendApi from '../sendApi';

export const ReviewApi = {
  registerReview: async (review: FieldValues, storeId: string) => {
    const response = await sendApi.post(
      `/api/v1/store/review/${storeId}`,
      review
    );
    return response.data;
  },
};
