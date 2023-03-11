import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';

export const OrderList = () => {
  return (
    <Container>
      <ContainerInner>
        <Typography size="16" fontWeight="bold" letterSpacing="-1.0px">
          주문 내역
        </Typography>
        <Typography size="14" letterSpacing="-1.0px">
          서윤이의 떡볶이 & 보경이의 마라탕 세트
        </Typography>
      </ContainerInner>
    </Container>
  );
};
const Container = styled.div`
  background-color: ${customColor.white};
  display: flex;
  width: 100%;
  padding: 22px 7%;
  justify-content: center;
`;
const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 12px;
  align-items: flex-start;
`;
