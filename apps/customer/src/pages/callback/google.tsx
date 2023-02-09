import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { authApi } from '../../apis/controller/auth.api';
import { pathName } from '../../configs/pathName';
import { useMyProfile } from '../../hooks/useMyProfile';
import { sessionService } from '../../libs/sessionService';

const GooglePage = () => {
  const { asPath } = useRouter();
  const router = useRouter();
  const {
    changeEmail,
    resetNickname,
    resetProfileUrl,
    refreshProfile,
    resetName,
  } = useMyProfile();

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
      changeEmail(response.data.email);
      resetName();
      resetNickname();
      resetProfileUrl();
      router.push(pathName.REGISTER);
    } else {
      //로그인 완료
      sessionService.setIdSession(response.data.sessionId);
      refreshProfile();
      router.push(pathName.HOME);
    }
  };

  return <div>회원 정보를 확인중입니다</div>;
};

export default GooglePage;
