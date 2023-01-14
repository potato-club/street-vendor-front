import styled from 'styled-components';
import { customColor, Typography } from '@street-vendor/core';

interface ButtonProps {
  isAgreeChecked: boolean;
  onClickAgreeContent: () => void;
  onClickCheckBox: () => void;
}
interface ButtonStyledProps {
  isAgreeChecked: boolean;
}

export const AskAgree = (props: ButtonProps) => {
  return (
    <Wrapper>
      <Label>
        <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
          약관동의
        </Typography>
      </Label>
      <CheckBox onClick={props.onClickCheckBox}>
        <CheckButton isAgreeChecked={props.isAgreeChecked} type="button">
          {props.isAgreeChecked ? 'O' : 'X'}
        </CheckButton>
        <Button onClick={props.onClickAgreeContent}>
          <Typography size="16">개인정보 수집 및 이용 동의하기</Typography>
        </Button>
      </CheckBox>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
const Label = styled.label`
  margin-bottom: 12px;
`;
const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const CheckButton = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: 1px solid ${customColor.orange3};
  border-radius: 14px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 16px 8px;
  border-radius: 14px;
  text-decoration: underline;
  text-underline-position: under;
`;
