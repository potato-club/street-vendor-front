import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const GooglePage = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    const hash = asPath.split('#')[1];
    const parsedHash = new URLSearchParams(hash);

    const accessToken = parsedHash.get('access_token');

    axios
      .post(
        'https://dev.street-vendor.shop/api/v1/auth/google',
        {
          requestToken: accessToken,
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((value) => {
        console.log(value);
      });
  }, [asPath]);

  return <div>로그인 확인 중...</div>;
};

export default GooglePage;
