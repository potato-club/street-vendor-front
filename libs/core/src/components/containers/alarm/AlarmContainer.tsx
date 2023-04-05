import { AskSelectButton } from '@street-vendor/core';
import { useState } from 'react';
import styled from 'styled-components';
import { NewAlarm } from './alarmList/NewAlarm';
import { PastAlarm } from './alarmList/PastAlarm';

export const AlarmContainer = () => {
  const [isNew, setIsNew] = useState(true);
  return (
    <Container>
      <ToggleMenu>
        <ToggleMenuInner>
          <AskSelectButton
            content="최신"
            isSelected={isNew}
            onClick={() => {
              setIsNew(true);
            }}
          />
          <AskSelectButton
            content="읽은 알림"
            isSelected={!isNew}
            onClick={() => {
              setIsNew(false);
            }}
          />
        </ToggleMenuInner>
      </ToggleMenu>
      {isNew ? <NewAlarm /> : <PastAlarm />}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
`;
const ToggleMenu = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  align-items: center;
`;
const ToggleMenuInner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 82px;
  gap: 0 8%;
  padding: 0 7%;
`;
