import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';

interface OptionProps {
  value: string;
  name: string;
}
export const AskOption = (props: OptionProps) => {
  return (
    <Option value={props.value}>
      <Typography size="12" letterSpacing="-0.5px">
        {props.name}
      </Typography>
    </Option>
  );
};

const Option = styled.option``;
