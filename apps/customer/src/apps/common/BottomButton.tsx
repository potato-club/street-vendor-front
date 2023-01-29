import { BasicButton, Typography } from '@street-vendor/core';
import React from 'react'
import styled from 'styled-components';
type Props = {
  buttonText: string;
  type?: 'submit' | 'reset' | 'button';
};
export const BottomButton = ({ buttonText, type }: Props) => {
  return (
    <Container>
      <BasicButton
        backgroundColor="orange3"
        maxWidth={320}
        height={54}
        style={{ width: '60%' }}
        shadow
        type={type}
      >
        <Typography size="20" color="white" fontWeight="bold">
          {buttonText}
        </Typography>
      </BasicButton>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
