import { customColor } from '@street-vendor/core';
import styled from 'styled-components';
import { HiOutlinePlus } from 'react-icons/hi';
import { useRecoilState } from 'recoil';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { atomStoreRegisterMenu } from 'apps/boss/src/recoil/atoms/atomStoreRegister';

export const AddButton = () => {
  const [menuArray, setMenuArray] = useRecoilState(atomStoreRegisterMenu);
  return (
    <Button
      type="button"
      onClick={() =>
        setMenuArray((prev) => [
          ...prev,
          { image: null, name: null, price: null, weight: null },
        ])
      }
    >
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
