import React, { useState } from 'react';
import styled from 'styled-components';
import { customColor, Typography } from '@street-vendor/core';
import { Info, StoreImage } from './components';
import { CustomRadioButton } from './components/Menu/CustomRadioButton';
import { FlexBox } from './components/common/FlexBox';
import Image from 'next/image';
export const DetailStore = () => {
  const [filter, setFilter] = useState<string>('basic');
  return (
    <Container>
      <StoreImage />
      <Info />
      <Line />
      <Wrapper>
        <FlexBox gap={12}>
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
        </FlexBox>
        <ItemWrapper>
          <Item>
            <Food>
              <Image
                style={{ borderRadius: '12px' }}
                src={'/cat.png'}
                width={80}
                height={60}
                alt="food"
              />
              <Typography size="16">떡볶이 1인분 1000원</Typography>
            </Food>
            <Counter>- 1 +</Counter>
          </Item>
        </ItemWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* filter: drop-shadow(3px 3px 10px ${customColor.black}26); */
  /* box-shadow: 3px 3px 10px ${customColor.black}26; */
  /* border-top-left-radius: 24px; */
  /* border-top-right-radius: 24px; */
`;

const Line = styled.hr`
  width: 100%;
  border: solid 6px ${customColor.beige};
  margin: 20px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  padding: 16px 0;
  justify-content: center;
  :not(:last-child) {
    border-bottom: 1px solid ${customColor.gray}80;
  }
`;

const Item = styled.div`
  display: flex;
`;

const Food = styled.div`
  display: flex;
  gap: 8px;
`;

const Counter = styled.div`
  display: flex;
  align-items: flex-end;
`;
