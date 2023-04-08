import React from 'react';
import styled from 'styled-components';
import { Review } from './components';
import 'swiper/css';
import { AppBarLayout } from '../home/Home';

export const ReviewList = () => {
  return (
    <AppBarLayout title='리뷰' search home>
      <Container>
        <Review />
        <Review />
      </Container>
    </AppBarLayout>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

