import { BasicButton, Typography } from '@street-vendor/core';
import React from 'react'
import styled from 'styled-components';
type Props = {
  buttonText: string;
  type?: 'submit' | 'reset' | 'button';
  TopText?: string;
  onClick?: () => void;
};
export const BottomButton = ({ buttonText, type, TopText, onClick }: Props) => {
  return (
    <Container>
      {TopText && (
        <TopTextWrapper>
          <Typography size="16" fontWeight="bold">
            {TopText}
          </Typography>
        </TopTextWrapper>
      )}
      <BasicButton
        onClick={onClick}
        backgroundColor="orange3"
        maxWidth={320}
        height={54}
        style={{ width: '100%' }}
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
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px 0;
`;

const TopTextWrapper = styled.div``