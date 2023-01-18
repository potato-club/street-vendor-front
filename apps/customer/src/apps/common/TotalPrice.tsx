import { customColor, Typography } from '@street-vendor/core';
import React from 'react'
import styled from 'styled-components';

export const TotalPrice = () => {
  return (
    <Container>
      <Wrapper>
        <Typography size="24">총 주문금액</Typography>
        <Typography size="20">3000원</Typography>
      </Wrapper>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0px 3px 6px ${customColor.gray}80;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
`;