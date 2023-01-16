import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';

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
      <CheckBox>
        <CheckButton
          isAgreeChecked={props.isAgreeChecked}
          type="button"
          onClick={props.onClickCheckBox}
        >
          {props.isAgreeChecked && (
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.07227 8.97119L5.81827 16.0902"
                stroke="#F6F1EC"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M14.3184 1.99023L5.81836 16.0902"
                stroke="#F6F1EC"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          )}
        </CheckButton>
        <Button onClick={props.onClickAgreeContent}>
          <Typography size="16" letterSpacing="-1.5px">
            개인정보 수집 및 이용 동의하기
          </Typography>
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
  gap: 0 3%;
`;
const CheckButton = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: ${(props) =>
    props.isAgreeChecked ? customColor.orange3 : 'none'};
  border: 2px solid ${customColor.orange3};
  border-radius: 10px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  border-radius: 14px;
  text-decoration: underline;
  text-underline-position: under;
  padding: 0;
`;
