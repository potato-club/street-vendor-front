import {
  AppBarLayout,
  LoadingContainer,
  Typography,
} from '@street-vendor/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import { pathName } from '../../configs/pathName';
import { useQueryGetMyInfo } from '../../hooks/query/my-page/useQueryGetMyInfo';
import { useMyProfile } from '../../hooks/useMyProfile';
import { ProfileImage } from './components/ProfileImage';
import { ProfileInfo } from './components/ProfileInfo';

export const MyPage = () => {
  const { isLoading, data } = useQueryGetMyInfo();
  const { changeEmail, changeNickname } = useMyProfile();

  useEffect(() => {
    if (isLoading) return;
    changeEmail(data.email);
    changeNickname(data.nickname);
  }, [data]);

  if (isLoading) {
    return <LoadingContainer />;
  }

  return (
    <AppBarLayout title="마이페이지" home>
      <Container>
        <ProfileImage imageUrl={data.profileUrl} />
        <ProfileInfo />
        <ButtonWithdrawal />
      </Container>
    </AppBarLayout>
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
  padding: 0 17px;
  padding-top: 55px;
  height: 100%;
  max-width: 400px;
  margin: auto;
`;

const Button = styled.button`
  position: absolute;
  bottom: 22px;
  right: 19px;
  background: transparent;
  border: none;
`;
