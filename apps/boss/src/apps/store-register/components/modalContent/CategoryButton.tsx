import { customColor, Typography } from '@street-vendor/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { atomStoreRegisterCategory } from 'apps/boss/src/recoil/atoms/atomStoreRegister';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { SVGs } from './SVGs';

interface Props {
  name: string;
}

export const CategoryButton = ({ name }: Props) => {
  const [categoryValue, setCategoryValue] = useRecoilState(
    atomStoreRegisterCategory
  );

  const color =
    name === categoryValue ? customColor.orange4 : customColor.beige;
  return (
    <Button
      onClick={() => {
        setCategoryValue(name);
      }}
    >
      <ButtonBody>
        <svg
          width="247"
          height="66"
          viewBox="0 0 247 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_246_476)">
            <path
              d="M220.023 57H33.0001C29.3896 57.007 25.8149 56.2853 22.49 54.878C19.2819 53.5229 16.3673 51.5579 13.908 49.092C11.4421 46.6328 9.4771 43.7182 8.122 40.51C6.71472 37.1852 5.99303 33.6105 6.00005 30C5.99306 26.3896 6.71475 22.8149 8.122 19.49C9.4771 16.2819 11.4421 13.3673 13.908 10.9081C16.3673 8.44221 19.2819 6.4772 22.49 5.12205C25.8149 3.71482 29.3896 2.99308 33.0001 3.00005H220.023C224.013 2.99469 227.955 3.87636 231.563 5.58127C235.171 7.28619 238.355 9.77172 240.884 12.858C235.667 18.173 232.909 24.258 232.909 30.458C232.909 36.4851 235.524 42.423 240.472 47.6311C237.977 50.515 234.905 52.8437 231.455 54.467C227.878 56.1448 223.974 57.0098 220.023 57Z"
              fill={color}
            />
          </g>
          <defs>
            <filter
              id="filter0_d_246_476"
              x="0"
              y="0"
              width="246.884"
              height="66.0001"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="3" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_246_476"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_246_476"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </ButtonBody>
      <ButtonContent>
        <SVGs name={name} isSelected={name === categoryValue} />
        <Typography size="16" letterSpacing="-1.5px">
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
  transform: translate(-50%, calc(-50% - 3px));
  align-items: center;
  justify-content: center;
  gap: 0 7px;
`;
