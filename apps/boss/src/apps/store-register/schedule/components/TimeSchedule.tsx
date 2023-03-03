import { customColor, Typography } from '@street-vendor/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { atomScheduleModalTime } from 'apps/boss/src/recoil/atoms/atomStoreRegister';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

interface ScheduleType {
  day: string;
  isChecked: boolean;
  open: string;
  close: string;
}
interface Props {
  day: ScheduleType;
  handleOpenModal: () => void;
  time: string;
  index: number;
}

export const TimeSchedule = ({ day, time, index, handleOpenModal }: Props) => {
  const [modalValue, setModalValue] = useRecoilState(atomScheduleModalTime);
  return (
    <Button
      type="button"
      onClick={() => {
        setModalValue({ day: index, time: time });
        handleOpenModal();
      }}
    >
      <Typography size="16" letterSpacing="-0.5px">
        {day[time]}
      </Typography>
      <svg
        width="14"
        height="7"
        viewBox="0 0 14 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.83398 1.5L7.00098 5.683L12.167 1.5"
          stroke={customColor.orange2}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  flex-direction: row;
  gap: 14px;
  white-space: nowrap;
  width: 100px;
  align-items: center;
  justify-content: space-between;
`;
