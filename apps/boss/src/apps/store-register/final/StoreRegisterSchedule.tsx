import {
  MultiPhotoDisplay,
  NextButton,
  ReadLabelBox,
  Typography,
} from '@street-vendor/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import styled from 'styled-components';
import { CustomBox } from './components/CustomBox';
import { CustomSelectBox } from './components/CustomSelectBox';

export const StoreRegisterFinal = () => {
  return (
    <Container>
      <Form>
        <FormInner>
          <ReadLabelBox label="카테고리" content="떡볶이" />
          <ReadLabelBox label="가게 이름" content="서윤보경네" />
          <ReadLabelBox
            label="한줄 설명"
            content="떡볶이를 파는 서윤보경네 입니다"
          />
          <ReadLabelBox label="위치 설명" content="당정역 2번 출구 앞" />
          <ReadLabelBox label="위치 설정" content="송도충림아이원3단지" />
          <AccountBox>
            <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
              계좌번호
            </Typography>
            <AccountBoxInner>
              <CustomSelectBox width={140} content="하나은행" />
              <CustomBox content="123426" />
            </AccountBoxInner>
          </AccountBox>
          <PhotoBox>
            <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
              가게 사진
            </Typography>
            <MultiPhotoDisplay srcArray={[]} />
          </PhotoBox>
          <Button>
            <NextButton background="orange4">
              <Typography
                color="black"
                fontWeight="bold"
                size="16"
                letterSpacing="-1.0px"
                textAlign="center"
              >
                운영하러 가기
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
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 400px;
  align-items: center;
  padding-top: 33px;
`;
const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 7%;
  gap: 36px;
`;
const AccountBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;
const AccountBoxInner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 10px;
`;
const PhotoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;
const Button = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 54px;
  padding-top: 44px;
  justify-content: center;
`;
