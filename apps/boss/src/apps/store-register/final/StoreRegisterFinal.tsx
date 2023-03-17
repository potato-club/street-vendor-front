/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  MultiPhotoDisplay,
  NextButton,
  ReadLabelBox,
  Typography,
} from '@street-vendor/core';
import {
  atomStoreRegisterAccount,
  atomStoreRegisterCategory,
  atomStoreRegisterExplain,
  atomStoreRegisterMenu,
  atomStoreRegisterImage,
  atomStoreRegisterFile,
  atomStoreRegisterSchedule,
} from 'apps/boss/src/recoil/atoms/atomStoreRegister';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { CustomBox } from './components/CustomBox';
import { CustomSelectBox } from './components/CustomSelectBox';

export const StoreRegisterFinal = () => {
  const categoryValue = useRecoilValue(atomStoreRegisterCategory);
  const accountValue = useRecoilValue(atomStoreRegisterAccount);
  const explainValue = useRecoilValue(atomStoreRegisterExplain);
  const scheduleValue = useRecoilValue(atomStoreRegisterSchedule);
  const menuValue = useRecoilValue(atomStoreRegisterMenu);
  const photoValue = useRecoilValue(atomStoreRegisterFile);
  const imageValue = useRecoilValue(atomStoreRegisterImage);

  return (
    <Container>
      <Form>
        <FormInner>
          <ReadLabelBox label="카테고리" content={categoryValue} />
          <ReadLabelBox label="가게 이름" content={explainValue.name} />
          <ReadLabelBox label="한줄 설명" content={explainValue.description} />
          <ReadLabelBox label="위치 설명" content={explainValue.location} />
          <ReadLabelBox label="위치 설정" content="송도충림아이원3단지" />
          <AccountBox>
            <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
              계좌번호
            </Typography>
            <AccountBoxInner>
              <CustomSelectBox width={140} content={accountValue.bank} />
              <CustomBox content={accountValue.number} />
            </AccountBoxInner>
          </AccountBox>
          <PhotoBox>
            <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
              가게 사진
            </Typography>
            <MultiPhotoDisplay srcArray={imageValue} />
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
