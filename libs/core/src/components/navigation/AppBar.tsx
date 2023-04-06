import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import styled from 'styled-components';
import { customColor } from '../../constants';
import { Line } from '../Line';
import { Typography } from '../Typography';
import { CategoryButton } from '../button/CategoryButton';
import { RecentCategoryButton } from '../button/RecentCategoryButton';
import { NavigationButton } from './NavigationButton';
import { HomeAction } from './action/HomeAction';
import { NoticeAction } from './action/NoticeAction';
import { SearchAction } from './action/SearchAction';

export interface AppBarProps {
  drawer?: React.ReactNode;
  title?: string;
  titleAlign?: 'left' | 'center' | 'right';
  search?: boolean;
  home?: boolean;
  notice?: boolean;
}

export const AppBar: React.FC<AppBarProps> = (props) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const router = useRouter();

  const [ref, bounds] = useMeasure();

  const styles = useSpring({
    height: !isSearching ? 68 : bounds.height + 68,
  });

  return (
    <>
      <div
        style={{
          display: isSearching ? 'block' : 'none',
          zIndex: 999,
          position: 'fixed',
          backgroundColor: 'rgba(170, 170, 170, 0.8)',
          width: '100vw',
          height: '100vh',
        }}
        onClick={() => setIsSearching(false)}
      ></div>
      <Container isFull={isSearching}>
        {isOpenDrawer ? props.drawer : undefined}
        <Background style={styles}>
          <Header>
            <NavigationButton
              isBack={!props.drawer || isOpenDrawer || isSearching}
              onClick={(isBack) => {
                if (isBack) {
                  if (!(isOpenDrawer || isSearching)) {
                    router.back();
                    return;
                  }

                  setIsOpenDrawer(false);
                  setIsSearching(false);
                  return;
                }

                setIsOpenDrawer(true);
              }}
            />
            {isSearching ? (
              <Typography
                style={{ width: '100%', padding: '0px 12px' }}
                size="14"
                fontWeight="500"
                letterSpacing="-0.42px"
                textAlign="center"
                color="gray"
              >
                오늘 먹을 음식 종류를 골라보세요
              </Typography>
            ) : (
              <Typography
                style={{ width: '100%', padding: '0px 12px' }}
                size="14"
                fontWeight="bold"
                letterSpacing="-0.42px"
                textAlign={props.titleAlign}
              >
                {props.title ?? ''}
              </Typography>
            )}
            <ActionContainer>
              {props.search ? (
                <SearchAction
                  color={!isSearching ? customColor.orange2 : customColor.gray}
                  onClick={() => setIsSearching((value) => !value)}
                />
              ) : undefined}
              {props.home && !isSearching ? <HomeAction /> : undefined}
              {props.notice && !isSearching ? <NoticeAction /> : undefined}
            </ActionContainer>
          </Header>

          {isSearching ? (
            <div
              ref={ref}
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: 8,
              }}
            >
              <Line px={8} color="#F2F2F2" />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '22px',
                  gap: '8px',
                }}
              >
                <Typography size="14" fontWeight="bold" letterSpacing="-0.42px">
                  최근 카테고리
                </Typography>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <RecentCategoryButton>떡볶이</RecentCategoryButton>
                  <RecentCategoryButton>꼬치</RecentCategoryButton>
                  <RecentCategoryButton>타코야끼</RecentCategoryButton>
                  <RecentCategoryButton>커피</RecentCategoryButton>
                </div>
              </div>
              <Line px={8} color="#F2F2F2" />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '22px',
                  gap: '20px',
                }}
              >
                <Typography size="20" fontWeight="bold" letterSpacing="-0.54px">
                  카테고리
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    gap: '16px 24px',
                    flexWrap: 'wrap',
                  }}
                >
                  {[
                    '떡볶이',
                    '순대',
                    '타코야끼',
                    '핫도그',
                    '붕어빵',
                    '호떡',
                    '계란빵',
                    '꼬치',
                    '기타 후식류',
                    '기타 식사류',
                  ].map((value) => (
                    <Link
                      key={value}
                      style={{ flexBasis: '40%', flexGrow: 1 }}
                      href={`/search?category=${value}`}
                      replace={router.pathname === '/search'}
                      onClick={() => setIsSearching(false)}
                      passHref
                    >
                      <CategoryButton>{value}</CategoryButton>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : undefined}
        </Background>
      </Container>
    </>
  );
};

const Container = styled.div<{ isFull: boolean }>`
  z-index: 1000;
  width: 100%;
  height: 68px;
  position: fixed;
`;

const Background = styled(animated.div)`
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 24px 24px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background-color: white;
  overflow: hidden;
`;

const Header = styled.header`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 22px;
`;

const ActionContainer = styled.div`
  display: flex;
  gap: 4px;
`;
