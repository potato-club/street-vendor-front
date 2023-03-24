import { customColor } from 'libs/core/src/constants';
import styled from 'styled-components';
import { PastAlarmBar } from '../alarmBarItem/PastAlarmBar';

export const PastAlarm = () => {
  return (
    <Container>
      <PastAlarmBar
        content="픽업 시간 10분 전입니다"
        time="10월 20일 18:00"
        type="time"
      />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: auto;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  background: ${customColor.beige};
`;
