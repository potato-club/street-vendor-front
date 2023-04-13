import { authApi } from '../../../apis/controller/auth.api';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { useMyProfile } from '../../useMyProfile';
import { useRouter } from 'next/router';
import { pathName } from '../../../configs/pathName';
import { toast } from 'react-hot-toast';
import { sessionService } from 'apps/customer/src/libs/sessionService';
import { useLoading } from '@street-vendor/core';

type Props = {
  name: string;
  nickname: string;
};
export const useQueryRegister = () => {
  const router = useRouter();
  const { profileUrl, email, changeNickname, changeName } = useMyProfile();
  const { loadingOff, loadingOn } = useLoading();

  const register = useCallback(
    async ({ name, nickname }: Props) => {
      loadingOn();
      const params = {
        email,
        name,
        nickName: nickname,
        profileUrl,
      };
      const response = await authApi.signUp(params);
      changeNickname(nickname);
      changeName(name);
      sessionService.setIdSession(response.data);
      loadingOff();
      return response;
    },
    [email, profileUrl, changeNickname, changeName]
  );

  return useMutation(register, {
    onSuccess: (e) => {
      toast.success('회원가입되었습니다.');
      router.push(pathName.HOME);
    },
    onError: (e: any) => {
      toast.error(e.data.message);
    },
  });
};
