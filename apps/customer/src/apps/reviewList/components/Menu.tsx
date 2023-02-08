import { Typography } from '@street-vendor/core';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

export const Menu = () => {
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography size="16">떡볶이 1인분</Typography>
          <Typography size="16">1000원</Typography>
        </div>
      </FoodInfo>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FoodInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
