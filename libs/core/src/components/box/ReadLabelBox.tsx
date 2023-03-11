import { customColor } from '../../constants';
import { Typography } from '../Typography';
import styled from 'styled-components';

interface BoxProps {
  label: string;
  content: string;
  textAlign?: 'center' | 'right' | 'left';
}

export const ReadLabelBox = (props: BoxProps) => {
  return (
    <Wrapper>
      <Label>
        <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
          {props.label}
        </Typography>
      </Label>
      <Box>
        <Typography
          size="12"
          letterSpacing="-0.5px"
          textAlign={props.textAlign}
        >
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
  width: 100%;
  height: 48px;
  background: ${customColor.beige};
  border-radius: 12px;
  padding: 0 18px;
  align-items: center;
`;
