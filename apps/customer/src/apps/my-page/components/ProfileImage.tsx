import styled from 'styled-components';
import Image from 'next/image';
import ProfileImageDefault from '../../../../public/profile_img_default.png';
import { customColor, Typography } from '@street-vendor/core';
import { useProfileImage } from './ProfileImage.hook';
export const ProfileImage = () => {
  const { fileUploadRef, handleClickUploadFile, handleChangeInputFile } =
    useProfileImage();
  return (
    <Container>
      <Image src={ProfileImageDefault} alt={''} width={115} height={115} />
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
