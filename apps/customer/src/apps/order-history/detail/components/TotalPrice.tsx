import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';

export const TotalPrice = () => {
  return (
    <Container>
      <Typography size="20">총 주문금액</Typography>
      <Typography size="24" fontWeight="bold">
        13,000원
      </Typography>
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
  gap: 20px;
`;
