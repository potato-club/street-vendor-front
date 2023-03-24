import { Typography } from '@street-vendor/core';
import React from 'react'
import styled from 'styled-components';

export const Title = () => {
  return (
    <Container>
      <Typography size="24">서윤보경이네 떡볶이집</Typography>
      <Typography size="16" color="orange2" underlineColor="orange2" notBreak>
        가게 위치
      </Typography>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: 8px;
  padding: 20px;
`;