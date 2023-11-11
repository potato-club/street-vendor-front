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
import { BottomButton, Line, Title, TotalPrice } from '../../../common';
import { PhoneNumberInput } from './components';
import { TimePickerInput } from './components/TimePickerInput';
import { usePostOrder } from '../../../../hooks/query/order/usePostOrder';
import { useQueryGetMenuId } from '../../../../hooks/query/order/useQueryGetMenuId';
import { useRecoilSnapshot } from 'recoil';
import { menuCount } from '../../../../recoil/atoms';
import { OrderDataStateType } from '../../DetailStore';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

export const Order = ({
  orderData,
  totalPrice,
}: OrderDataStateType & { totalPrice: number }) => {
  const {
    register,
    formState: { errors },
    control,
    setValue,
    watch,
    handleSubmit,
  } = useForm();

  const { mutate } = usePostOrder();

  const router = useRouter();

  const submit = async (data: FieldValues) => {
    if (!data.pickUpTime || !data.memberPhoneNumber) {
      toast.error('전화번호와 가게 방문 예정시간을 입력해주세요.');
      return;
    }

    const timeInfo = watch('pickUpTime').split(' '); // '오후', '12', ':', '00'
    const hour =
      timeInfo[0] === '오전' ? timeInfo[1] : Number(timeInfo[1]) + 12;
    const minutes = timeInfo[3];

    const pickUpTimeKorea = new Date();
    pickUpTimeKorea.setHours(hour, minutes, 0, 0); // toISOString 써서 보내줘야함

    // const location = await getPosition();

    const menuPayload = orderData.menus
      .filter((menu) => menu.orderCount > 0)
      .map((menu) => ({ menuId: menu.menuId, count: menu.orderCount }));

    // paymentMethod: 'ACCOUNT_TRANSFER';

    const payload = {
      // location
      location: {
        latitude:37.7708104,
        longitude:126.7021019
      },
      memberPhoneNumber: data.memberPhoneNumber,
      menus: menuPayload,
      paymentMethod: 'ACCOUNT_TRANSFER',
      pickUpTime: pickUpTimeKorea.toISOString(),
      storeId: Number(router.query.id)
    };
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
                watch={watch}
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
            <TotalPrice totalPrice={totalPrice} />
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
