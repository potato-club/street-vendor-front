import React from 'react';
import styled from 'styled-components';
import { Review } from './components';
import 'swiper/css';

export const ReviewList = () => {
  return (
    <Container>
      <Review />
      <Review />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

