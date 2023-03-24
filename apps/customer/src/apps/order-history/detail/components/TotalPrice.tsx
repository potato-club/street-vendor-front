import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';

export const TotalPrice = () => {
  return (
    <Container>
      <ContainerInner>
        <Typography size="24" fontWeight="bold" letterSpacing="-1.5px">
          총 주문금액
        </Typography>
        <Typography size="20" fontWeight="bold" letterSpacing="-0.5px">
          13,000원
        </Typography>
      </ContainerInner>
    </Container>
  );
};
const Container = styled.div`
  background-color: ${customColor.white};
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 22px 7%;
`;
const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 20px;
  align-items: flex-start;
`;
