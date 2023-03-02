import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Search } from '../../apps/search/Search';

export const SearchPage: NextPage = (props) => {
  const router = useRouter();

  return (
    <Search
      query={Array.isArray(router.query.query) ? '' : router.query.query}
    />
  );
};

export default SearchPage;
