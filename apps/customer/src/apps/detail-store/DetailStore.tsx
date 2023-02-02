import React from 'react';
import { customColor } from '@street-vendor/core';
import { Info, StoreImage, Menu } from './components';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';

export const DetailStore = () => {
 const props = useSpring({
   from: { y: -10 },
   to: { y: -40 },
   config: {
    tension: 100,
   }
 });

  return (
    <Container>
      <StoreImage />
      <ContentWrapper style={props}>
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
