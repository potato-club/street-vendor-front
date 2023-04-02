import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { customColor } from '../../../../src/constants';

export const HomeAction: React.FC = () => {
  return (
    <Container href="/home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <g>
          <path d="m25.45,27.09s-.06,0-.1,0h-5.95c-.85.04-1.6-.61-1.69-1.46,0-.04,0-.08,0-.12v-6.11h-3.58v6.11s0,.08,0,.12c-.09.86-.86,1.48-1.69,1.46h-5.78c-1.03.06-1.92-.71-2.03-1.73,0-.04,0-.09,0-.13v-11.83c.01-.7.33-1.33.86-1.74l9.23-7.6s.02-.02.03-.02c.61-.47,1.46-.48,2.07,0l9.74,7.95c.51.4.83,1.02.84,1.7v11.56s0,.09,0,.13c-.11.99-.95,1.74-1.93,1.74Zm-6.19-2.5h0,0Zm-6.68,0h0,0Zm12.92,0h0,0Zm-18.99,0h0,0Zm13.7,0h4.68v-10.75l-9.11-7.44-8.66,7.14v11.05h4.51v-6.21s0-.08,0-.12c.08-.79.76-1.41,1.56-1.36h5.45c.76-.07,1.47.57,1.55,1.35,0,.04,0,.09,0,.13v6.21Zm4.77-10.67s0,0,.01,0h-.01Zm-17.94-.32h0s0,0,0,0Z" />
        </g>
      </svg>
    </Container>
  );
};

const Container = styled(Link)`
  width: 32px;
  height: 32px;
  fill: ${customColor.orange2};
`;
