import sendApi from '../sendApi';
import { RequestRegister, RequestToken } from './auth.api.type';

export const authApi = {
  googleLogin: async ({ accessToken }: RequestToken) => {
    const response = await sendApi.post('/boss/v1/auth/google', {
      requestToken: accessToken,
    });

    return response.data;
  },
  logout: async () => {
    const response = await sendApi.post('/api/v1/log-out', {});
    return response.data;
  },
  signUp: async (params: RequestRegister) => {
    const response = await sendApi.post('/boss/v1/sign-up', {});
    return response.data;
  },
};
