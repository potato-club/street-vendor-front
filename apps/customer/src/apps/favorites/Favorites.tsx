import React from 'react';
import styled from 'styled-components';
import { Store } from './components/Store';

export const Favorites = () => {
  return (
    <Container>
      <Store />
      <Store />
      <Store />
      <Store />
      <Store />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;
