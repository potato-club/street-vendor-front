import { Typography } from '@street-vendor/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import { authApi } from '../../apis/controller/auth.api';
import { pathName } from '../../configs/pathName';
import { sessionService } from '../../libs/sessionService';

export const IndexPage = () => {
  const router = useRouter();

  const checkUser = async () => {
    try {
      const session = sessionService.getIdSession();
      if (session === '' || session === undefined) {
        router.push(pathName.LOGIN);
      } else {
        await authApi.myInfo();
        router.push(pathName.HOME);
      }
    } catch (e) {
      router.push(pathName.LOGIN);
    } finally {
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <Container>
      <Typography size="14" letterSpacing="-0.5px" color="darkGray">
        회원 정보를 확인중입니다.
      </Typography>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  margin-top: 128px;
`;
