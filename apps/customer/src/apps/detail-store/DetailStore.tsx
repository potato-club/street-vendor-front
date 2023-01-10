import React from 'react';
import { customColor } from '@street-vendor/core';
import { Info, StoreImage, Menu } from './components';
import styled from 'styled-components';

export const DetailStore = () => {
  return (
    <Container>
      <Wrapper>
        <StoreImage />
        <ContentWrapper>
          <Info />
          <Line />
          <Menu />
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* filter: drop-shadow(3px 3px 10px ${customColor.black}26); */
  /* box-shadow: 3px 3px 10px ${customColor.black}26; */
  /* border-top-left-radius: 24px; */
  /* border-top-right-radius: 24px; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Line = styled.hr`
  width: 100%;
  border: solid 6px ${customColor.beige};
`;
