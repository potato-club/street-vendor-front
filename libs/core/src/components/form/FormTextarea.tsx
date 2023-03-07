import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';
import {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
  watch: UseFormWatch<FieldValues>;
}

export const FormTextarea = (props: InputProps) => {
  const commaFormat = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Wrapper>
      <Label>
        <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
          {props.label}
        </Typography>
        <MaxLength>
          <Typography size="12" color="gray" letterSpacing="-0.5px">
            {props.watch(props.value) === undefined
              ? 0
              : commaFormat(props.watch(props.value).length)}
            &nbsp;/&nbsp;{commaFormat(300)}
          </Typography>
        </MaxLength>
      </Label>
      <Textarea
        placeholder={props.placeholder}
        maxLength={300}
        {...props.register(props.value)}
        defaultValue={''}
      />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const Label = styled.label`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
  justify-content: space-between;
  align-items: flex-end;
`;
const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 224px;
  padding: 17px 18px;
  background-color: ${customColor.beige};
  border-radius: 12px;
  font-size: 12px;
  letter-spacing: -0.5px;
  font-family: inherit;
  &::placeholder {
    color: ${customColor.darkGray};
    white-space: pre-wrap;
  }
`;
const MaxLength = styled.span`
  display: flex;
  bottom: 20px;
  right: 24px;
  pointer-events: none;
`;
