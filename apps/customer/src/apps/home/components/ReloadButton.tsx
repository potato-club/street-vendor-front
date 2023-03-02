import { customColor } from '@street-vendor/core';
import React from 'react';
import styled from 'styled-components';

export interface ReloadButtonProps {
  onClick: VoidFunction;
}

export const ReloadButton: React.FC<ReloadButtonProps> = (props) => {
  return (
    <Container onClick={props.onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38.084"
        height="38.084"
        viewBox="0 0 38.084 38.084"
      >
        <g transform="translate(208.085 -2488.963)">
          <path
            className="a"
            d="M109.728,122.376a12.646,12.646,0,1,1,10.923-6.269.988.988,0,1,1-1.705-1,10.674,10.674,0,1,0-9.218,5.292,10.852,10.852,0,0,0,1.247-.073.988.988,0,1,1,.228,1.962,12.8,12.8,0,0,1-1.475.086"
            transform="translate(-298.787 2398.519)"
          />
          <path
            className="a"
            d="M109.728,122.876a13.146,13.146,0,1,1,11.355-6.517,1.488,1.488,0,0,1-2.568-1.5,10.174,10.174,0,1,0-8.787,5.044,10.349,10.349,0,0,0,1.189-.069,1.506,1.506,0,0,1,.173-.01,1.488,1.488,0,0,1,.17,2.966A13.305,13.305,0,0,1,109.728,122.876Zm0-25.3a12.149,12.149,0,0,0,0,24.3,12.3,12.3,0,0,0,1.417-.083.488.488,0,0,0-.055-.972.5.5,0,0,0-.058,0,11.355,11.355,0,0,1-1.3.076,11.17,11.17,0,1,1,9.65-5.539.488.488,0,0,0,.175.667.48.48,0,0,0,.245.067.49.49,0,0,0,.422-.241,12.15,12.15,0,0,0-10.492-18.275Z"
            transform="translate(-298.787 2398.519)"
          />
          <path
            className="a"
            d="M402.752,313.291a.988.988,0,0,1-.935-.671l-1.255-3.71a.988.988,0,1,1,1.872-.633l.99,2.926,3.408-.516a.988.988,0,1,1,.3,1.953l-4.227.64a1,1,0,0,1-.149.011"
            transform="translate(-582.52 2202.521)"
          />
          <path
            className="a"
            d="M402.752,313.791a1.487,1.487,0,0,1-1.409-1.011l-1.255-3.71a1.488,1.488,0,1,1,2.819-.953l.855,2.529,2.994-.454a1.488,1.488,0,1,1,.446,2.942l-4.227.64A1.508,1.508,0,0,1,402.752,313.791ZM401.5,308.1a.488.488,0,0,0-.462.644l1.255,3.71a.487.487,0,0,0,.461.332.5.5,0,0,0,.074-.006l4.226-.64a.488.488,0,0,0-.072-.97.5.5,0,0,0-.074.006l-3.822.579-1.124-3.323A.488.488,0,0,0,401.5,308.1Z"
            transform="translate(-582.52 2202.521)"
          />
        </g>
      </svg>
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.16);
  background-color: ${customColor.white};
  border: 0;
  fill: ${customColor.orange2};
`;
