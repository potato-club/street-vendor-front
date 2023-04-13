import { customColor } from 'libs/core/src/constants';
import React from 'react';
import styled from 'styled-components';

export interface NavigationButtonProps {
  onClick: (isBack: boolean) => void;
  isBack?: boolean;
}

export const NavigationButton: React.FC<NavigationButtonProps> = (props) => {
  return (
    <Container onClick={() => props.onClick(props.isBack ?? false)}>
      {props.isBack ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path d="m5.85,15.98s0,.02,0,.04c0,2.94,1.27,5.73,3.5,7.65,1.06.92,2.28,1.63,3.6,2.09.85.31,1.74.48,2.65.5.22,0,.44-.01.65-.04.72-.1,1.23-.77,1.13-1.5-.1-.72-.77-1.23-1.5-1.13-1.78-.03-3.48-.72-4.79-1.93-1.32-1.13-2.18-2.68-2.47-4.36h16.21c.73,0,1.32-.59,1.32-1.32,0-.73-.59-1.32-1.32-1.32H8.56c.22-1.74,1.05-3.36,2.38-4.54,1.35-1.21,3.12-1.83,4.93-1.74.72.13,1.41-.35,1.54-1.07s-.35-1.41-1.07-1.54c-.03,0-.05,0-.08-.01-2.57-.21-5.12.64-7.05,2.35-2.22,1.94-3.46,4.78-3.36,7.73,0,.04,0,.07,0,.11,0,0,0,.02,0,.03Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path d="m7.5,9h16.76c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5H7.5c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5Z" />
          <path d="m7.5,17.55h17c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5H7.5c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5Z" />
          <path d="m24.5,23H7.5c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5h17c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z" />
        </svg>
      )}
    </Container>
  );
};

const Container = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 2000;
  fill: ${customColor.orange2};
`;
