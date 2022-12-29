import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  buttonType: '1v1' | 'email';
}
interface ButtonStyledProps {
  buttonType: '1v1' | 'email';
}

export const AskButton = (props: ButtonProps) => {
  return (
    <Button buttonType={props.buttonType}>
      <Content>
        {props.buttonType === '1v1' ? '1:1 문의' : '이메일 문의'}
      </Content>
    </Button>
  );
};

const Button = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  width: 160px;
  height: 58px;
  border-radius: 14px;
  background: ${(props) =>
    props.buttonType === '1v1' ? '#FF8B00' : '#FFAF3A'};
`;
const Content = styled.span`
  color: #f6f1ec;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.5px;
`;
