import { tokenService } from '../libs/tokenService';
import api from './api';

export default {
  get: async (url: string, params?: any) => {
    const idToken = await tokenService.getIdToken();

    return params !== undefined
      ? api({
          url: url,
          method: 'get',
          params: params,
          headers: {
            Authorization: `${idToken}`,
          },
        })
      : api({
          url: url,
          method: 'get',
          headers: {
            Authorization: `${idToken}`,
          },
        });
  },
  post: async (url: string, params: any) => {
    const idToken = await tokenService.getIdToken();

    return params !== undefined
      ? api({
          url: url,
          method: 'post',
          data: params,
          headers: {
            Authorization: `${idToken}`,
          },
        })
      : api({
          url: url,
          method: 'post',
          headers: {
            Authorization: `${idToken}`,
          },
        });
  },
  put: async (url: string, params: any) => {
    const idToken = await tokenService.getIdToken();

    return params !== undefined
      ? api({
          url: url,
          method: 'put',
          data: params,
          headers: {
            Authorization: `${idToken}`,
          },
        })
      : api({
          url: url,
          method: 'put',
          headers: {
            Authorization: `${idToken}`,
          },
        });
  },
  delete: async (url: string, params?: any) => {
    const idToken = await tokenService.getIdToken();

    return params !== undefined
      ? api({
          url: url,
          method: 'delete',
          data: params,
          headers: {
            Authorization: `${idToken}`,
          },
        })
      : api({
          url: url,
          method: 'delete',
          headers: {
            Authorization: `${idToken}`,
          },
        });
  },
};
