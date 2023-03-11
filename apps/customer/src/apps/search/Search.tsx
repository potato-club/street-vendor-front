import { AppBar, Select } from '@street-vendor/core';
import { CategoryButton } from 'libs/core/src/components/button/CategoryButton';
import React from 'react';
import styled from 'styled-components';
import { Store } from '../favorites/components/Store';

export interface SearchProps {
  query: string;
}

export const Search: React.FC<SearchProps> = (props) => {
  return (
    <Container>
      <AppBar title={props.query} />
      <StoreList>
        <div
          style={{
            display: 'flex',
            gap: 16,
            width: '100%',
            height: '100px',
          }}
        >
          <Select options={[]} />
          <CategoryButton minimal>떡볶이</CategoryButton>
          <CategoryButton minimal>순대</CategoryButton>
          <CategoryButton minimal>타코야끼</CategoryButton>
        </div>
        <Store />
        <Store />
        <Store />
        <Store />
        <Store />
      </StoreList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StoreList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  overflow-y: scroll;
`;
