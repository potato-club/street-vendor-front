import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';

export interface RecentCategoryButtonProps extends PropsWithChildren {
  onClick?: VoidFunction;
}

export const RecentCategoryButton: React.FC<RecentCategoryButtonProps> = (
  props
) => {
  return (
    <Container>
      <Typography
        size="12"
        fontWeight="bold"
        color="orange2"
        letterSpacing="-0.39px"
      >
        {props.children}
      </Typography>
    </Container>
  );
};

const Container = styled.div`
  padding: 4px 16px;
  border-radius: 12px;
  border: 1px solid ${customColor.orange3};
`;
