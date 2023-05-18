import sendApi from '../sendApi';
import { RequestRegister, RequestToken } from './auth.api.type';

export const authApi = {
  googleLogin: async ({ accessToken }: RequestToken) => {
    const response = await sendApi.post('/api/v1/auth/google', {
      requestToken: accessToken,
    });

    return response.data;
  },
  logout: async () => {
    const response = await sendApi.post('/api/v1/log-out', {});
    return response.data;
  },
  myInfo: async () => {
    const response = await sendApi.get('/api/v1/my-page', {});
    return response.data;
  },
  edit: {
    nickname: async (nickname: string) => {
      const response = await sendApi.put('/api/v1/my-page/nickname', {
        nickName: nickname,
      });
      return response.data;
    },
    profileImage: async (profileUrl: FormData) => {
      const response = await sendApi.post(
        '/api/v1/my-page/profileUrl',
        profileUrl
      );
      return response.data;
    },
  },
  withdrawal: async (userNo: number) => {
    const response = await sendApi.post('/api/v1/sign-out', {
      memberId: userNo,
    });
    return response.data;
  },
  signUp: async (params: RequestRegister) => {
    const response = await sendApi.post('/api/v1/sign-up', params);
    return response.data;
  },
};
