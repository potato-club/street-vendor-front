import { customColor, Typography } from '@street-vendor/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ChangeEvent } from 'react';
import { toast } from 'react-hot-toast';
import styled from 'styled-components';

interface Props {
  setImages: (value: string) => void;
  setFiles: (value: File[]) => void;
  setInit: () => void;
}

export const PhotoButton = ({ setImages, setInit, setFiles }: Props) => {
  const handleAddImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInit();
    if (e.target.value[0]) {
      const files = [];
      Object.values(e.target.files).map((i, id) => {
        if (id < 3) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(i);
          fileReader.onload = () => {
            setImages(String(fileReader.result!));
          };
          files.push(i);
        } else {
          id === Object.values(e.target.files).length - 1 &&
            toast.error('사진은 최대 3개 까지 선택 가능합니다');
        }
      });
      setFiles(files);
    }
  };

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
