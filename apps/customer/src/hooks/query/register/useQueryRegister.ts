import { authApi } from '../../../apis/controller/auth.api';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { useMyProfile } from '../../useMyProfile';
import { useRouter } from 'next/router';
import { pathName } from '../../../configs/pathName';

type Props = {
  name: string;
  nickname: string;
};
export const useQueryRegister = () => {
  const router = useRouter();
  const { profileUrl, email, changeNickname, changeName } = useMyProfile();

  const register = useCallback(
    async ({ name, nickname }: Props) => {
      const params = {
        email,
        name,
        nickName: nickname,
        profileUrl,
      };
      const response = await authApi.signUp(params);
      changeNickname(nickname);
      changeName(name);
      return response;
    },
    [email, profileUrl, changeNickname, changeName]
  );

  return useMutation(register, {
    onSuccess: (e) => {
      router.push(pathName.HOME);
    },
    onError: (e: any) => {
      console.log(e.data.message);
    },
  });
};
