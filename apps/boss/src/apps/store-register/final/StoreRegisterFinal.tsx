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
import { CheckedScheduleBox } from './components/CheckedScheduleBox';
import { CustomBox } from './components/CustomBox';
import { CustomMenuBox } from './components/CustomMenuBox';
import { CustomSelectBox } from './components/CustomSelectBox';
import { UncheckedScheduleBox } from './components/UncheckedScheduleBox';

export const StoreRegisterFinal = () => {
  const categoryValue = useRecoilValue(atomStoreRegisterCategory);
  const accountValue = useRecoilValue(atomStoreRegisterAccount);
  const explainValue = useRecoilValue(atomStoreRegisterExplain);
  const scheduleValue = useRecoilValue(atomStoreRegisterSchedule);
  const menuValue = useRecoilValue(atomStoreRegisterMenu);
  const photoValue = useRecoilValue(atomStoreRegisterFile);
  const imageValue = useRecoilValue(atomStoreRegisterImage);

  console.log(scheduleValue);

  return (
    <Container>
      <Form>
        <FormInner>
          <ReadLabelBox label="카테고리" content={categoryValue} isCentertext />
          <ReadLabelBox
            label="가게 이름"
            content={explainValue.name}
            isCentertext
          />
          <ReadLabelBox
            label="한줄 설명"
            content={explainValue.description}
            isCentertext
          />
          <ReadLabelBox
            label="위치 설명"
            content={explainValue.location}
            isCentertext
          />
          <ReadLabelBox
            label="위치 설정"
            content="송도충림아이원3단지"
            isCentertext
          />
          <AccountBox>
            <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
              계좌번호
            </Typography>
            <AccountBoxInner>
              <CustomSelectBox width={140} content={accountValue.bank} />
              <CustomBox content={accountValue.number} />
            </AccountBoxInner>
          </AccountBox>
          <ScheduleBox>
            <Typography size="16" fontWeight="bold" letterSpacing="-1.5px">
              시간 설정
            </Typography>
            <>
              {scheduleValue.map((i, id) => {
                if (i.isChecked) {
                  return (
                    <CheckedScheduleBox
                      key={id}
                      day={i.day}
                      open={i.open}
                      close={i.close}
                    />
                  );
                } else {
                  return (
                    <UncheckedScheduleBox
                      key={id}
                      day={i.day}
                      open={i.open}
                      close={i.close}
                    />
                  );
                }
              })}
            </>
          </ScheduleBox>
          <MenuBox>
            <Typography size="16" fontWeight="bold" letterSpacing="-1.5px">
              메뉴 설정
            </Typography>
            <MenuScroll>
              {menuValue.map((i, id) => (
                <CustomMenuBox key={id} item={i} />
              ))}
            </MenuScroll>
          </MenuBox>
          <PhotoBox>
            <Typography size="16" fontWeight="bold" letterSpacing="-1.5px">
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
const ScheduleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;
const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;
const MenuScroll = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: calc(100% + 7%);
  overflow-x: auto;
`;
