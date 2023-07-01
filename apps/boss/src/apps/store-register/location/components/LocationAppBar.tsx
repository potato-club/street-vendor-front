import { Typography } from '@street-vendor/core';
import { NextAction } from 'libs/core/src/components/navigation/action/NextAction';
import { NavigationButton } from 'libs/core/src/components/navigation/NavigationButton';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { ArrowSvg } from './ArrowSvg';
import { SearchBox } from './SearchBox';
import Router from 'next/router';
import { pathName } from '../../../../configs/pathName';

export interface AppBarProps {
  content?: string;
}

interface SearchProps {
  isSearching: boolean;
}

export const LocationAppBar: React.FC<AppBarProps> = (props) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleNext = () => {
    Router.push(pathName.STORE_REGISTER.SCHEDULE);
  };

  return (
    <>
      <Container
        style={useSpring({
          height: isSearching ? window.innerHeight / 2 : +68,
        })}
      >
        <Background>
          <Header>
            <NavigationButton isBack={true} onClick={() => Router.back()} />
            <SearchHeader onClick={() => setIsSearching(!isSearching)}>
              <Typography
                size="14"
                fontWeight="bold"
                letterSpacing="-0.42px"
                textAlign="center"
              >
                위치 설정
              </Typography>
              <animated.div
                style={useSpring({
                  transform: `rotate(${isSearching ? '-180deg' : '0deg'})`,
                })}
              >
                <ArrowSvg />
              </animated.div>
            </SearchHeader>
            <NextAction onClick={handleNext} />
          </Header>
          <SearchBox />
        </Background>
      </Container>
    </>
  );
};

const Container = styled(animated.div)`
  z-index: 1000;
  width: 100%;
  position: fixed;
`;

const Background = styled(animated.div)`
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 24px 24px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background-color: white;
  overflow: hidden;
  padding: 0 16px;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  min-height: 68px;
  align-items: center;
`;

const SearchHeader = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const SearchContainer = styled.div`
  display: flex;
  padding: 0 4.5%;
`;
