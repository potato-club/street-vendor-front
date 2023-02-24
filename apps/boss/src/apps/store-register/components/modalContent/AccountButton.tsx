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
  const color = name === accountValue ? customColor.orange4 : customColor.beige;
  return (
    <Button
      onClick={() => {
        setAccountValue(name);
      }}
    >
      <ButtonBody>
        <svg
          width="160"
          height="42"
          viewBox="0 0 160 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M145.79 41.9999H18.3921C15.9327 42.0054 13.4977 41.444 11.2328 40.3495C9.04746 39.2955 7.06206 37.7672 5.38683 35.8493C3.70711 33.9365 2.36856 31.6696 1.44548 29.1744C0.486859 26.5884 -0.0047479 23.8081 3.45608e-05 21C-0.00472921 18.1919 0.486877 15.4116 1.44548 12.8256C2.36856 10.3303 3.70711 8.06345 5.38683 6.15069C7.06208 4.23282 9.04747 2.70448 11.2328 1.65048C13.4977 0.555973 15.9327 -0.00537905 18.3921 3.8847e-05H145.79C148.508 -0.0041293 151.193 0.681611 153.651 2.00765C156.108 3.33369 158.277 5.26688 160 7.66735C156.446 11.8012 154.568 16.534 154.568 21.3562C154.568 26.0439 156.349 30.6623 159.719 34.713C158.02 36.956 155.927 38.7673 153.577 40.0298C151.14 41.3347 148.481 42.0075 145.79 41.9999Z"
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
        <Typography size="12" letterSpacing="-1.5px">
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
  min-width: 160px;
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
  width: 160px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% + 36px), -50%);
  align-items: center;
  justify-content: flex-start;
  gap: 0 20px;
`;
