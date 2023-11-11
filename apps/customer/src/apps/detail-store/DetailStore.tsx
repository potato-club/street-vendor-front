import { MenuType, customColor } from '@street-vendor/core';
import dynamic from 'next/dynamic';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQueryGetDetailStore } from '../../hooks/query/detail-store/useQueryGetDetailStore';

const StoreInfo = dynamic(() => import('./steps/storeInfo'));
const OrderConfirm = dynamic(
  () => import('./steps/order-confirm/OrderConfirm')
);

export type StepProps = {
  step?: number;
  setStep: Dispatch<SetStateAction<Steps>>;
};

export type OrderDataType = {
  menus: Array<MenuType>
}

export type Steps = '가게페이지' | '주문확인' | '주문하기';
export type OrderDataStateType = {
  orderData?: OrderDataType;
  setOrderData?: Dispatch<SetStateAction<OrderDataType>>;
};

export const DetailStore = () => {
  // Funnel 패턴
  const [step, setStep] = useState<Steps>('가게페이지');
  const [orderData, setOrderData] = useState<OrderDataType>();

  const { data, isFetching: isLoading } = useQueryGetDetailStore();

  useEffect(() => {
    if (!isLoading) {
      setOrderData({
        menus: data?.menuList,
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <Container>
      {step === '가게페이지' && (
        <StoreInfo
          setStep={setStep}
          orderData={orderData}
          setOrderData={setOrderData}
        />
      )}
      {step === '주문확인' && (
        <OrderConfirm
          setStep={setStep}
          orderData={orderData}
          setOrderData={setOrderData}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* filter: drop-shadow(3px 3px 10px ${customColor.black}26); */
  /* box-shadow: 3px 3px 10px ${customColor.black}26; */
  /* border-top-left-radius: 24px; */
  /* border-top-right-radius: 24px; */
`;
