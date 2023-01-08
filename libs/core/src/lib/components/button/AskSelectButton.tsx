import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';

interface ButtonProps {
  content: string;
  isSelected: boolean;
  onClick: () => void;
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
        letterSpacing="-1px"
      >
        {props.content}
      </Typography>
      <UnderBar isSelected={props.isSelected} />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  gap: 6px;
`;
const UnderBar = styled.div<ButtonStyledProps>`
  height: 5px;
  width: 100%;
  max-width: 132px;
  background: ${(props) =>
    props.isSelected ? customColor.orange2 : customColor.gray};
  border-radius: 5px;
`;
