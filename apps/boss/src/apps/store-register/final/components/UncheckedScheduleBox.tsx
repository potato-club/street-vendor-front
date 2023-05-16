import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';

interface BoxProps {
  day: string;
  open: string;
  close: string;
}

export const UncheckedScheduleBox = (props: BoxProps) => {
  return (
    <Wrapper>
      <Box>
        <Typography size="12" letterSpacing="-0.5px" color="gray">
          {props.day}요일
        </Typography>
        <Typography size="12" color="gray">
          {props.open}
        </Typography>
        <Typography size="12" color="gray">
          {props.close}
        </Typography>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  width: 100%;
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48px;
  background: ${customColor.lightGray + '66'};
  border-radius: 12px;
  padding: 0 3%;
  align-items: center;
  justify-content: space-around;
`;
