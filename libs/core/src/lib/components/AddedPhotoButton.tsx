import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  src: string;
}
interface ButtonStyledProps {
  src: string;
}

export const AddedPhotoButton = (props: ButtonProps) => {
  return <Button>{/* <Img src={props.src} /> */}</Button>;
};

const Button = styled.button`
  display: flex;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  position: relative;
  background: #f6f1ec;
  border-radius: 10px;
`;
const Img = styled.image<ButtonStyledProps>`
  width: 100%;
  height: 100%;
`;
