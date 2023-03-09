import { NextButton, Typography } from '@street-vendor/core';
import { useState } from 'react';
import styled from 'styled-components';
import { DeleteButton } from './components/DeleteButton';
import { PhotoButton } from './components/PhotoButton';
import { PhotoSwiper } from './components/PhotoSwiper';

export const StoreRegisterPhoto = () => {
  const [images, setImages] = useState<string[]>([]);
  console.log(images);

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
                setImages={(value: string) =>
                  setImages((prev) => [...prev, value])
                }
              />
              <DeleteButton />
            </Buttons>
          </PhotoBox>
          <Button>
            <NextButton background="orange4">
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
