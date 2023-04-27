import { customColor } from '@street-vendor/core';
import styled from 'styled-components';

interface Props {
  isChecked: boolean;
  handleToggleButton?: () => void;
}

export const ToggleButton = ({ isChecked, handleToggleButton }: Props) => {
  return (
    <Button type="button" onClick={handleToggleButton}>
      <ButtonBody />
      <ButtonThumb isChecked={isChecked} />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  position: relative;
`;
const ButtonBody = styled.div`
  display: flex;
  background: ${customColor.orange3};
  border-radius: 12px;
  width: 48px;
  height: 22px;
`;
const ButtonThumb = styled.div<Props>`
  display: flex;
  position: absolute;
  width: 24px;
  height: 26px;
  border: 1px solid ${customColor.orange3};
  background: ${customColor.white};
  border-radius: 50%;
  top: 50%;
  ${(props) => (props.isChecked ? 'right:0;' : 'left:0;')}
  transform: translateY(-50%);
`;
