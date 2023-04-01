import { AppBarLayout, AskSelectButton } from '@street-vendor/core';
import { useState } from 'react';
import styled from 'styled-components';
import { NewAlarm } from './alarmList/NewAlarm';
import { PastAlarm } from './alarmList/PastAlarm';

export const AlarmContainer = () => {
  const [isNew, setIsNew] = useState(true);
  return (
    <Container>
      <AppBarLayout title="알림" titleAlign="center" home>
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
      </AppBarLayout>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
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
