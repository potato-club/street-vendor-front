import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { authApi } from '../../apis/controller/auth.api';
import { pathName } from '../../configs/pathName';
import { sessionService } from '../../libs/sessionService';

const GooglePage = () => {
  const { asPath } = useRouter();
  const router = useRouter();
  useEffect(() => {
    const hash = asPath.split('#')[1];
    const parsedHash = new URLSearchParams(hash);

    const accessToken = parsedHash.get('access_token');
    handleCheckNewUser(accessToken);
  }, [asPath]);

  const handleCheckNewUser = async (accessToken: string) => {
    const response = await authApi.googleLogin({ accessToken });

    if (!response.data) {
      //로그인 실패
      router.push(pathName.LOGIN);
    }

    if (response.data.sessionId === null) {
      //회원가입 필요
      sessionService.resetIdSession();
      router.push(pathName.REGISTER);
    } else {
      //로그인 완료
      sessionService.setIdSession(response.data.sessionId);
      router.push(pathName.HOME);
    }
  };

  return <div>회원 정보를 확인중입니다</div>;
};

export default GooglePage;
