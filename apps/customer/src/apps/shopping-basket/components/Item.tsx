import { customColor, Typography } from '@street-vendor/core';
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import { Counter } from '../../detail-store/components/menu/components';

export const Item = () => {
  return (
    <Container>
      <FoodInfo>
        <ImageWrapper>
          <Image
            style={{ borderRadius: '12px' }}
            src={'/cat.png'}
            fill
            alt="food"
          />
        </ImageWrapper>
        <PriceAndOrder>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              marginTop: 20,
            }}
          >
            <Typography size="16">떡볶이 1인분</Typography>
            <Typography size="16">1000원</Typography>
          </div>
          <Counter />
        </PriceAndOrder>
      </FoodInfo>
    </Container>
  );
}



const Container = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid ${customColor.gray}60;
  justify-content: center;
  :last-child {
    border-bottom: 1px solid ${customColor.gray}60;
  }
`;

const FoodInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  gap: 20px;
  padding: 20px;
`;

const PriceAndOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  max-width: 300px;
  aspect-ratio: 4 / 3;
`;