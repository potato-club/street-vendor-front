import {
  AppBarLayout,
  BasicButton,
  customColor,
  getPosition,
  Typography,
} from '@street-vendor/core';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { BottomButton, Line, Title, TotalPrice } from '../common';
import { PhoneNumberInput } from './components';
import { TimePickerInput } from './components/TimePickerInput';
import { usePostOrder } from '../../hooks/query/order/usePostOrder';
import { useQueryGetMenuId } from '../../hooks/query/order/useQueryGetMenuId';
import { useRecoilSnapshot } from 'recoil';
import { menuCount } from '../../recoil/atoms';

export const Order = () => {
  const {
    register,
    formState: { errors },
    control,
    setValue,
    handleSubmit,
  } = useForm();

  const { mutate } = usePostOrder();

  const { data: ids } = useQueryGetMenuId();

  const snapshot = useRecoilSnapshot();

  const submit = async (data: FieldValues) => {
    if (!ids) return;

    const location = await getPosition();

    const payload = {
      ...data,
      menus: ids.map((id: number) => {
        const menuInfo = snapshot.getLoadable(menuCount(id));
        const {
          contents: { menuId, count },
        } = menuInfo;
        return { menuId, count };
      }),
      location,
      // location: {
      //   latitude:37.7708104,
      //   longitude:126.7021019
      // },
      paymentMethod: 'ACCOUNT_TRANSFER',
    };

    console.log(payload);

    mutate(payload)
  };

  return (
    <AppBarLayout title="주문하기">
      <Container>
        <Wrapper>
          <Title />
          <Line px={1} />
          <Form onSubmit={handleSubmit(submit)}>
            <FlexColumn className="inputWrapper">
              <PhoneNumberInput
                control={control}
                name="memberPhoneNumber"
                placeholder="전화번호를 입력해주세요"
                errors={errors}
                label="주문자 정보"
              />
              <TimePickerInput
                name="pickUpTime"
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
              <BasicButton
                backgroundColor="orange3"
                maxWidth={112}
                type="button"
              >
                <Typography size="16" fontWeight="bold" color="white">
                  계좌이체
                </Typography>
              </BasicButton>
            </FlexColumn>
            <Line px={4} />
            <TotalPrice />
            <BottomButton
              buttonText="주문하기"
              type="submit"
              TopText="꼭 가게 방문 예정 시간에 방문해주세요!"
            />
          </Form>
        </Wrapper>
      </Container>
    </AppBarLayout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${customColor.beige};
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
