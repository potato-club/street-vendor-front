import styled from 'styled-components';
import { AppBarProps, LocationAppBar } from './LocationAppBar';
import { LocationUnderBar } from './LocationUnderBar';

export type AppBarLayoutProps = AppBarProps & React.PropsWithChildren;

export const LocationAppBarLayout: React.FC<AppBarLayoutProps> = (props) => (
  <Container>
    <LocationAppBar {...props} />
    <ChildrenWrapper>{props.children}</ChildrenWrapper>
    <LocationUnderBar />
  </Container>
);

const ChildrenWrapper = styled.div`
  padding-top: 68px;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  width: 100%;
`;
