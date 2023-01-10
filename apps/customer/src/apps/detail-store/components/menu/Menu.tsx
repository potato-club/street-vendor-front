import { BasicButton, customColor, Typography } from '@street-vendor/core';
import Image from 'next/image';
import React, { useState } from 'react'
import styled from 'styled-components';
import { Counter, CustomRadioButton } from './components/index';

export const Menu = () => {
    const [filter, setFilter] = useState<string>('basic');
  return (
    <MenuWrapper>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <CustomRadioButton
          id="basic"
          label="기본"
          name="filter"
          selectedValue={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <CustomRadioButton
          id="recommend"
          label="추천순"
          name="filter"
          selectedValue={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <CustomRadioButton
          id="popularity"
          label="인기순"
          name="filter"
          selectedValue={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <ItemWrapper>
        <Item>
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
        </Item>
        <Item>
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
        </Item>
      </ItemWrapper>
      <ButtonWrapper>
        <BasicButton backgroundColor='orange3' flexGrow={1}>
          <Typography size="16" color="white" fontWeight="bold">
            장바구니
          </Typography>
        </BasicButton>
        <BasicButton backgroundColor='orange2' flexGrow={2}>
          <Typography size="16" color="white" fontWeight="bold">
            바로 주문하기
          </Typography>
        </BasicButton>
      </ButtonWrapper>
    </MenuWrapper>
  );
}


const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  max-width: 400px; // Todo 다같이 디자인 확인해보고 max-width 수치 바꿀거면 바꾸기
  /* padding: 10px 20px 20px 20px; */
  padding: 20px 0 20px 0;

  @media screen and (min-width: 375px) {
    padding: 20px 40px 40px 40px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Item = styled.div`
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

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
