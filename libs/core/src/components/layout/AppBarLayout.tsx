import styled from 'styled-components';
import { AppBar, AppBarProps } from '../navigation/AppBar';

export type AppBarLayoutProps = AppBarProps & React.PropsWithChildren;

export const AppBarLayout: React.FC<AppBarLayoutProps> = (props) => (
  <Container>
    <AppBar {...props} />
    <ChildrenWrapper>{props.children}</ChildrenWrapper>
  </Container>
);

const ChildrenWrapper = styled.div`
  padding-top: 68px;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
