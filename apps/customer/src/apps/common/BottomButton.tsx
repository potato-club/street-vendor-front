import { BasicButton, Typography } from '@street-vendor/core';
import React from 'react'
import styled from 'styled-components';
type Props = {
  buttonText: string;
}
export const BottomButton = ({ buttonText }: Props) => {
  return (
    <Container>
      <BasicButton
        backgroundColor="orange3"
        maxWidth={320}
        height={54}
        style={{ width: '60%' }}
        shadow
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
