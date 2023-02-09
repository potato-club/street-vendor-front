import { Typography } from '@street-vendor/core';
import { GOOGLE_AUTH_URL } from 'libs/core/src/config/settings';
import styled from 'styled-components';
import Image from 'next/image';
import ProfileImageDefault from '../../../public/img/logo/logo_big.png';
import ButtonGoogleLogin from '../../../public/img/button/google_login_button.png';
import Router from 'next/router';

export const Login = () => {
  const handleClickLoginButton = () => {
    Router.push(GOOGLE_AUTH_URL);
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
        주변 노점들의 위치와
        <br />
        메뉴주문, 예약픽업까지 한번에
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
