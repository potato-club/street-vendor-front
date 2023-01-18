import { customColor, Typography } from '@street-vendor/core';
import React from 'react';
import styled from 'styled-components';
import { Title, TotalPrice } from '../common';
import { Item } from './components';
import { OrderButton } from './components/OrderButton';

export const ShoppingBasket = () => {
  return (
    <Container>
      <Wrapper>
        <Title />
        <ItemWrapper>
          <Item />
        </ItemWrapper>
        <AddButton>
          <Typography size="20">+ 메뉴 추가하기</Typography>
        </AddButton>
        <TotalPrice />
      </Wrapper>
      <OrderButton />
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

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const AddButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid ${customColor.gray};
`;
