import { AppBarLayout, customColor, MenuType, Typography } from '@street-vendor/core';
import React from 'react';
import styled from 'styled-components';
import { Title, TotalPrice } from '../common';
import { Item } from './components';
import { BottomButton } from '../common/button/BottomButton';
import { useQueryGetDetailStore } from '../../hooks/query/detail-store/useQueryGetDetailStore';
import Router from 'next/router';
import { useRecoilValue } from 'recoil';
import { totalPrice } from '../../recoil/atoms';
import toast from 'react-hot-toast';

export const OrderConfirm = () => {
  const { data } = useQueryGetDetailStore();
  const price = useRecoilValue(totalPrice);

  const handleOnClick = () => {
    if(price <= 0) {
      toast.error('선택된 메뉴가 없습니다');
      return
    }
    Router.push(`/order/${Router.query.id}`)
  }
  
  return (
    <AppBarLayout title="주문확인">
      <Container>
        <Wrapper>
          <Title />
          <ItemWrapper>
            {data?.menuList?.map((menu: MenuType) => (
              <Item key={menu.menuId} {...menu} />
            ))}
          </ItemWrapper>
          {price === 0 && (
            <Notice>
              <Typography size="16">선택된 메뉴가 없습니다</Typography>
              <Typography size="16">메뉴를 추가해주세요</Typography>
            </Notice>
          )}
          <AddButton
            onClick={() => Router.push(`/detail-store/${Router.query.id}`)}
          >
            <Typography size="20">+ 메뉴 추가하기</Typography>
          </AddButton>
          <TotalPrice />
        </Wrapper>
        <BottomButton buttonText="주문하기" onClick={handleOnClick} />
      </Container>
    </AppBarLayout>
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

const Notice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 12px 0;
  border-top: 1px solid ${customColor.gray}60;
  border-bottom: 1px solid ${customColor.gray}60;
`;
