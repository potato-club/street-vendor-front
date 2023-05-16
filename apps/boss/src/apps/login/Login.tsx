import { Typography } from '@street-vendor/core';
import {
  DEV_GOOGLE_AUTH_URL,
  GOOGLE_AUTH_URL,
} from 'libs/core/src/config/settings';
import styled from 'styled-components';
import Image from 'next/image';
import ProfileImageDefault from '../../../public/img/logo/logo_big.png';
import ButtonGoogleLogin from '../../../public/img/button/google_login_button.png';
import Router from 'next/router';
import { useEffect, useState } from 'react';

export const Login = () => {
  const [isDev, setIsDev] = useState(false);

  useEffect(() => {
    if (window.location.hostname === 'localhost') {
      setIsDev(true);
    }
  }, []);

  const handleClickLoginButton = () => {
    //구글 사장 로그인 링크로 이동
    // Router.push(isDev ? DEV_GOOGLE_AUTH_URL : GOOGLE_AUTH_URL);
  };

  return (
    <Container>
      <Typography
        size="32"
        color="orange2"
        fontWeight="bold"
        letterSpacing="-1.96px"
      >
        환영합니다
      </Typography>
      <Typography
        size="20"
        color="black"
        fontWeight="bold"
        textAlign="center"
        fontHeight="40px"
        letterSpacing="-1.96px"
      >
        자신의 노점 관리와
        <br />
        주문관리, 예약관리까지 한번에
      </Typography>

      <ImageWrapper>
        <Image src={ProfileImageDefault} alt={''} width={174} height={174} />
      </ImageWrapper>
      <Typography
        size="16"
        textAlign="center"
        letterSpacing="-1.46px"
        fontHeight="30px"
        fontWeight="600"
      >
        손안의 노점을 시작하시기 전에
        <br />
        구글로 로그인이 필요합니다.
      </Typography>
      <WrapperGoogleLoginButton onClick={handleClickLoginButton}>
        <Image src={ButtonGoogleLogin} alt={''} width={240} height={70} />
      </WrapperGoogleLoginButton>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 17px;
`;
const ImageWrapper = styled.div`
  margin: 60px 0;
`;

const WrapperGoogleLoginButton = styled.div`
  margin-top: 45px;
`;
