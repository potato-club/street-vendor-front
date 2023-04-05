import React from 'react';
import { customColor } from '@street-vendor/core';
import { Info, Menu } from './components';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { useQueryGetDetailStore } from '../../hooks/query/detail-store/useQueryGetDetailStore';
import { StoreImage } from './components/StoreImage';

export const DetailStore = () => {
 const springAnimation = useSpring({
   from: { y: -10 },
   to: { y: -40 },
   config: {
    tension: 100,
   }
 });
 const { isLoading } = useQueryGetDetailStore();

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <Container>
      <StoreImage />
      <ContentWrapper style={springAnimation}>
        <Info />
        <Line />
        <Menu />
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* filter: drop-shadow(3px 3px 10px ${customColor.black}26); */
  /* box-shadow: 3px 3px 10px ${customColor.black}26; */
  /* border-top-left-radius: 24px; */
  /* border-top-right-radius: 24px; */
`;

const ContentWrapper = styled(animated.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${customColor.white};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const Line = styled.hr`
  width: 100%;
  border: solid 6px ${customColor.beige};
`;
