import { authApi } from '../../../apis/controller/auth.api';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { sessionService } from 'apps/customer/src/libs/sessionService';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { pathName } from 'apps/customer/src/configs/pathName';
import { useQueryGetMyInfo } from '../my-page/useQueryGetMyInfo';
import { useLoading } from '@street-vendor/core';

export const useQueryWithdrawal = () => {
  const router = useRouter();
  const { data } = useQueryGetMyInfo();
  const { loadingOff, loadingOn } = useLoading();

  const deleteData = useCallback(async () => {
    if (!data) return;
    loadingOn();
    const response = await authApi.withdrawal(data.memberId);
    return response;
  }, []);

  return useMutation(deleteData, {
    onSuccess: (e) => {
      sessionService.resetIdSession();
      toast.success('계정이 삭제되었습니다.');
      router.push(pathName.WITHDRAWAL.OUTRO);
    },
    onError: (e: any) => {
      toast.error(e.data.message);
    },
    onSettled: () => {
      loadingOff();
    },
  });
};
