import { animated, useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import styled from 'styled-components';
import { customColor } from '../../../constants';
import { BasicButton } from '../../button/BasicButton';
import { Typography } from '../../Typography';
import { NavigationDrawerItem } from './NavigationDrawerItem';
import { ProfileImage } from './ProfileImage';

export interface NavigationDrawerProps {
  items: { title: string; url: string }[];
  nickname: string;
  profileImage: string;
  onLogout: VoidFunction;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = (props) => {
  const [ref, bounds] = useMeasure();

  const styles = useSpring({
    from: {
      transform: `translate(-${bounds.width}px, 0px)`,
    },
    to: {
      transform: `translate(0px, 0px)`,
    },
  });

  return (
    <Background>
      <Container ref={ref} style={styles}>
        <div
          style={{
            display: 'flex',
            padding: '0px 0px 32px 40px',
          }}
        >
          <ProfileImage src={props.profileImage} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '16px 0px 0px 24px',
              gap: 12,
              flexGrow: 1,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
              <Typography size="16" fontWeight="bold">
                {props.nickname}
              </Typography>
              <Typography size="14" fontWeight="500">
                님
              </Typography>
            </div>
            <Typography size="14" fontWeight="500">
              맛있는 시간 되세요!
            </Typography>
            <BasicButton
              backgroundColor="orange3"
              borderRadius={100}
              maxWidth={120}
              height={36}
              shadow
            >
              <Typography size="16" color="white">
                프로필 변경
              </Typography>
            </BasicButton>
          </div>
        </div>
        <div
          style={{
            flexGrow: 1,
            backgroundColor: customColor.white,
            padding: '16px 0px',
            overflowY: 'scroll',
          }}
        >
          {props.items.map((value) => (
            <NavigationDrawerItem
              key={value.title}
              title={value.title}
              url={value.url}
            />
          ))}
        </div>
        <BasicButton
          style={{ margin: '24px 0px 28px 32px' }}
          backgroundColor="orange2"
          borderRadius={100}
          maxWidth={120}
          height={40}
          shadow
          onClick={props.onLogout}
        >
          <Typography size="16" color="white" fontWeight="bold">
            로그아웃
          </Typography>
        </BasicButton>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  background-color: rgba(170, 170, 170, 0.8);
`;

const Container = styled(animated.div)`
  transform: translate(-1000px, 0px);
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: 48px;
  background-color: ${customColor.beige};
  border-radius: 0px 20px 20px 0px;
`;
