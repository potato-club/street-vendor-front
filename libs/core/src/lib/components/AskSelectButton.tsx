import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  buttonType: '1v1' | 'my1v1' | 'email' | 'myEmail';
  isSelected: boolean;
}
interface ButtonStyledProps {
  buttonType?: '1v1' | 'my1v1' | 'email' | 'myEmail';
  isSelected: boolean;
}

export const AskSelectButton = (props: ButtonProps) => {
  return (
    <Button>
      <Content isSelected={props.isSelected}>
        {props.buttonType === '1v1' && '1:1 문의'}
        {props.buttonType === 'my1v1' && '나의 문의내역'}
        {props.buttonType === 'email' && '이메일 문의'}
        {props.buttonType === 'myEmail' && '나의 문의내역'}
      </Content>
      <UnderBar isSelected={props.isSelected} />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  gap: 8px;
`;
const Content = styled.span<ButtonStyledProps>`
  color: ${(props) => (props.isSelected ? '#FF6600' : '#ADADAD')};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.5px;
`;
const UnderBar = styled.div<ButtonStyledProps>`
  height: 5px;
  width: 136px;
  background: ${(props) => (props.isSelected ? '#FF8B00' : '#ADADAD')};
  border-radius: 5px;
`;
