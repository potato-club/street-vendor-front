import { BasicButton, customColor, CustomInput, Typography } from '@street-vendor/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Line, Title } from '../common';

export const Order = () => {
  const { register, formState : { errors } } = useForm();
  return (
    <Container>
      <Wrapper>
        <Title />
        <Line px={1} />
        <FlexColumn className="inputWrapper">
          <CustomInput
            register={register}
            name="phoneNumber"
            placeholder="전화번호를 입력해주세요"
            errors={errors}
            label="주문자 정보"
          />
          <CustomInput
            register={register}
            name="time"
            errors={errors}
            placeholder="언제 오실 예정이신가요?"
            label="가게 방문 예정 시간"
          />
        </FlexColumn>
        <Line px={4} />
        <FlexColumn className="paymentWay">
          <Typography size="20">결제 수단</Typography>
          <BasicButton backgroundColor="orange3" maxWidth={140}>
            <Typography size="16" fontWeight="bold" color="white">
              계좌이체
            </Typography>
          </BasicButton>
        </FlexColumn>
        <Line px={4} />
        <TotalContainer>
          <TotalWrapper>
            <Typography size="24">총 주문금액</Typography>
            <Typography size="20">3000원</Typography>
          </TotalWrapper>
        </TotalContainer>
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
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: ${customColor.white};
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  gap: 20px;
`;

const TotalContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0px 3px 6px ${customColor.gray};
`;

const TotalWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
`;