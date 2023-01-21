import { Typography } from '@street-vendor/core';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { pathName } from '../../configs/pathName';
import { ProfileImage } from './components/ProfileImage';
import { ProfileInfo } from './components/ProfileInfo';

export const MyPage = () => {
  return (
    <Container>
      <ProfileImage />
      <ProfileInfo />
      <ButtonWithdrawal />
    </Container>
  );
};

const ButtonWithdrawal = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(pathName.WITHDRAWAL.CHECK)}>
      <Typography size="12" color="gray" underlineColor="gray">
        회원탈퇴
      </Typography>
    </Button>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 61px;
  padding: 0px 17px;
  padding-top: 55px;
  height: 100vh;
`;

const Button = styled.button`
  position: absolute;
  bottom: 22px;
  right: 19px;
  background: transparent;
  border: none;
`;
