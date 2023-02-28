import { useState } from 'react';
import {
  customColor,
  CustomInput,
  NextButton,
  Typography,
} from '@street-vendor/core';
import styled from 'styled-components';
import { CustomSelect } from './components/CustomSelect';
import { CustomModal } from './components/CustomModal';
import { QuestionLabel } from './components/QuestionLabel';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import {
  atomStoreRegisterAccount,
  atomStoreRegisterCategory,
} from '../../recoil/atoms/atomStoreRegister';

export const StoreRegister = () => {
  const categoryValue = useRecoilValue(atomStoreRegisterCategory);
  const accountValue = useRecoilValue(atomStoreRegisterAccount);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState('category');
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <Container>
      <CustomModal
        isModalOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
        modalContent={modalContent}
      />
      <Form>
        <FormInner>
          <QuestionLabel label="카테고리">
            <CustomSelect
              init="카테고리 선택"
              content={categoryValue}
              onClick={() => {
                setModalContent('category');
                setIsModalOpen(true);
              }}
            />
          </QuestionLabel>
          <QuestionLabel label="가게 이름">
            <CustomInput
              placeholder="예) 서윤보경네"
              name="storeName"
              register={register}
              errors={errors}
            />
          </QuestionLabel>
          <QuestionLabel label="한줄 설명">
            <CustomInput
              placeholder="예) 분식을 파는 서윤보경네 입니다"
              name="storeDescription"
              register={register}
              errors={errors}
            />
          </QuestionLabel>
          <QuestionLabel label="위치 설명">
            <CustomInput
              placeholder="예) 당정역 2번 출구 앞"
              name="storeLocation"
              register={register}
              errors={errors}
            />
          </QuestionLabel>
          <QuestionLabel label="계좌번호">
            <Account>
              <CustomSelect
                init="은행선택"
                content={accountValue}
                width={140}
                onClick={() => {
                  setModalContent('account');
                  setIsModalOpen(true);
                }}
              />
              <CustomInput
                placeholder="계좌번호 입력"
                name="storeAccountNumber"
                register={register}
                errors={errors}
              />
            </Account>
            <Typography size="12" color="orange1" letterSpacing="-1.0px">
              *계좌입력은 정확히 해주세요
            </Typography>
          </QuestionLabel>
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
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 400px;
  padding-top: 44px;
`;
const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 28px;
  padding: 0 7%;
`;
const Button = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 54px;
  padding-top: 24px;
  justify-content: center;
`;
const Account = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 10px;
`;
