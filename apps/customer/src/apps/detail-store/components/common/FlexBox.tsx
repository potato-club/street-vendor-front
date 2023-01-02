import React, { ReactNode } from 'react'
import styled from 'styled-components';
type Props = {
  children: ReactNode;
  gap?: number;
}
export const FlexBox = ({gap, children}: Props) => {
  return (
    <Container gap={gap}>{children}</Container>
  )
}

const Container = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${({ gap }) => `${gap}px`};
  align-items: center;
  justify-content: center;
`;