import styled from 'styled-components';
import { customColor } from '../../../constants';

export const NavigationDrawer: React.FC = () => {
  return (
    <Background>
      <Container></Container>
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

const Container = styled.div`
  height: 100%;
  margin-right: 48px;
  background-color: ${customColor.beige};
  border-radius: 0px 20px 20px 0px;
`;
