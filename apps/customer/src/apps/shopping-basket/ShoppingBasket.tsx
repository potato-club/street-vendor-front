import { BasicButton, customColor, Typography } from '@street-vendor/core';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Counter } from '../detail-store/components/menu/components';

export const ShoppingBasket = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <Typography size="24">서윤보경이네 떡볶이집</Typography>
          <Typography
            size="16"
            color="orange2"
            underlineColor="orange2"
            notBreak
          >
            가게 위치
          </Typography>
        </Title>
        <ItemWrapper>
          <Item>
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
          </Item>
        </ItemWrapper>
        <AddButton>
          <Typography size="20">+ 메뉴 추가하기</Typography>
        </AddButton>
        <Total>
          <div style={{ width: '100%', maxWidth: 400, padding: 20 }}>
            <Typography size="24">총 주문금액</Typography>
            <Typography size="20">3000원</Typography>
          </div>
        </Total>
      </Wrapper>
      <ButtonWrapper>
        <BasicButton
          backgroundColor="orange3"
          maxWidth={320}
          height={54}
          style={{ width: '60%' }}
        >
          <Typography size="20" color="white" fontWeight="bold">
            주문하기
          </Typography>
        </BasicButton>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${customColor.beige};
  min-height: 100vh;
  position: relative;
  padding-bottom: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: ${customColor.white};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: 8px;
  padding: 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Item = styled.div`
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
  width: 50%;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  max-width: 300px;
  aspect-ratio: 16 / 9;
`;

const AddButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid ${customColor.gray};
`;

const Total = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0px 3px 6px ${customColor.gray};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
