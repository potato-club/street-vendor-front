import { customColor, Typography } from '@street-vendor/core';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { OrderDataStateType } from '../../../DetailStore';
type Props = {
  menuId: number;
  menuPrice: number;
  orderCount?: number
};
export const Counter = ({
  menuId,
  menuPrice,
  setOrderData,
  orderCount = 0,
}: Props & OrderDataStateType) => {
  const [count, setCount] = useState<number>(orderCount);
  const handleCount = useCallback(
    (action: string) => {
      if (action === '+') {
        setCount(count + 1);
      } else {
        if (count === 0) return;
        setCount(count - 1);
      }
    },
    [count, setCount]
  );

  useEffect(() => {
    setOrderData((prev) => {
      const updateMenu = prev?.menus?.map((menu) => {
        // POST 요청보낼때는 orderCount -> count 로 수정해서 보내야함
        if (menu.menuId === menuId) {
          return { ...menu, orderCount: count };
        }
        return { ...menu };
      });
      return { ...prev, menus: updateMenu };
    });
  }, [count, menuPrice, setOrderData, menuId]);

  return (
    <Container>
      <Wrapper>
        <Button onClick={() => handleCount('-')}>
          <Typography size="14" fontWeight="bold" color="gray">
            -
          </Typography>
        </Button>
        <Typography size="14" fontWeight="bold" color="black">
          {count}
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
