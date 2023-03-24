import { customColor, MenuType, Typography } from '@street-vendor/core';
import { menuCount } from '../../../recoil/atoms/menuCount';
import Image from 'next/image';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Counter } from '../../detail-store/components/menu/components';
export const Item = (props: MenuType) => {
  const menu = useRecoilValue(menuCount(props.menuId));

  return (
    menu.count > 0 && (
      <Container>
        <FoodInfo>
          <ImageWrapper>
            <Image
              style={{ borderRadius: '12px' }}
              src={props.pictureUrl}
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
              <Typography size="16">
                {props.menuName} {props.menuCount}개
              </Typography>
              <Typography size="16">{props.menuPrice}원</Typography>
            </div>
            <Counter menuId={props.menuId} menuPrice={props.menuPrice}/>
          </PriceAndOrder>
        </FoodInfo>
      </Container>
    )
  );
};

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
