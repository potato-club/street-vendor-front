import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { AskOption } from './AskOption';

interface OptionProps {
  name: string;
  value: string;
}
interface SelectProps {
  label: string;
  placeholder: string;
  options: OptionProps[];
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
}

export const AskSelect = (props: SelectProps) => {
  return (
    <Wrapper>
      <Label>
        <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
          {props.label}
        </Typography>
      </Label>
      <Select defaultValue={''} {...props.register('askType')}>
        <Option value={''} disabled hidden>
          {props.placeholder}
        </Option>
        {props.options.map((item) => (
          <AskOption name={item.name} value={item.value} />
        ))}
      </Select>
      <ArrowIcon>
        <svg
          width="13"
          height="7"
          viewBox="0 0 13 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.16699 1.5L6.33398 5.683L11.5 1.5"
            stroke={customColor.orange2}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ArrowIcon>
      {props.errors['askType'] && (
        <Error>
          <Typography size="16">에러Select</Typography>
        </Error>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
const Label = styled.label`
  margin-bottom: 12px;
`;
const Select = styled.select`
  width: 100%;
  height: 48px;
  padding: 0px 18px;
  background-color: ${customColor.beige};
  border-radius: 12px;
  font-size: 14px;
  font-family: inherit;
  letter-spacing: -0.5px;
  &::placeholder {
    color: ${customColor.darkGray};
    white-space: pre-wrap;
  }
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
const Option = styled.option``;
const ArrowIcon = styled.div`
  display: flex;
  position: absolute;
  bottom: 24px;
  right: 18px;
  transform: translate(0, 50%);
  pointer-events: none;
`;
const Error = styled.span``;
