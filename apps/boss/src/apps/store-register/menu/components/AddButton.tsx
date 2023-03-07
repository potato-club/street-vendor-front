import { customColor } from '@street-vendor/core';
import styled from 'styled-components';
import { HiOutlinePlus } from 'react-icons/hi';

interface Props {
  handleClickButton: () => void;
}

export const AddButton = ({ handleClickButton }: Props) => {
  return (
    <Button type="button" onClick={handleClickButton}>
      <PlusIcon />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  position: relative;
  width: 100%;
  height: 180px;
  justify-content: center;
  align-items: center;
  background: ${customColor.beige};
  box-shadow: 0px 3px 6px 0px ${customColor.black + '25'};
  border-radius: 16px;
`;
const PlusIcon = styled(HiOutlinePlus)`
  display: flex;
  position: absolute;
  font-size: 40px;
  color: ${customColor.orange3};
  pointer-events: none;
`;
