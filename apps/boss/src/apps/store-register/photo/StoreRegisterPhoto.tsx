/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { AppBarLayout, NextButton, Typography } from '@street-vendor/core';
import { pathName } from 'apps/boss/src/configs/pathName';
import { atomStoreRegisterFile } from 'apps/boss/src/recoil/atoms/atomStoreRegister';
import Router from 'next/router';
import { toast } from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { DeleteButton } from './components/DeleteButton';
import { PhotoButton } from './components/PhotoButton';
import { PhotoSwiper } from './components/PhotoSwiper';
import styled from 'styled-components';

export const StoreRegisterPhoto = () => {
  const [files, setFiles] = useRecoilState(atomStoreRegisterFile);

  const handleNext = () => {
    files
      ? Router.push(pathName.STORE_REGISTER.FINAL)
      : toast.error('사진을 선택해주세요');
  };
  const setInit = () => setFiles([]);

  return (
    <Container>
      <AppBarLayout
        title="가게 사진"
        titleAlign="center"
        next
        onNext={handleNext}
      >
        <Form>
          <FormInner>
            <PhotoBox>
              <Typography size="16" letterSpacing="-1.5px">
                사진은 최대 3개 선택 가능합니다
              </Typography>
              <PhotoSwiper images={files} />
              <Buttons>
                <PhotoButton
                  setInit={setInit}
                  setFiles={(values: File[]) => setFiles(values)}
                />
                <DeleteButton setInit={setInit} />
              </Buttons>
            </PhotoBox>
            <Button>
              <NextButton
                background="orange4"
                type="button"
                onClick={handleNext}
              >
                <Typography
                  color="black"
                  fontWeight="bold"
                  size="18"
                  textAlign="center"
                >
                  다음으로
                </Typography>
              </NextButton>
            </Button>
          </FormInner>
        </Form>
      </AppBarLayout>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
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
  margin: 0 auto;
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
