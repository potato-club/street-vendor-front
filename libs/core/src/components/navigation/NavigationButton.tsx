import { customColor } from 'libs/core/src/constants';
import React from 'react';
import styled from 'styled-components';

export interface NavigationButtonProps {
  onClick: VoidFunction;
}

export const NavigationButton: React.FC<NavigationButtonProps> = (props) => {
  return (
    <Container onClick={props.onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.304"
        height="20.561"
        viewBox="0 0 20.304 20.561"
      >
        <g transform="translate(18.804 19.063) rotate(180)">
          <path
            d="M292.794,48.01a4.707,4.707,0,0,1-.654-.043,1.324,1.324,0,1,1,.369-2.623,7.275,7.275,0,0,0,4.791-1.927,7.475,7.475,0,0,0,2.594-5.823,7.257,7.257,0,0,0-2.446-5.726,6.888,6.888,0,0,0-4.933-1.739,1.324,1.324,0,1,1-.382-2.621,9.451,9.451,0,0,1,7.047,2.356,9.832,9.832,0,0,1,3.362,7.729,10.056,10.056,0,0,1-3.505,7.822,11.188,11.188,0,0,1-3.6,2.094A8.181,8.181,0,0,1,292.794,48.01Z"
            transform="translate(-283.738 -28.946)"
          />
          <path
            d="M17.48,1.148H-.176A1.324,1.324,0,0,1-1.5-.176,1.324,1.324,0,0,1-.176-1.5H17.48A1.324,1.324,0,0,1,18.8-.176,1.324,1.324,0,0,1,17.48,1.148Z"
            transform="translate(0 8.958)"
          />
        </g>
      </svg>
    </Container>
  );
};

const Container = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 2000;
  fill: ${customColor.orange2};
`;
