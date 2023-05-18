import { customColor } from 'libs/core/src/constants';
import React from 'react';
import styled from 'styled-components';

export interface ResetButtonProps {
  onClick?: VoidFunction;
}

export const ResetButton: React.FC<ResetButtonProps> = (props) => {
  return (
    <Container onClick={props.onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <g transform="translate(-339 -727)">
          <path
            d="M12,3a9,9,0,1,0,9,9,9.01,9.01,0,0,0-9-9m0-3A12,12,0,1,1,0,12,12,12,0,0,1,12,0Z"
            transform="translate(343 731)"
          />
          <path
            d="M8,1.5H0A1.5,1.5,0,0,1-1.5,0,1.5,1.5,0,0,1,0-1.5H8A1.5,1.5,0,0,1,9.5,0,1.5,1.5,0,0,1,8,1.5Z"
            transform="translate(340.5 743.5)"
          />
          <path
            d="M8,1.5H0A1.5,1.5,0,0,1-1.5,0,1.5,1.5,0,0,1,0-1.5H8A1.5,1.5,0,0,1,9.5,0,1.5,1.5,0,0,1,8,1.5Z"
            transform="translate(361.5 743.5)"
          />
          <path
            d="M0,9.5A1.5,1.5,0,0,1-1.5,8V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V8A1.5,1.5,0,0,1,0,9.5Z"
            transform="translate(355 749.5)"
          />
          <path
            d="M0,9.5A1.5,1.5,0,0,1-1.5,8V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V8A1.5,1.5,0,0,1,0,9.5Z"
            transform="translate(355 728.5)"
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
  background-color: ${customColor.orange2};
  border: 0;
  fill: ${customColor.beige};
  :active {
    background-color: ${customColor.lightGray};
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16) inset;
  }
`;
