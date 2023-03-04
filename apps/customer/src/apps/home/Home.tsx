import { AppBar, NavigationDrawer } from '@street-vendor/core';
import React from 'react';
import styled from 'styled-components';
import { MarkerMap } from './components/MarkerMap';

export const Home = () => {
  return (
    <Container>
      <AppBar
        title="송도풍림아이원3단지"
        titleAlign="center"
        drawer={
          <NavigationDrawer
            items={[
              { title: '주문내역', url: '' },
              { title: '마이페이지', url: '' },
              { title: '즐겨찾기', url: '' },
              { title: '공지사항', url: '' },
              { title: '고객센터', url: '' },
              { title: '손 안의 노점 소개', url: '' },
            ]}
          />
        }
      />
      <MarkerMap />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
