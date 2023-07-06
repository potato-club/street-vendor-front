/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { bossStoreApi } from 'apps/boss/src/apis/controller/bossStore.api';
import { RequestStore } from 'apps/boss/src/apis/controller/bossStore.api.type';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';

export const useQueryPostCreateStore = () => {
  const register = useCallback(async (data: RequestStore) => {
    const response = await bossStoreApi.createStore(data);
    return response;
  }, []);

  return useMutation(register, {
    onSuccess: async (e) => {
      console.log(e);
    },
    onError: (e) => {
      toast.error('가게 등록에 실패하였습니다');
    },
  });
};
