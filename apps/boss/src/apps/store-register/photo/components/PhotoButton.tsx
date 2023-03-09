import { customColor, Typography } from '@street-vendor/core';
import { atomStoreRegisterPhoto } from 'apps/boss/src/recoil/atoms/atomStoreRegister';
import { customColorType } from 'libs/core/src/constants/customColor';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

interface Props {
  setImages: (value: string) => void;
}

export const PhotoButton = ({ setImages }: Props) => {
  const [photoArray, setPhotoArray] = useRecoilState(atomStoreRegisterPhoto);
  const [files, setFiles] = useState<FileList>();
  const handleAddImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let array = [];
    if (e.target.value[0]) {
      Object.values(e.target.files).map((i) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(i);
        fileReader.onload = () => {
          setImages(String(fileReader.result!));
        };
      });
      setFiles(e.target.files);
    }
  };
  useEffect(() => {
    setPhotoArray(files);
  }, [files]);

  return (
    <Wrapper>
      <Input type="file" multiple onChange={handleAddImage} />
      <Text>
        <Typography size="20" color="white" letterSpacing="-1.5px">
          사진 선택
        </Typography>
      </Text>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 58px;
`;
const Input = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: ${customColor.orange2};
  font-size: 0;
  &::file-selector-button {
    display: none;
  }
`;
const Text = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;
