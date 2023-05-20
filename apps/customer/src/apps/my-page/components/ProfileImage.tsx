import styled from 'styled-components';
import { customColor, Typography } from '@street-vendor/core';
import { useProfileImage } from './ProfileImage.hook';
import { ProfileImage } from 'libs/core/src/components/navigation/drawer/ProfileImage';

type Props = {
  imageUrl: string;
};

export const ProfileImageContainer = ({ imageUrl }: Props) => {
  const { fileUploadRef, handleClickUploadFile, handleChangeInputFile } =
    useProfileImage();

  return (
    <Container>
      <ProfileImage src={imageUrl} />
      <Button onClick={handleClickUploadFile}>
        <Typography size="16" color="white">
          프로필 사진 변경
        </Typography>
        <InputNoneVisible
          type="file"
          ref={fileUploadRef}
          onChange={handleChangeInputFile}
        />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 19px;
`;

const Button = styled.button`
  border: none;
  border-radius: 999px;
  background-color: ${customColor.orange4};
  padding: 11px 20px;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
`;

const InputNoneVisible = styled.input`
  display: none;
  width: 0px;
  height: 0px;
`;
