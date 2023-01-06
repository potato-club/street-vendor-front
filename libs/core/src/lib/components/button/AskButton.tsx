import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';

interface ButtonProps {
  content: string;
  background: 'orange2' | 'orange3';
  onClick?: () => void;
}
interface ButtonStyledProps {
  content: string;
  background: 'orange2' | 'orange3';
}
//  type하면 안되는지 여쭙기!

export const AskButton = (props: ButtonProps) => {
  return (
    <Button
      content={props.content}
      background={props.background}
      onClick={props.onClick}
    >
      <Typography
        size="20"
        color="beige"
        fontWeight="bold"
        letterSpacing="-0.5px"
      >
        {props.content}
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
  width: 160px;
  height: 58px;
  border-radius: 14px;
  background: ${(props) =>
    props.background === 'orange2' ? customColor.orange2 : customColor.orange3};
`;
