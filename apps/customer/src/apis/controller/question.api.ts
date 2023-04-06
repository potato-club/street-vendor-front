import { FieldValues } from 'react-hook-form';
import sendApi from '../sendApi';

export const questionApi = {
  registerQuestion: async (data: FieldValues) => {
    const response = await sendApi.post('/api/v1/question', data);
    return response.data;
  },
  loadMyQuestion: async () => {
    const response = await sendApi.get('/api/v1/question');
    return response.data;
  },
  loadMyQuestionDetail: async (questionId: number) => {
    const response = await sendApi.get(`/api/v1/question/${questionId}`);
    return response.data;
  },
};
