import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { authApi } from '../../apis/controller/auth.api';
import { pathName } from '../../configs/pathName';
import { useMyProfile } from '../../hooks/useMyProfile';
import { sessionService } from '../../libs/sessionService';
import { Typography, useLoading } from '@street-vendor/core';
import styled from 'styled-components';

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
  const { loadingOn, loadingOff } = useLoading();

  useEffect(() => {
    const hash = asPath.split('#')[1];
    const parsedHash = new URLSearchParams(hash);

    const accessToken = parsedHash.get('access_token');
    handleCheckNewUser(accessToken);
  }, [asPath]);

  const handleCheckNewUser = async (accessToken: string) => {
    try {
      loadingOn();
      const response = await authApi.googleLogin({ accessToken });
      loadingOff();
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
    } catch (e) {
    } finally {
      loadingOff();
    }
  };

  return (
    <Container>
      <Typography size="14" letterSpacing="-0.5px" color="darkGray">
        회원 정보를 확인중입니다.
      </Typography>
    </Container>
  );
};

export default GooglePage;
//b7db0e2d-fc76-44f5-a413-1c5e0c29951a
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  margin-top: 128px;
`;
