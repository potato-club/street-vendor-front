import styled from 'styled-components';
import { Typography } from '../Typography';
import { NavigationButton } from './NavigationButton';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { CategoryButton } from '../button/CategoryButton';
import useMeasure from 'react-use-measure';
import { Line } from '../Line';
import { customColor } from '../../constants';
import { RecentCategoryButton } from '../button/RecentCategoryButton';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface AppBarProps {
  drawer?: React.ReactNode;
  title?: string;
  titleAlign?: 'left' | 'center' | 'right';
  actions?: React.ReactNode[];
  search?: boolean;
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
                <button
                  style={{
                    backgroundColor: 'transparent',
                    fill: !isSearching ? customColor.orange2 : customColor.gray,
                  }}
                  onClick={() => setIsSearching((value) => !value)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.519"
                    height="25.66"
                    viewBox="0 0 23.519 25.66"
                  >
                    <g transform="matrix(0.985, 0.174, -0.174, 0.985, 3.299, 0)">
                      <path d="M9.5,3A6.5,6.5,0,1,0,16,9.5,6.507,6.507,0,0,0,9.5,3m0-3A9.5,9.5,0,1,1,0,9.5,9.5,9.5,0,0,1,9.5,0Z" />
                      <path
                        d="M5,6.5a1.5,1.5,0,0,1-1.061-.439l-5-5a1.5,1.5,0,0,1,0-2.121,1.5,1.5,0,0,1,2.121,0l5,5A1.5,1.5,0,0,1,5,6.5Z"
                        transform="translate(16.5 15.5)"
                      />
                    </g>
                  </svg>
                </button>
              ) : undefined}
              {props.actions}
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
                    >
                      <CategoryButton>{value}</CategoryButton>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : undefined}
        </Background>
        {/* <div
      style={{
        backgroundColor: customColor.white,
        display: 'flex',
        flexDirection: 'column',
        padding: '22px 22px',
        gap: '16px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
        <Typography size="20" fontWeight="bold" letterSpacing="-0.54px">
          인기 카테고리
        </Typography>
        <Typography size="14" letterSpacing="-0.7px" color="gray">
          오후 8시
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '60px' }}>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
            flex: '1 1',
          }}
        >
          <RankItem rank={1} name="떡볶이" />
          <RankItem rank={2} name="타코야끼" />
          <RankItem rank={3} name="순대" />
          <RankItem rank={4} name="붕어빵" />
          <RankItem rank={5} name="호떡" />
        </div>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
            flex: '1 1',
          }}
        >
          <RankItem rank={6} name="핫도그" state="down" />
          <RankItem rank={7} name="계란빵" state="up" />
        </div>
      </div>
    </div> */}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px;
`;

const ActionContainer = styled.div`
  display: flex;
  gap: 16px;
`;
