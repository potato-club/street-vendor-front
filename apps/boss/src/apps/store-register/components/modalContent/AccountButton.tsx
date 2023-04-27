import { customColor, Typography } from '@street-vendor/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { atomStoreRegisterAccount } from 'apps/boss/src/recoil/atoms/atomStoreRegister';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

interface Props {
  name: string;
  src: string;
}

export const AccountButton = ({ name, src }: Props) => {
  const [accountValue, setAccountValue] = useRecoilState(
    atomStoreRegisterAccount
  );
  const color =
    name === accountValue['bank'] ? customColor.orange4 : customColor.beige;
  return (
    <Button
      onClick={() => {
        setAccountValue({ bank: name, number: accountValue['number'] });
      }}
    >
      <ButtonBody>
        <svg
          width="120"
          height="42"
          viewBox="0 0 122 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 21C0 9.5918 8.01392 0.308289 18 0.00750732V0H18.5H108V0.00750732C108.166 0.00250244 108.333 0 108.5 0C113.77 0 118.526 2.50159 121.895 6.51569C117.821 9.07312 115 14.5974 115 21C115 27.4026 117.821 32.9269 121.895 35.4843C118.526 39.4984 113.77 42 108.5 42C108.333 42 108.166 41.9975 108 41.9925V42H18.5H18V41.9925C8.01392 41.6917 0 32.4082 0 21Z"
            fill={color}
          />
        </svg>
      </ButtonBody>
      <ButtonContent>
        <Image
          src={`/img/accountLogo/${src}.png`}
          alt={src}
          width={21}
          height={21}
        />
        <Typography size="12" letterSpacing="-0.5px">
          {name}
        </Typography>
      </ButtonContent>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  position: relative;
  min-height: 54px;
  min-width: 120px;
  width: 100%;
`;
const ButtonBody = styled.div`
  display: flex;
  position: absolute;
  filter: drop-shadow(0px, 3px, 6px ${customColor.black + '25'});
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 6px), -50%);
  align-items: center;
  gap: 20%;
`;
