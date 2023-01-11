import { customColor, Typography } from '@street-vendor/core';
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import { Counter } from './Counter';

export const Item = () => {
  return (
    <Container>
      <FoodInfo>
        <Image
          style={{ borderRadius: '12px' }}
          src={'/cat.png'}
          width={80}
          height={60}
          alt="food"
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography size="16">떡볶이 1인분</Typography>
          <Typography size="16">1000원</Typography>
        </div>
      </FoodInfo>
      <Counter />
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  border-top: 1px solid ${customColor.gray};
  padding: 16px 0;
  justify-content: space-between;
  :last-child {
    border-bottom: 1px solid ${customColor.gray};
  }
`;

const FoodInfo = styled.div`
  display: flex;
  gap: 8px;
`;
