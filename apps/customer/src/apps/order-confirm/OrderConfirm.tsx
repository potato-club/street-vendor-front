import { customColor, MenuType, Typography } from '@street-vendor/core';
import React from 'react';
import styled from 'styled-components';
import { Title, TotalPrice } from '../common';
import { Item } from './components';
import { BottomButton } from '../common/button/BottomButton';
import { useQueryGetDetailStore } from '../../hooks/query/detail-store/useQueryGetDetailStore';
import Router from 'next/router';

export const OrderConfirm = () => {
  const { data } = useQueryGetDetailStore();
  
  return (
    <Container>
      <Wrapper>
        <Title />
        <ItemWrapper>
          {data?.menuList?.map((menu: MenuType) => (
            <Item key={menu.menuId} {...menu} />
          ))}
        </ItemWrapper>
        <AddButton onClick={() => Router.push(`/detail-store/${Router.query.id}`)}>
          <Typography size="20">+ 메뉴 추가하기</Typography>
        </AddButton>
        <TotalPrice />
      </Wrapper>
      <BottomButton buttonText="주문하기" onClick={() => Router.push(`/order/${Router.query.id}`)}/>
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
