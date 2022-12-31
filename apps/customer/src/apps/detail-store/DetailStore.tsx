import React from 'react';
import styled from 'styled-components';
import { StoreImage } from './components';
export const DetailStore = () => {
  return (
    <Container>
      <StoreImage />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
