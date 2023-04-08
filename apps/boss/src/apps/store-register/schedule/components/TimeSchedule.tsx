import { customColor, Typography } from '@street-vendor/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { atomScheduleModalTime } from 'apps/boss/src/recoil/atoms/atomStoreRegister';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

interface Props {
  handleOpenModal: () => void;
  storeState: 'open' | 'close';
  index: number;
  time: string;
}

export const TimeSchedule = ({
  storeState,
  time,
  index,
  handleOpenModal,
}: Props) => {
  const setModalValue = useSetRecoilState(atomScheduleModalTime);

  return (
    <Button
      type="button"
      onClick={() => {
        setModalValue({
          day: index,
          time: storeState,
          atNoon: time.slice(0, 2) === '오전' ? 0 : 1,
          h: Number(time.slice(3, 5)) - 1,
          m: Number(time.slice(6, 8)),
        });
        handleOpenModal();
      }}
    >
      <Typography size="16" letterSpacing="-0.5px">
        {time}
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
