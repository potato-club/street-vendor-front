import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { authApi } from '../../apis/controller/auth.api';

const GooglePage = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    const hash = asPath.split('#')[1];
    const parsedHash = new URLSearchParams(hash);

    const accessToken = parsedHash.get('access_token');
    console.log(accessToken);
    authApi.googleLogin({ accessToken });
  }, [asPath]);

  return <div>로그인 확인 중...</div>;
};

export default GooglePage;
