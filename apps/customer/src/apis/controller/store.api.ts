import sendApi from '../sendApi';

export const storeApi = {
  registerReview: async (review: any, storeId: string) => {
    const response = await sendApi.post(
      `/api/v1/store/review/${storeId}`,
      review
    );
    return response.data;
  },
};
