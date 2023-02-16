import styled from 'styled-components';
import { Typography } from '../Typography';
import { NavigationDrawer } from './drawer/NavigationDrawer';
import { NavigationButton } from './NavigationButton';
import { useState } from 'react';

export interface AppBarProps {
  drawer: React.ReactNode;
  title?: string;
  actions?: React.ReactNode[];
}

export const AppBar: React.FC<AppBarProps> = (props) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <Wrapper>
      {isOpenDrawer ? props.drawer : undefined}
      <Container>
        <NavigationButton
          isBack={!props.drawer || isOpenDrawer}
          onClick={() => setIsOpenDrawer((value) => !value)}
        />
        <Typography size="14" fontWeight="bold">
          {props.title ?? ''}
        </Typography>
        <ActionContainer>{props.actions}</ActionContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1000;
`;

const Container = styled.header`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px;
  border-radius: 0px 0px 24px 24px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background: white;
`;

const ActionContainer = styled.div`
  display: flex;
  gap: 16px;
`;
