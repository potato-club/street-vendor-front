import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';

export interface CategoryButtonProps extends PropsWithChildren {
  minimal?: boolean;
  onClick?: VoidFunction;
}

export const CategoryButton: React.FC<CategoryButtonProps> = (props) => {
  return (
    <Container minimal={props.minimal}>
      <Typography size="14" letterSpacing="-0.7px" textAlign="center">
        {props.children}
      </Typography>
    </Container>
  );
};

const Container = styled.div<{ minimal?: boolean }>`
  padding: ${(props) => (props.minimal ? '8px 16px' : '10px 16px')};
  border-radius: 28px;
  background-color: ${customColor.orange4};
  box-shadow: 0px 3px 6px ${customColor.black}29;
`;
