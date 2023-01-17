import { customColor } from '../../constants';
import { Typography } from '../Typography';
import styled from 'styled-components';

interface BoxProps {
  label: string;
  content: string;
}

export const ReadAnswerBox = (props: BoxProps) => {
  return (
    <Wrapper>
      <Label>
        <Typography
          size="16"
          color="orange2"
          fontWeight="bold"
          letterSpacing="-0.5px"
        >
          {props.label}
        </Typography>
      </Label>
      <Box>
        <Typography size="12" letterSpacing="-0.5px">
          {props.content}
        </Typography>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px 0;
`;
const Label = styled.span`
  display: flex;
`;
const Box = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  background: ${customColor.beige};
  border-radius: 12px;
  letter-spacing: -0.5px;
  font-size: 12px;
  height: 225px;
  padding: 16px 18px;
  text-align: left;
`;
