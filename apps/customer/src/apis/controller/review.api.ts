import sendApi from '../sendApi';

export const ReviewApi = {
  registerReview: async (data: FormData) => {
    const response = await sendApi.post(`/api/v1/review`, data);
    return response.data;
  },
};
