import {
  BasicButton,
  customColor,
  Typography,
} from '@street-vendor/core';
import React, { useCallback } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { BottomButton, Line, Title, TotalPrice } from '../common';
import { PhoneNumberInput } from './components';
import { TimePickerInput } from './components/TimePickerInput';

export const Order = () => {
  const {
    register,
    formState: { errors },
    control,
    setValue,
    handleSubmit
  } = useForm();


  const submit = useCallback((data: FieldValues) => {
    console.log(data);
  }, []);
  
  return (
    <Container>
      <Wrapper>
        <Title />
        <Line px={1} />
        <Form onSubmit={handleSubmit(submit)}>
          <FlexColumn className="inputWrapper">
            <PhoneNumberInput
              control={control}
              name="phoneNumber"
              placeholder="전화번호를 입력해주세요"
              errors={errors}
              label="주문자 정보"
            />
            <TimePickerInput
              name="time"
              label="가게 방문 예정 시간"
              placeholder="언제 오실 예정이신가요?"
              register={register}
              errors={errors}
              setValue={setValue}
            />
          </FlexColumn>
          <Line px={4} />
          <FlexColumn className="paymentWay">
            <Typography size="20">결제 수단</Typography>
            <BasicButton backgroundColor="orange3" maxWidth={112} type="button">
              <Typography size="16" fontWeight="bold" color="white">
                계좌이체
              </Typography>
            </BasicButton>
          </FlexColumn>
          <Line px={4} />
          <TotalPrice />
          <BottomButton buttonText="주문하기" type="submit" />
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${customColor.beige};
  min-height: 100vh;
  padding-bottom: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: ${customColor.white};
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  gap: 20px;
`;
