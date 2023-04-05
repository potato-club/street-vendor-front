import { customColor, Typography } from '@street-vendor/core';
import { menuCount, totalPrice } from '../../../../../recoil/atoms';
import React, { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
type Props = {
  menuId: number;
  menuPrice: number;
};
export const Counter = ({ menuId, menuPrice }: Props) => {
  const [menu, setMenu] = useRecoilState(menuCount(menuId));
  const setTotalPrice = useSetRecoilState(totalPrice);
  const handleCount = useCallback(
    (action: string) => {
      if (action === '+') {
        setMenu({
          ...menu,
          count: menu.count + 1,
        });
        setTotalPrice((prev) => prev + menuPrice);
      } else {
        if (menu.count === 0) return;
        setMenu({
          ...menu,
          count: menu.count - 1,
        });
        setTotalPrice((prev) => prev - menuPrice);
      }
    },
    [menu, setMenu]
  );

  return (
    <Container>
      <Wrapper>
        <Button onClick={() => handleCount('-')}>
          <Typography size="14" fontWeight="bold" color="gray">
            -
          </Typography>
        </Button>
        <Typography size="14" fontWeight="bold" color="black">
          {menu.count}
        </Typography>
        <Button onClick={() => handleCount('+')}>
          <Typography size="14" fontWeight="bold" color="black">
            +
          </Typography>
        </Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${customColor.gray}80;
  border-radius: 24px;
  gap: 16px;
  padding: 4px 8px;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  outline: none;
  /* :hover {
    transform: scale(1.01);
  }

  :active {
    transform: scale(0.99);
  } */
`;
