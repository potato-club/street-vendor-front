import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Search } from '../../apps/search/Search';

export const SearchPage: NextPage = () => {
  const router = useRouter();

  return (
    <Search
      category={
        Array.isArray(router.query.category) ? '' : router.query.category ?? ''
      }
    />
  );
};

export default SearchPage;
