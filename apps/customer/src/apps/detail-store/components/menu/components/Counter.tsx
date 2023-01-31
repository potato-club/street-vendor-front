import { customColor, Typography } from '@street-vendor/core';
import React from 'react';
import styled from 'styled-components';

export const Counter = () => {
  return (
    <Container>
      <Wrapper>
        <Button>
          <Typography size="14" fontWeight="bold" color="gray">
            -
          </Typography>
        </Button>
        <Typography size="14" fontWeight="bold" color="black">
          1
        </Typography>
        <Button>
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
