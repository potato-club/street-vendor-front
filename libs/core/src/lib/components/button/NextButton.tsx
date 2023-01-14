import React from 'react';
import styled from 'styled-components';
import { customColor } from '@street-vendor/core';
import { customColorType } from 'libs/core/src/constants/customColor';

interface ButtonProps {
  background: keyof customColorType;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NextButton = (props: ButtonProps) => {
  return (
    <Button onClick={props.onClick}>
      <svg
        width="236"
        height="54"
        viewBox="0 0 236 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M214.689 52.7287H26.6139C23.0882 52.7287 19.6683 52.0384 16.4492 50.6768C13.3396 49.3616 10.5469 47.4787 8.14847 45.0802C5.75009 42.6819 3.86715 39.8891 2.55191 36.7795C1.19035 33.5604 0.5 30.1405 0.5 26.6148C0.5 23.0891 1.19035 19.6691 2.55191 16.4499C3.86712 13.3403 5.75006 10.5474 8.14847 8.14891C10.5469 5.75038 13.3396 3.86732 16.4492 2.55206C19.6684 1.19041 23.0883 0.5 26.6139 0.5H214.689C222.351 0.5 229.557 3.82477 234.533 9.63807C229.389 14.9081 226.673 20.9256 226.673 27.0657C226.673 33.0325 229.245 38.9004 234.119 44.0624C231.774 46.6698 228.877 48.8193 225.714 50.2946C222.25 51.9097 218.541 52.7287 214.689 52.7287Z"
          fill={customColor[props.background]}
        />
        <path
          d="M214.689 52.2287C218.467 52.2287 222.105 51.4255 225.502 49.8414C228.467 48.4585 231.195 46.4715 233.438 44.0654C228.681 38.8915 226.173 33.0314 226.173 27.0657C226.173 20.921 228.825 14.907 233.855 9.621C228.987 4.13066 222.052 1 214.689 1H26.6139C23.1556 1 19.8012 1.67712 16.644 3.01256C13.594 4.30262 10.8546 6.14968 8.50203 8.50244C6.14938 10.8552 4.30241 13.5946 3.01241 16.6447C1.67709 19.8019 1 23.1564 1 26.6148C1 30.0732 1.67709 33.4276 3.01241 36.5847C4.30244 39.6348 6.14941 42.3741 8.50203 44.7267C10.8547 47.0793 13.594 48.9263 16.644 50.2163C19.8011 51.5516 23.1555 52.2287 26.6139 52.2287H214.689ZM214.689 53.2287H26.6139C23.0209 53.2287 19.5355 52.5251 16.2544 51.1373C13.0853 49.7969 10.2391 47.878 7.79491 45.4338C5.35079 42.9897 3.43185 40.1435 2.09141 36.9743C0.703647 33.6932 0 30.2078 0 26.6148C0 23.0218 0.703647 19.5364 2.09141 16.2552C3.43182 13.0859 5.35076 10.2396 7.79491 7.79535C10.2391 5.35106 13.0853 3.43203 16.2544 2.09156C19.5356 0.703706 23.021 0 26.6139 0H214.689C222.651 0 230.13 3.52282 235.209 9.66521C229.951 14.9169 227.173 20.9334 227.173 27.0657C227.173 33.0291 229.809 38.9019 234.798 44.049C232.356 46.8636 229.287 49.1795 225.925 50.7477C222.395 52.394 218.614 53.2287 214.689 53.2287Z"
          fill={customColor[props.background]}
        />
      </svg>
      <Content>{props.children}</Content>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  position: relative;
`;
const Content = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
