import React from 'react';
import styled from 'styled-components';
import { customColor } from '../constants';
import { Typography } from './Typography';

export interface SelectProps {
  options: { name: string; value: string }[];
}

export const Select: React.FC<SelectProps> = (props) => {
  return (
    <Container>
      <Typography
        size="14"
        fontWeight="bold"
        letterSpacing="-0.42dp"
        color="orange2"
      >
        인기순
      </Typography>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${customColor.beige};
  padding: 8px 16px;
  border-radius: 24px;
  box-shadow: 0px 3px 6px ${customColor.black}29;
`;
