import { customColor } from '@street-vendor/core';
import React from 'react'
import styled from 'styled-components';
/**
 * @param px: string; 두께
 * @param color: string; color 값 -> opacity 도 필요 시 같이 보내주세요! ex : ${customColor.beige}80
 */

type Props = {
  px: number;
  color?: string;
};
export const Line = (props:Props) => {
  return (
    <Hr {...props} />
  )
}

const Hr = styled.hr<Props>`
  border-bottom: ${({ px, color }) => `${px}px solid ${ color ? color : customColor.beige}`};
  width: 100%;
`;

