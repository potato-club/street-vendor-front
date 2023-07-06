/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { bossStoreApi } from 'apps/boss/src/apis/controller/bossStore.api';
import { RequestStore } from 'apps/boss/src/apis/controller/bossStore.api.type';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useQueryPostCreateStore } from './useQueryPostCreateStore';

export const useQueryPostImages = () => {
  const { mutate } = useQueryPostCreateStore();
  const register = useCallback(
    async (data: {
      request: RequestStore;
      menuImages: FormData[];
      storeImages: FormData[];
    }) => {
      const menuResponse = await bossStoreApi.addImages(data.menuImages);
      const storeResponse = await bossStoreApi.addImages(data.storeImages);
      return {
        request: data.request,
        menuImages: menuResponse,
        storeImages: storeResponse,
      };
    },
    []
  );

  return useMutation(register, {
    onSuccess: async ({ request, menuImages, storeImages }) => {
      console.log(request, menuImages, storeImages);
    },
    onError: (e) => {
      toast.error('가게 등록에 실패하였습니다');
    },
  });
};
