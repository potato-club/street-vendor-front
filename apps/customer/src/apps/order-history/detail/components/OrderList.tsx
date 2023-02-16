import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';

export const OrderList = () => {
  return (
    <Container>
      <Typography size="16" fontWeight="bold">
        주문 내역
      </Typography>
      <Typography size="14">서윤이의 떡볶이 & 보경이의 마라탕 세트</Typography>
    </Container>
  );
};
const Container = styled.div`
  background-color: ${customColor.white};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 22px 22px;
  gap: 16px;
`;
