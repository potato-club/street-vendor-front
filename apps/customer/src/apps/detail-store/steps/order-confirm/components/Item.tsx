import { customColor, MenuType, Typography } from '@street-vendor/core';
import Image from 'next/image';
import { useMemo } from 'react';
import styled from 'styled-components';
import { Counter } from '../../../components/menu/components';
import { OrderDataStateType } from '../../../DetailStore';
export const Item = (props: MenuType & OrderDataStateType) => {
  // const menu = useRecoilValue(menuCount(props.menuId));
  const menu = useMemo(
    () =>
      props.orderData.menus.filter((menu) => menu.menuId === props.menuId)[0],
    [props.orderData, props.menuId]
  );

  return (
    menu?.orderCount > 0 && (
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
            <Counter
              menuId={props.menuId}
              menuPrice={props.menuPrice}
              setOrderData={props.setOrderData}
              orderCount={props.orderCount}
            />
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
