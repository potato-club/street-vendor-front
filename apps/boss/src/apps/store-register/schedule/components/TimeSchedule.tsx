import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';

interface Props {
  day: string;
  handleOpenModal: () => void;
}

export const TimeSchedule = ({ day, handleOpenModal }: Props) => {
  return (
    <Button type="button" onClick={handleOpenModal}>
      <Typography size="16" letterSpacing="-0.5px">
        {day}
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
