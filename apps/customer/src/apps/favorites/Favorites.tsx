import React from 'react';
import styled from 'styled-components';
import { AppBarLayout } from '../home/Home';
import { Store } from './components/Store';

export const Favorites = () => {
  return (
    <AppBarLayout title='즐겨찾기' home search>
      <Container>
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
      </Container>
    </AppBarLayout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;
