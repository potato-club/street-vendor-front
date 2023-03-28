import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';

interface ButtonProps {
  isAgreeChecked: boolean;
  onClick?: () => void;
}
interface ButtonStyledProps {
  isAgreeChecked: boolean;
}

export const FormSubmit = (props: ButtonProps) => {
  return (
    <Button
      onClick={props.onClick}
      isAgreeChecked={props.isAgreeChecked}
      type="submit"
    >
      <Typography
        size="20"
        color="beige"
        fontWeight="bold"
        letterSpacing="-1px"
      >
        등록하기
      </Typography>
    </Button>
  );
};

const Button = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 16px 0;
  width: 100%;
  border-radius: 14px;
  background: ${(props) =>
    props.isAgreeChecked ? customColor.orange3 : customColor.lightGray};
  margin: 74px 0 54px;
`;
