import { customColor, Typography } from '@street-vendor/core';
import Image from 'next/image';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Counter } from './Counter';
import { MenuType } from '@street-vendor/core';
import { useRecoilState } from 'recoil';
import { menuCount } from '../../../../../recoil/atoms/menuCount';

export const Item = (props: MenuType) => {
  const [menu, setMenu] = useRecoilState(menuCount(props.menuId));
  useEffect(() => {
    setMenu({
      ...menu,
      price: props.menuPrice,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <FoodInfo>
        <Image
          style={{ borderRadius: '12px' }}
          src={props.pictureUrl}
          width={80}
          height={60}
          alt="food"
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography size="16">
            {props.menuName} {props.menuCount}개
          </Typography>
          <Typography size="16">{props.menuPrice}원</Typography>
        </div>
      </FoodInfo>
      <Counter menuId={props.menuId} menuPrice={props.menuPrice}/>
    </Container>
  );
};

const Container = styled.div`
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
