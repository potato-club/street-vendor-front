import React from 'react';
import { AppBarLayout, CategoryButton, Select } from '@street-vendor/core';
import styled from 'styled-components';
import { Store } from '../favorites/components/Store';

export interface SearchProps {
  category: string;
}

export const Search: React.FC<SearchProps> = (props) => {
  return (
    <AppBarLayout title={props.category} search>
      <StoreList>
        <div
          style={{
            display: 'flex',
            gap: 16,
            width: '100%',
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
    </AppBarLayout>
  );
};

const StoreList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  overflow-y: scroll;
`;
