import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';

interface ButtonProps {
  content: string;
  isSelected: boolean;
  onClick?: () => void;
}
interface ButtonStyledProps {
  content?: string;
  isSelected: boolean;
}
export const AskSelectButton = (props: ButtonProps) => {
  return (
    <Button onClick={props.onClick}>
      <Typography
        color={props.isSelected ? 'orange1' : 'gray'}
        size="16"
        fontWeight="bold"
        letterSpacing="-0.5px"
      >
        {props.content}
      </Typography>
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
const UnderBar = styled.div<ButtonStyledProps>`
  height: 5px;
  width: 136px;
  background: ${(props) =>
    props.isSelected ? customColor.orange2 : customColor.gray};
  border-radius: 5px;
`;
