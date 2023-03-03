import { customColor, Typography } from '@street-vendor/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { atomStoreRegisterSchedule } from 'apps/boss/src/recoil/atoms/atomStoreRegister';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { TimeSchedule } from './TimeSchedule';
import { ToggleButton } from './ToggleButton';

interface Props {
  index: number;
  handleOpenModal: () => void;
}
interface StyledProps {
  isChecked: boolean;
}

export const DaySchedule = ({ index, handleOpenModal }: Props) => {
  const [scheduleValue, setScheduleValue] = useRecoilState(
    atomStoreRegisterSchedule
  );
  const handleToggleButton = () => {
    setScheduleValue(
      scheduleValue.map((i, id) =>
        id === index
          ? {
              day: i.day,
              isChecked: !i.isChecked,
              open: i.open,
              close: i.close,
            }
          : i
      )
    );
  };
  return (
    <Wrapper isChecked={scheduleValue[index].isChecked}>
      <Schedule>
        <Typography size={'20'} fontWeight="bold">
          {scheduleValue[index].day}
        </Typography>
        <TimeScheduler>
          <TimeSchedule
            day={scheduleValue[index]}
            time="open"
            handleOpenModal={handleOpenModal}
            index={index}
          />
          <TimeSchedule
            day={scheduleValue[index]}
            time="close"
            handleOpenModal={handleOpenModal}
            index={index}
          />
        </TimeScheduler>
      </Schedule>
      <ToggleButton
        isChecked={scheduleValue[index].isChecked}
        handleToggleButton={handleToggleButton}
      />
    </Wrapper>
  );
};

const Wrapper = styled.article<StyledProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 94px;
  padding-left: 8%;
  padding-right: 5%;
  background: ${customColor.beige};
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  ${(props) => !props.isChecked && 'filter: grayscale(70%);'}
`;
const Schedule = styled.div`
  display: flex;
  flex-direction: row;
  flex: auto;
  gap: 10%;
  align-items: center;
`;
const TimeScheduler = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
