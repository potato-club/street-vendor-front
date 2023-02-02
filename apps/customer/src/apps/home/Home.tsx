import { AppBar } from '@street-vendor/core';
import React from 'react';
import styled from 'styled-components';
import { MarkerMap } from './components/MarkerMap';

export const Home = () => {
  return (
    <Container>
      <AppBar />
      <MarkerMap />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
