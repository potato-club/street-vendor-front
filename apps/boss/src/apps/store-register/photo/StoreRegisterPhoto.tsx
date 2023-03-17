/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NextButton, Typography } from '@street-vendor/core';
import { pathName } from 'apps/boss/src/configs/pathName';
import {
  atomStoreRegisterFile,
  atomStoreRegisterImage,
} from 'apps/boss/src/recoil/atoms/atomStoreRegister';
import Router from 'next/router';
import { toast } from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { DeleteButton } from './components/DeleteButton';
import { PhotoButton } from './components/PhotoButton';
import { PhotoSwiper } from './components/PhotoSwiper';
import styled from 'styled-components';

export const StoreRegisterPhoto = () => {
  const [files, setFiles] = useRecoilState(atomStoreRegisterFile);
  const [images, setImages] = useRecoilState(atomStoreRegisterImage);

  const handleNext = () => {
    files
      ? Router.push(pathName.STORE_REGISTER.FINAL)
      : toast.error('사진을 선택해주세요');
  };

  return (
    <Container>
      <Form>
        <FormInner>
          <PhotoBox>
            <Typography size="16" letterSpacing="-1.5px">
              사진은 최대 3개 선택 가능합니다
            </Typography>
            <PhotoSwiper images={images} />
            <Buttons>
              <PhotoButton
                setInit={() => setImages([])}
                setImages={(value: string) =>
                  setImages((prev) => [...prev, value])
                }
                setFiles={(values: FileList) => setFiles(values)}
              />
              <DeleteButton
                setInit={() => {
                  setImages([]);
                  setFiles(null);
                }}
              />
            </Buttons>
          </PhotoBox>
          <Button>
            <NextButton background="orange4" type="button" onClick={handleNext}>
              <Typography
                color="black"
                fontWeight="bold"
                size="16"
                letterSpacing="-1.5px"
                textAlign="center"
              >
                다음으로
              </Typography>
            </NextButton>
          </Button>
        </FormInner>
      </Form>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  overflow: auto;
  overflow: hidden;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 400px;
  align-items: center;
  padding-top: 30px;
`;
const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 7%;
`;
const Button = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 54px;
  padding-top: 44px;
  justify-content: center;
`;
const PhotoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;
